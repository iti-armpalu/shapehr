import Head from "next/head";

import Hero from "../components/section/hero";
import Services from "../components/section/services";
import Contact from "../components/section/contact";
import TrustedBy from "../components/section/trusted-by";
import About from "../components/section/about";
import Expert from "../components/section/expert";


function HomePage(props) {

  return (
    <div>
      <Head>
        <title>Shape HR Consultancy</title>
        <meta name="description" content="Cool cool cool" />
      </Head>
      <Hero />
      <Services />
      <About />
      <TrustedBy />
      <Expert />
      <Contact />
    </div>
  );
}

export default HomePage;
