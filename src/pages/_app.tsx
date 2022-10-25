import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
declare module "*.module.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
