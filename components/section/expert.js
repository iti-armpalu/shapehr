import styles from "./expert.module.css";

import image from "../../public/images/shapes/counter-one-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Expert() {
  return (
    <section id="expert-section" className={styles.section}>
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
            <span className={styles.tagline}>Our People</span>
            <h2 className={styles.title}>Simon Heath</h2>
            {/* <p>
              Simon is particularly passionate about helping businesses imagine,
              articulate and shape their aspirational future - from
              understanding the current “as is” positions and impact, to
              detailing the journeys and milestones required to deliver
              successful transformations.
            </p> */}
          </div>
          <div className={styles.bottom}>
            <p>
              Simon is particularly passionate about helping businesses imagine,
              <br/>articulate and shape their aspirational future - from
              understanding <br/>the current “as is” positions and impact, to
              detailing the journeys <br/>and milestones required to deliver
              successful transformations.
            </p>
            <div className={styles.sectionImg}>
              <img src="images/team/SPH.jpg" alt="" />
            </div>
            <div className={styles.box}>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>
                      WPP - Global HR Transformation Lead & HCM Product Owner
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Geometry - Global Chief People Officer</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>DMG Media - HR Director</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Saatchi & Saatchi - EMEA HR Director</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Misys Plc - Global HR Director - Banking</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Eidos Plc - Group HR Director</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Virgin Cinemas - HR Manager</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <div className={styles.text}>
                    <p>Blockbuster Video - HR Officer</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMinus} />
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
    </section>
  );
}

export default Expert;
