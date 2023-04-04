import Head from "next/head";
import Image from "next/image";
import { Link } from "react-scroll";

// import image from "../../public/images/backgrounds/shape-hr-hero-background-1.jpeg";
import image from "../../public/images/backgrounds/shape-hr-hero-background-7.avif";

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
              <div className="col-xl-8">
                <div className={styles.mainContent}>
                  <h2>
                    Common-sense interim HR/People leadership, consulting, coaching, support & advice for businesses & business people.
                  </h2>
                  <p>
                    Always providing real, effective & pragmatic solutions
                  </p>
                  <Link
                    to="services-section"
                    className={styles.thmBtn}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    our services
                  </Link>
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
