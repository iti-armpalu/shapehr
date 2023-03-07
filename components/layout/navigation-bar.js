import { Link } from "react-scroll";

import styles from "./navigation-bar.module.css";

function NavigationBar() {
  return (
    <nav className={`${styles.menu} clearfix`}>
      <div className={`${styles.wrapper} clearfix`}>
        <div className={styles.wrapperLeft}>
          <div className={styles.wrapperLogo}>
            <a href="index.html">
              <img
                src="/images/resources/shapehr-logo-transparent-white.png"
                alt="Shape HR logo"
              />
            </a>
          </div>
          <div className={styles.wrapperMainMenu}>
            {/* <a href="#" class="mobile-nav__toggler">
                <i class="fa fa-bars"></i>
              </a> */}
            <ul className={styles.list}>
              <li>
                <Link
                  to="services-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="about-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Our expertise
                </Link>
              </li>
              <li>
                <Link
                  to="expert-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Meet the Expert
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapperRight}>
          <div className={styles.wrapperContact}>
            <Link
              to="contact-section"
              className={styles.btn}
              spy={true}
              smooth={true}
              duration={500}
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
