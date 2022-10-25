import { useState, useRef, useLayoutEffect, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

type ParallaxProps = {
    children: ReactNode
    offset?: number
}

const Parallax = ({ children, offset = 25 }: ParallaxProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion()
    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    const { scrollY } = useScroll()

    // start animating our element when we've scrolled it into view
    const initial = elementTop - clientHeight
    // end our animation when we've scrolled the offset specified
    const final = elementTop + offset

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
    // apply a spring to ease the result
    const y = useSpring(yRange, { stiffness: 400, damping: 90 })

    useLayoutEffect(() => {
        const element = ref.current
        // save our layout measurements in a function in order to trigger
        // it both on mount and on resize
        const onResize = () => {

            const clientTop = element?.getBoundingClientRect().top;
            let elementTop = 0;
            if (clientTop) {
                elementTop = clientTop + window.scrollY;
            }

            // use getBoundingClientRect instead of offsetTop in order to
            // get the offset relative to the viewport
            setElementTop(elementTop)
            setClientHeight(window.innerHeight)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [ref])

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <>{children}</>
    }

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    )
}

export default Parallax;