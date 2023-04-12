import styles from "./expert.module.css";

import image from "../../public/images/shapes/counter-one-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlay,
  faSlash,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

function Expert() {
  return (
    <section id="expert-section" className={styles.section}>
      <div className={styles.sectionWrap}>
        <div
          className={styles.shapeTwo}
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <img src="/images/shapes/counter-one-shape-2.png" alt="" />
        </div>

        <div className={styles.shapeThree}>
          <img src="/images/shapes/counter-one-shape-3.png" alt="" />
        </div>

        <div
          className={styles.sectionBg}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />

        <div className="container">
          <div className={styles.sectionTitle}>
            <span className={styles.tagline} data-aos="fade-left">
              Our People
            </span>
            <h2 className={styles.title} data-aos="fade-left" data-aos-delay="100">
              Simon Heath
            </h2>
          </div>

          <div className={`row ${styles.bottom} `}>
            <div 
              className={`col-12 col-lg-5 ${styles.sectionImg} `}
              data-aos="fade-up" data-aos-delay="100">
              <img src="images/team/SPH.jpg" alt="" />
            </div>

            <div className="col-12 col-lg-7">
              <div className={styles.box}>
                <p data-aos="fade-left" data-aos-delay="200">
                  Simon is particularly passionate about helping businesses
                  imagine, articulate and shape their aspirational future - from
                  understanding the current “as is” positions and impact, to
                  detailing the journeys and milestones required to deliver
                  successful transformations.
                </p>
                <div data-aos="fade-up" data-aos-delay="300">
                  <ul>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>
                          WPP - Global HR Transformation Lead & HCM Product
                          Owner
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Geometry - Global Chief People Officer</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>DMG Media - HR Director</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Saatchi & Saatchi - EMEA HR Director</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Misys Plc - Global HR Director - Banking</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Eidos Plc - Group HR Director</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Virgin Cinemas - HR Manager</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Blockbuster video - HR Officer</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlay} rotation={270} />
                      </div>
                      <div className={styles.text}>
                        <p>Conder Plc - HR Graduate / Personnel Officer</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expert;
