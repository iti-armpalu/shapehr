import styles from "./expert.module.css";

import image from "../../public/images/shapes/counter-one-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlay,
  faSlash,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import TestimonialSwiper from "./testimonial/testimonialSwiper";

function Expert() {
  return (
    <section id="expert-section" className={styles.section}>
      <div className={styles.sectionWrap}>
        {/* <div
          className={styles.shapeTwo}
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <img src="/images/shapes/counter-one-shape-2.png" alt="" />
        </div>

        <div className={styles.shapeThree}>
          <img src="/images/shapes/counter-one-shape-3.png" alt="" />
        </div> */}

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

export default Expert;
