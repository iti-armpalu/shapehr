import Image from "next/image";

import styles from "./services.module.css";
import leadership from "../../public/images/services/shape-hr-interim-leadership.jpeg";
import consultancy from "../../public/images/services/shape-hr-consultancy-projects.jpg";
import coaching from "../../public/images/services/shape-hr-coaching.jpg";
import support from "../../public/images/services/shape-hr-support.jpg";

function Services() {
  return (
    <section id="services-section" className={styles.section}>
      <div className="container">
        <div className={styles.title}>
          <span data-aos="fade-up" data-aos-delay="100">
            What We Do
          </span>
          <p data-aos="fade-up" data-aos-delay="200">
            We are passionate about helping businesses imagine, articulate &
            shape their aspirational future - from understanding the current “as
            is” positions and impact, to detailing the journeys & milestones
            required to deliver successful transformations.
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300">
            Across 4 key pillars
          </h2>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.single}>
              <div className={styles.imageBox}>
                <div className={styles.image}>
                  <Image
                    alt="Interim Leadership"
                    src={leadership}
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.titleBox}>
                  <div>
                    <h3>
                      Interim <br />
                      Leadership
                    </h3>
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/icon/crown.svg"></img>
                  </div>
                </div>
                <div className={styles.hover}>
                  <div className={styles.hoverBg}>
                    <Image
                      alt="Interim Leadership"
                      src={leadership}
                      placeholder="blur"
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4>Interim Leadership</h4>
                  <ul>
                    <li>Chief People Officer</li>
                    <li>HR Director</li>
                    <li>HR Transformation Programmes</li>
                    <li>Workday HCM Programmes & Deployment</li>
                    <li>Start Up & Scale Up</li>
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
            <div className={styles.single}>
              <div className={styles.imageBox}>
                <div className={styles.image}>
                  <Image
                    alt="Consultancy and Projects"
                    src={consultancy}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.titleBox}>
                  <div>
                    <h3>
                      Consultancy <br />& Projects
                    </h3>
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/icon/team.svg"></img>
                  </div>
                </div>
                <div className={styles.hover}>
                  <div className={styles.hoverBg}>
                    <Image
                      alt="Consultancy and Projects"
                      src={consultancy}
                      placeholder="blur"
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4>
                    Consultancy <br />& Projects
                  </h4>
                  <ul>
                    <li>HR Strategy</li>
                    <li>HR Transformation</li>
                    <li>Organisational Design, Models & Effectiveness</li>
                    <li>Start Up & Scale Up</li>
                    <li>Employee Value Proposition</li>
                    <li>People Lifecycle & Experience</li>
                    <li>Dynamic Talent Management & Succession Planning</li>
                    <li>Learning & Development Programmes Design & Delivery</li>
                    <li>Talent Acquisition & Sourcing/Pipeline Development</li>
                    <li>M&A, Restructuring</li>
                    <li>
                      HR/People Function Effectiveness Diagnostics, Change &
                      Transformation
                    </li>
                    <li>Workday HCM Programmes</li>
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
            <div className={styles.single}>
              <div className={styles.imageBox}>
                <div className={styles.image}>
                  <Image
                    alt="Coaching and Mentoring"
                    src={coaching}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.titleBox}>
                  <div className="feature-one__icon-title-box">
                    <h3>
                      Coaching <br />& Mentoring
                    </h3>
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/icon/coaching.svg"></img>
                  </div>
                </div>
                <div className={styles.hover}>
                  <div className={styles.hoverBg}>
                    <Image
                      alt="Coaching and Mentoring"
                      src={coaching}
                      placeholder="blur"
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4>
                    Coaching <br />& Mentoring
                  </h4>
                  <ul>
                    <li>C-Suite & Leaders</li>
                    <li>Managers</li>
                    <li>Subject Matter Experts</li>
                    <li>High Potentials</li>
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
            <div className={styles.single}>
              <div className={styles.imageBox}>
                <div className={styles.image}>
                  <Image
                    alt="Advice and Support"
                    src={support}
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.titleBox}>
                  <div>
                    <h3>
                      Advice <br />& Support
                    </h3>
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/icon/support.svg"></img>
                  </div>
                </div>
                <div className={styles.hover}>
                  <div className={styles.hoverBg}>
                    <Image
                      alt="Advice and Support"
                      src={support}
                      placeholder="blur"
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4>
                    Advice <br />& Support
                  </h4>
                  <ul>
                    <li>Employee Issues</li>
                    <li>Disciplines & Grievances</li>
                    <li>Investigations</li>
                    <li>Managing Redundancy</li>
                    <li>Dispute & Conflict Resolutions</li>
                    <li>Building the HR Infrastructure</li>
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
