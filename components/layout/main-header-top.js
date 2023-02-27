import Link from "next/link";

import styles from "./main-header-top.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MainHeaderTop() {
  return (
    <div className={`${styles.mainHeaderTop} clearfix`}>
      <div className={`${styles.inner} clearfix`}>
        <div className={styles.left}>
          <ul className={styles.address}>
            <li>
              <div className={styles.icon}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
              </div>
              <div className={styles.text}>
                <p>We are based in London, United Kingdom</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>
              <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div className={styles.text}>
                <p>
                  <a href="mailto:needhelp@company.com">needhelp@shapehr.com</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeaderTop;
