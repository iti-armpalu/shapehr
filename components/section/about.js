import styles from "./about.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section 
      id="about-section"
      className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            {/* <div className={styles.imgBox}>
              <img src="images/resources/about-one-img-1.png" alt="" />
            </div> */}
             <div className={styles.right}>
              <div className={`${styles.title} text-left`}>
                <span className={styles.tagline}>About Us</span>
                <h2 className={styles.sectionTitle}>
                  With over 30 years in corporate HR/People leadership roles
                </h2>
              </div>
              <div className={styles.businessStart}>
                <p className={styles.businessStartText}>
                  across multiple sectors, & gaining a wealth of experience, knowledge & learnings in business, HR, organisational transformation, & from people, Simon Heath is proud to establish his own consultancy: ShapeHR Ltd.
                </p>
              </div>
              {/* <div className={styles.pointsBox}>
                <ul className={styles.points}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Common-sense
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Solution driven
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className={`${styles.points} ${styles.pointsTwo}`}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Transformative
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Effective
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className={styles.rightText}>
                In addition to Simon's down-to-earth, pragmatic, solution-creating approach, he believes that businesses most effectively change, transform & realise their ambitions & results when their People & their HR/People function are organised, prepared & aligned for the journey ahead.
              </p> */}
            </div>
          </div>
          <div className="col-xl-6">
            <div className={styles.right}>
              <div className={styles.pointsBox}>
                <ul className={styles.points}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Practical
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Solution driven
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className={`${styles.points} ${styles.pointsTwo}`}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Transformative
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        Effective
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className={styles.rightText}>
                {/* In addition to Simon's down-to-earth, pragmatic, solution-creating approach, he believes that businesses most effectively change, transform & realise their ambitions & results when their People & their HR/People function are organised, prepared & aligned for the journey ahead. */}
                ShapeHR Ltd provides common-sense, solution driven interim HR/People leadership, consulting, coaching, support & advice to businesses & business people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
