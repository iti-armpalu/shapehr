import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import image from "../../public/images/backgrounds/shapehr-background-1.jpeg";
// import image from "../../public/images/backgrounds/shapehr-background-2.avif";

import styles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <Head>
        <title>Shape HR Consultancy</title>
        <meta name="description" content="Cool cool cool" />
      </Head>

      <section className={styles.main}>
            <div className={styles.overlay}>
              <Image
                className={styles.imageLayer}
                src={image}
                alt="Road"
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />

              <div className={styles.shapeOne}>
                <img src="images/shapes/main-slider-shape-1.png" alt="" />
              </div>

              <div className={styles.shapeTwo}>
                <img src="images/shapes/main-slider-shape-2.png" alt="" />
              </div>

              <div className={styles.shapeThree}>
                <img src="images/shapes/main-slider-shape-3.png" alt="" />
              </div>

              <div className={`${styles.container} container`}>
                <div className="row">
                  <div className="col-xl-9">
                    <div className={styles.mainContent}>
                      <h2>
                        Experts in Project
                        <br />and Consultancy
                        <br />Services
                      </h2>
                      <p>
                        together with leadership coaching and mentoring to teams and individuals.
                      </p>
                      {/* <Link
                        to="/contact">
                        free consultation
                      </Link> */}
                      <a href="about.html" className={styles.thmBtn}>
                        free consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  );
}

export default Hero;
