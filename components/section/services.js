import Image from "next/image";

import styles from "./services.module.css";
import leadership from "../../public/images/services/shape-hr-interim-leadership.jpeg";
import consultancy from "../../public/images/services/shape-hr-consultancy-projects.jpg";
import coaching from "../../public/images/services/shape-hr-coaching.jpg";
import support from "../../public/images/services/shape-hr-support.jpg";

function Services() {
  return (
    <section id="services-section" className={styles.feature}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <span 
            className={styles.tagline}
            data-aos="fade-up"
            data-aos-delay="100">
            What We Do
            </span>
          <p
            data-aos="fade-up"
            data-aos-delay="200">
              We are passionate about helping businesses imagine, articulate & shape their aspirational future - from understanding the current “as is” positions and impact, to detailing the journeys & milestones required to deliver successful transformations.
          </p>
          <h2 
            className={styles.title} 
            data-aos="fade-up"
            data-aos-delay="300">
              Across 4 key pillars
          </h2>
        </div>

        <div className="row">
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img
                    src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      Interim <br />
                      Leadership
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <img src="./images/icon/crown.svg"></img>
                  </div>
                </div>
                <div className={styles.featureHover}>
                  <div className={styles.featureHoverBg}>
                    <Image
                      alt="Interim Leadership"
                      src={leadership}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className={styles.featureHoverTitle}>
                    Interim Leadership
                  </h4>
                  <ul className={styles.featureHoverList}>
                    <li className={styles.featureHoverText}>
                      Chief People Officer
                    </li>
                    <li className={styles.featureHoverText}>
                      HR Director
                    </li>
                    <li className={styles.featureHoverText}>
                      HR Transformation Programmes
                    </li>
                    <li className={styles.featureHoverText}>
                      Workday HCM Programmes & Deployment
                    </li>
                    <li className={styles.featureHoverText}>
                      Start Up & Scale Up
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      Consultancy <br />& Projects
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <img src="./images/icon/team.svg"></img>
                  </div>
                </div>
                <div className={styles.featureHover}>
                  <div className={styles.featureHoverBg}>
                    <Image
                      alt="Consultancy and Projects"
                      src={consultancy}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className={styles.featureHoverTitle}>
                    Consultancy <br />& Projects
                  </h4>
                  <ul className={styles.featureHoverList}>
                    <li className={styles.featureHoverText}>
                      HR Strategy
                    </li>
                    <li className={styles.featureHoverText}>
                      HR Transformation
                    </li>
                    <li className={styles.featureHoverText}>
                      Organisational Design, Models & Effectiveness
                    </li>
                    <li className={styles.featureHoverText}>
                      Start Up & Scale Up
                    </li>
                    <li className={styles.featureHoverText}>
                      Employee Value Proposition
                    </li>
                    <li className={styles.featureHoverText}>
                      People Lifecycle & Experience
                    </li>
                    <li className={styles.featureHoverText}>
                      Dynamic Talent Management & Succession Planning
                    </li>
                    <li className={styles.featureHoverText}>
                      Learning & Development Programmes Design & Delivery
                    </li>
                    <li className={styles.featureHoverText}>
                      Talent Acquisition & Sourcing/Pipeline Development
                    </li>
                    <li className={styles.featureHoverText}>
                      M&A, Restructuring
                    </li>
                    <li className={styles.featureHoverText}>
                      HR/People Function Effectiveness Diagnostics, Change & Transformation
                    </li>
                    <li className={styles.featureHoverText}>
                      Workday HCM Programmes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                  />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      Coaching <br />& Mentoring
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <img src="./images/icon/coaching.svg"></img>
                  </div>
                </div>
                <div className={styles.featureHover}>
                  <div className={styles.featureHoverBg}>
                    <Image
                      alt="Coaching and Mentoring"
                      src={coaching}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className={styles.featureHoverTitle}>
                    Coaching <br />& Mentoring
                  </h4>
                  <ul className={styles.featureHoverList}>
                    <li className={styles.featureHoverText}>
                      C-Suite & Leaders
                    </li>
                    <li className={styles.featureHoverText}>Managers</li>
                    <li className={styles.featureHoverText}>Subject Matter Experts</li>
                    <li className={styles.featureHoverText}>High Potentials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      Advice <br />& Support
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <img src="./images/icon/support.svg"></img>
                  </div>
                </div>
                <div className={styles.featureHover}>
                  <div className={styles.featureHoverBg}>
                    <Image
                      alt="Advice and Support"
                      src={support}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className={styles.featureHoverTitle}>
                    Advice <br />& Support
                  </h4>
                  <ul className={styles.featureHoverList}>
                    <li className={styles.featureHoverText}>Employee Issues</li>
                    <li className={styles.featureHoverText}>
                      Disciplines & Grievances
                    </li>
                    <li className={styles.featureHoverText}>Investigations</li>
                    <li className={styles.featureHoverText}>
                      Managing Redundancy
                    </li>
                    <li className={styles.featureHoverText}>
                      Dispute & Conflict Resolutions
                    </li>
                    <li className={styles.featureHoverText}>
                      Building the HR Infrastructure
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

export default Services;
