import styles from "./expert.module.css";

import image from "../../public/images/shapes/counter-one-shape.png";

function Expert() {
  return (
    <section 
      id="expert-section"
      className={styles.section}>
      <div className={styles.sectionWrap}>
        {/* <div
          className="counter-one-shape"
          style="background-image: url(images/shapes/counter-one-shape.png)"
        /> */}

        <div
          className={styles.sectionBg}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />


        <div className="container">
          <div className={styles.sectionTitle}>
            <span className={styles.tagline}>Professional Consultant</span>
            <h2 className={styles.title}>Meet Simon Heath</h2>
          </div>
          <div className={styles.bottom}>
          <div className={styles.sectionImg}>
          <img src="images/team/team-one-img-1.jpg" alt="" />
        </div>
            <div className={styles.box}>
              <p>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <p>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expert;
