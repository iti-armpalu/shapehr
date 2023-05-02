import styles from "./about.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about-section" className={styles.section}>

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

      <div className="container">



        <div className="row">
          <div className="col-xl-7">
            {/* <div className={styles.imgBox}>
              <img src="images/resources/about-one-img-1.png" alt="" />
            </div> */}
            <div className={styles.right}>
              <div className={`${styles.title} text-left`}>
                <span
                  className={styles.tagline}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  About Us
                </span>
                <div className="d-block d-sm-flex mt-3">
                  <img
                    className={`${styles.founder} mb-2`}
                    src="images/team/SPH.jpg"
                    alt=""
                    data-aos="fade-right"
                    data-aos-delay="200"
                  />
                  <h2
                    className={styles.sectionTitle}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    With over 30 years in corporate HR/People leadership roles
                    across
                  </h2>
                </div>
              </div>
              <div className={styles.businessStart}>
                <p
                  className={styles.businessStartText}
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  multiple sectors, & gaining a wealth of experience, knowledge
                  & learnings in business, HR, organisational transformation, &
                  from people, Simon Heath is proud to establish his own
                  consultancy: ShapeHR Ltd.
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
          <div className="col-xl-5">
            <div className={styles.right}>
              <div className={styles.pointsBox}>
                <ul className={styles.points}>
                  <li data-aos="fade-down" data-aos-delay="100">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Practical</p>
                    </div>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="200">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Empathetic</p>
                    </div>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="300">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Innovative</p>
                    </div>
                  </li>
                </ul>
                <ul className={`${styles.points} ${styles.pointsTwo}`}>
                  <li data-aos="fade-down" data-aos-delay="400">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Partnering</p>
                    </div>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="500">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Transparent</p>
                    </div>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="600">
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className={styles.text}>
                      <p>Solution-Driven</p>
                    </div>
                  </li>
                </ul>
              </div>
              <p
                className={styles.rightText}
                data-aos="fade-down"
                data-aos-delay="700"
              >
                We partner companies, teams and individuals to help them
                understand their environments & issues, assisting them to focus
                on the decisions that ultimately deliver action, success & ROI.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-lg-5">
          {/* <div className="d-block d-md-flex justify-content-between align-items-center"> */}
          <div className="row">
            <div className="col-12 col-lg-4">
              <div 
                className={styles.beliefBox}
                data-aos="fade-up"
                data-aos-delay="100">
                <span className={styles.beliefTitle}>We believe</span>
                <p>
                  In down-to-earth, pragmatic, solution-creating approaches.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className={styles.beliefBox}
              data-aos="fade-up"
              data-aos-delay="200">
                <span className={styles.beliefTitle}>We believe</span>
                <p>
                  In balancing strategy & practical delivery, our outcomes
                  always being commercial & human-centric.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div 
              className={styles.beliefBox}
              data-aos="fade-up"
              data-aos-delay="300">
                <span className={styles.beliefTitle}>We believe</span>
                <p>
                  Businesses most effectively change, transform & realise their
                  purpose, ambitions & results when their People & HR/People
                  function are organised, prepared & aligned for the journey
                  ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </section>
  );
}

export default About;
