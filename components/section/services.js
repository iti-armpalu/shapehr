import Head from "next/head";

import styles from "./services.module.css";

function Services() {
  return (
    <section 
      id="services-section"
      className={styles.feature}>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img src="images/resources/feature-one-img-1.jpg" alt="" />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      <a href="consumer-product.html">
                        C-Suite and <br />
                        Business Partnerships
                      </a>
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <span className="icon-strategy"></span>
                  </div>
                </div>
                {/* <div className="feature-one__hover">
                    <div
                      className="feature-one__hover-bg"
                      // style="background-image: url(images/resources/feature-one-hover-img-1.jpg)"
                    ></div>
                    <div className="feature-one__hover-icon">
                      <span className="icon-strategy"></span>
                    </div>
                    <h4 className="feature-one__hover-title">
                      <a href="consumer-product.html">Wealth Management</a>
                    </h4>
                    <p className="feature-one__hover-text">
                      Lorem ipsum dolor sit am adipi sicing elit, sed do
                      consulting firms Et leggings.
                    </p>
                  </div> */}
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img src="images/resources/feature-one-img-2.jpg" alt="" />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      <a href="audit-marketing.html">
                        Change <br />
                        Management
                      </a>
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <span className="icon-point-of-sale"></span>
                  </div>
                </div>
                {/* <div className="feature-one__hover">
                    <div
                      className="feature-one__hover-bg"
                      // style="background-image: url(images/resources/feature-one-hover-img-1.jpg)"
                    ></div>
                    <div className="feature-one__hover-icon">
                      <span className="icon-point-of-sale"></span>
                    </div>
                    <h4 className="feature-one__hover-title">
                      <a href="audit-marketing.html">Audit Marketing</a>
                    </h4>
                    <p className="feature-one__hover-text">
                      Lorem ipsum dolor sit am adipi sicing elit, sed do
                      consulting firms Et leggings.
                    </p>
                  </div> */}
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className={styles.featureSingle}>
              <div className={styles.featureImgBox}>
                <div className={styles.featureImg}>
                  <img src="images/resources/feature-one-img-3.jpg" alt="" />
                </div>
                <div className={styles.featureIconBox}>
                  <div className="feature-one__icon-title-box">
                    <h3 className={styles.featureIconTitle}>
                      <a href="financial-advice.html">
                        Leadership Coaching <br />
                        and Mentoring
                      </a>
                    </h3>
                  </div>
                  <div className={styles.featureIcon}>
                    <span className="icon-consumer-behavior"></span>
                  </div>
                </div>
                {/* <div className="feature-one__hover">
                    <div
                      className="feature-one__hover-bg"
                      style="background-image: url(assets/images/resources/feature-one-hover-img-1.jpg)"
                    ></div>
                    <div className="feature-one__hover-icon">
                      <span className="icon-consumer-behavior"></span>
                    </div>
                    <h4 className="feature-one__hover-title">
                      <a href="financial-advice.html">Finance Consulting</a>
                    </h4>
                    <p className="feature-one__hover-text">
                      Lorem ipsum dolor sit am adipi sicing elit, sed do
                      consulting firms Et leggings.
                    </p>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
