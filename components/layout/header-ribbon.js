import styles from "./header-ribbon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HeaderRibbon() {
  return (
    <div className={`${styles.headerRibbon} clearfix`}>
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
                <p>
                  Based in London, United Kingdom
                </p>
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
                  simon.heath@shape-hr.com
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderRibbon;
