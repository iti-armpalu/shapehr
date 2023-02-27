import styles from "./contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Contact(props) {
  return (
    <section 
      id="contact-section"
      className={styles.contactPage} >
      <div className={`${styles.sectionTitle} text-center`}>
        <span className={styles.sectionTitleTagline}>Contact</span>
        <h2 className={styles.sectionTitleTitle}>Drop us a Message</h2>
      </div>

      <div className={`${styles.container} container`}>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className={styles.contactPageForm}>
              <form
                className="comment-one__form contact-form-validated"
                novalidate="novalidate"
              >
                <div className="row">
                  <div className="col-xl-6">
                    <div className={styles.inputBox}>
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className={styles.inputBox}>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className={styles.inputBox}>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className={styles.inputBox}>
                      <input
                        type="email"
                        placeholder="Subject"
                        name="Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className={styles.inputBox}>
                      <textarea
                        name="message"
                        placeholder="Write a Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`${styles.commentFormBtn} ${styles.thmBtn}`}
                    >
                      send a message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className={styles.details}>
              <ul className={styles.detailsList}>
                <li>
                  <span>Call:</span>
                  <p>
                    <a href="tel:13077760608">+ 44 7777 6666</a>
                  </p>
                </li>
                <li>
                  <span>Send email:</span>
                  <p>
                    <a href="mailto:needhelp@company.com">
                      needhelp@shapehr.com
                    </a>
                  </p>
                </li>
                <li>
                  <span>Connect through social:</span>
                  <p className={styles.social}>
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <span>/simonheath</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
