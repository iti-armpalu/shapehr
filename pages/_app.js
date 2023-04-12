import { useEffect } from "react";
import Head from "next/head";

import Layout from "../components/layout/layout";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// add global styles
import "../styles/globals.css";

// add fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// add aos
import AOS from "aos";
import "aos/dist/aos.css";
// import "../scss/style.scss";

// add custom font
import { DM_Sans } from "@next/font/google";
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={dmSans.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
