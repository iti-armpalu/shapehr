import Image from "next/image";
import { Link } from "react-scroll";

import bgImage from "../../public/images/backgrounds/shape-hr-hero-background.avif";

import styles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.overlay}>
          <Image
            className={styles.imageLayer}
            src={bgImage}
            alt="Road"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />

          <div className={styles.shapeOne}>
            <img src="images/shapes/hero-shape-1.png" alt="" />
          </div>

          <div className={styles.shapeTwo}>
            <img src="images/shapes/hero-shape-2.png" alt="" />
          </div>

          <div className={styles.shapeThree}>
            <img src="images/shapes/hero-shape-3.png" alt="" />
          </div>

          <div className={`${styles.container} container`}>
            <div className="row">
              <div className="col-xl-8">
                <div className={styles.mainContent}>
                  <h2>
                    Pragmatic, solution-driven interim HR/People leadership, consulting, coaching, support & advice for businesses & business people.
                  </h2>
                  <p>
                    Enabling commercial & human-centric outcomes
                  </p>
                  <Link
                    to="services-section"
                    className={styles.thmBtn}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    what we do
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
