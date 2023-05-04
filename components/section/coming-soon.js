import Image from "next/image";

import image from "../../public/images/backgrounds/shape-hr-hero-background.avif";

import styles from "./coming-soon.module.css";

function ComingSoon() {
  return (
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
                <h2>Great things coming soon.</h2>
                <p>
                  We are a small and growing HR consultancy with focus on
                  leadership coaching and mentoring to teams and individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
