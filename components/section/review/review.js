import styles from "./review.module.css";

import image from "../../../public/images/shapes/reviews-background-shape.png";
import TestimonialSwiper from "./reviewSwiper";

function Review() {
  return (
    <section id="reviews-section" className={styles.section}>
      <div className={styles.sectionWrap}>
        <div
          className={styles.sectionBg}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />

        <div className="container">
          <div className={styles.sectionTitle}>
            <span className={styles.tagline} data-aos="fade-left">
              Real Reviews
            </span>
            <h2
              className={styles.title}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              from Real People
            </h2>
          </div>

          <TestimonialSwiper />
        </div>
      </div>
    </section>
  );
}

export default Review;
