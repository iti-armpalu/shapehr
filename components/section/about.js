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
            <div className={styles.imgBox}>
              <img src="images/resources/about-one-img-1.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className={styles.right}>
              <div className={`${styles.title} text-left`}>
                <span className={styles.tagline}>What we do</span>
                <h2 className={styles.sectionTitle}>
                  Consulting Market Leader Expert
                </h2>
              </div>
              <div className={styles.businessStart}>
                <p className={styles.businessStartText}>
                  We’re in this business since 1988 and provide the best
                  services
                </p>
              </div>
              <div className={styles.pointsBox}>
                <ul className={styles.points}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Nullam vel orci ac</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Donec eu arcu non</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${styles.points} ${styles.pointsTwo}`}>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Maecenas id libero rutrum</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Proin mattis purus</p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className={styles.rightText}>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <div className={styles.bottom}>
                <div className="about-one__btn-box">
                  <a href="about.html" className={styles.thmBtn}>
                    lorem ipsum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
