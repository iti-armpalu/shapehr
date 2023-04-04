import Head from "next/head";

import Hero from "../components/section/hero";
import Services from "../components/section/services";
import Contact from "../components/section/contact";
import TrustedBy from "../components/section/trusted-by";
import About from "../components/section/about";
import Expert from "../components/section/expert";
import ComingSoon from "../components/section/coming-soon";


function HomePage(props) {

  return (
    <div>
      <Head>
        <title>Shape HR Consultancy</title>
        <meta name="description" content="Common-sense interim HR/People leadership, consulting, coaching, support & advice for businesses and business people." />
        <link rel="icon" href="/shapehr-favicon-transparent.ico" />
      </Head>
      {/* <ComingSoon /> */}
      <Hero />
      <Services />
      <About />
      {/* <TrustedBy /> */}
      <Expert />
      <Contact />
    </div>
  );
}

export default HomePage;
