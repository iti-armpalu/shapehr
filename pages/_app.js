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

// add custom font
import { DM_Sans } from "@next/font/google";
const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
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
