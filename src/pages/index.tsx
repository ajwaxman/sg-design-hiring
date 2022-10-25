import type { NextPage } from "next";
import Image from "next/image"
import Head from "next/head";
import Parallax from "./components/parallax";

const incentives = [
    {
        name: 'Interfaces Matter',
        description: "Everything has an interface. Apps. APIs. Teams. People. We take atypical care in defining and crafting interactions.",
        emoji: '📱',
        imageSrc: '',
    },
    {
        name: 'Obsessed',
        description: 'Thousands of small details make the difference between good and amazing. We get absorbed in every pixel, every word of copy, every customer interaction.',
        emoji: '😍',
        imageSrc: '',
    },
    {
        name: 'Consumer Advocates',
        description: "People create the magic of live entertainment; we work in an industry that often forgets that. We start with the fans and everything else follows.",
        emoji: '🙌',
        imageSrc: '',
    },
]

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SeatGeek Design</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="bg-blend-overlay bg-[#232323] grayscale bg-[url('/images/portland.jpg')] bg-cover bg-center mx-auto flex min-h-[75vh] flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold leading-normal drop-shadow-lg text-white md:text-[5rem]">
                        SeatGeek Design
                    </h1>
                    <p className="text-xl text-silver-dark drop-shadow-lg">Help the world experience more live.</p>
                    <div className="rounded-md shadow mt-8">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border 
                                    transition-all duration-300
                                    backdrop-blur-sm
                                    border-[#949494] bg-black/20
                                    hover:bg-white/[.08]
                                    active:bg-black/20
                                    px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                        >
                            View openings
                        </a>
                    </div>
                </div>
                {/* <div className="bg-gray-dark mx-auto flex min-h-[85vh] flex-col items-center justify-center p-4">
                    <h1 className="text-5xl font-bold leading-normal text-white md:text-[5rem]">
                        SeatGeek Design
                    </h1>
                    <p className="text-2xl text-silver-dark">Help the world experience more live.</p>
                </div> */}
                <div className="bg-sg-gold-light-08 mx-auto flex min-content flex-col items-center justify-center">
                    <div className="mx-auto max-w-6xl py-24 sm:px-2 sm:py-32 lg:px-4">
                        <h2 className="text-3xl width-full px-8 text-left font-bold leading-normal md:text-[1.75rem] pb-16">
                            Our Values
                        </h2>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-8 gap-x-16 lg:max-w-none lg:grid-cols-3">
                            {incentives.map((incentive) => (
                                <Parallax key={incentive.name}>
                                    <div className="text-center lg:block lg:text-center">
                                        {/* <div className="sm:flex-shrink-0">
                                        <div className="flow-root">
                                            <Image width={100} height={100} src={incentive.imageSrc} alt=""/>
                                        </div> 
                                    </div> */}
                                        <div className="sm:flex-shrink-0">
                                            <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm rounded-2xl flex items-center">
                                                <div className="text-3xl sm:text-4xl mx-auto">{incentive.emoji}</div>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6 lg:mt-8 lg:ml-0">
                                            <h3 className="text-2xl text-left font-medium text-gray-dark">{incentive.name}</h3>
                                            <p className="mt-2 text-md text-left text-gray-midtone">{incentive.description}</p>
                                        </div>
                                    </div>
                                </Parallax>
                            ))}
                        </div>
                    </div>
                </div>
                <Parallax>
                    <div className="mx-auto flex flex-col items-center justify-center p-4 py-36">
                        <h1 className="text-4xl font-bold leading-normal text-gray-dark md:text-[3rem]">
                            Find the best deals
                        </h1>
                        <p className="text-xl md:text-2xl md:leading-normal max-w-md text-center text-gray-midtone mb-8 mt-2">
                            Use deal score to save time and money.
                        </p>
                        <Image width={525} height={981} src="/images/event.png" alt=""/>
                    </div>
                </Parallax>
                <Parallax>
                    <div className="mx-auto bg-gray-dark flex flex-col items-center justify-center p-4 py-36">
                        <h1 className="text-4xl font-bold leading-normal text-white md:text-[3rem]">
                            Check out your view
                        </h1>
                        <p className="text-xl md:text-2xl md:leading-normal max-w-md text-center text-silver-dark/70 mb-8 mt-2">
                            Know exactly what to expect.
                        </p>
                        <Image width={525} height={981} src="/images/vfs.png" alt="" />
                    </div>
                </Parallax>
                <Parallax>
                    <div className="mx-auto flex flex-col items-center justify-center p-4 py-36">
                        <h1 className="text-4xl font-bold leading-normal text-gray-dark md:text-[3rem]">
                            Get in with your phone
                        </h1>
                        <p className="text-xl md:text-2xl md:leading-normal max-w-md text-center text-gray-midtone mb-8 mt-2">
                            Manage and scane your tickets with ease.
                        </p>
                        <Image width={525} height={981} src="/images/scanning.png" alt="" />
                    </div>                            
                </Parallax>
                <div className="mx-auto bg-sg-gold-light-24 flex min-h-[85vh] flex-col items-center justify-center p-4">
                    <h1 className="text-5xl font-bold leading-normal text-gray-dark md:text-[5rem]">
                        Let's Go
                    </h1>
                    <div className="rounded-md shadow mt-8">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border 
                                    transition-all duration-300
                                    bg-black
                                    hover:bg-black/70
                                    active:bg-black
                                    px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                        >
                            View openings
                        </a>
                    </div>
                </div>                                   
            </main>
        </>
    );
};

export default Home;
