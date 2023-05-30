import Head from "next/head";

import Hero from "../components/section/hero";
import Services from "../components/section/services";
import Contact from "../components/section/contact";
import About from "../components/section/about";
import Review from "../components/section/review/review";

import { getAllReviews } from '../data';

function HomePage(props) {
  const { reviews } = props;

  return (
    <div>
      <Head>
        <title>Shape HR Consultancy</title>
        <meta name="description" content="Common-sense interim HR/People leadership, consulting, coaching, support & advice for businesses and business people." />
        <link rel="icon" href="/shapehr-favicon-transparent.ico" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Review reviews={reviews} />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const allReviews = await getAllReviews();

  return {
    props: {
      reviews: allReviews,
    }
  };
}

export default HomePage;
