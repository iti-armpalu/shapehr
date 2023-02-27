import { Link } from "react-scroll";

import MainHeaderTop from "./main-header-top";

import styles from "./navigation-bar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
              <li>
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapperRight}>
          <div className={styles.wrapperCall}>
            <div className={styles.wrapperCallIcon}>
              <span className={styles.iconPhone}>
                <FontAwesomeIcon icon={faPhone} />
              </span>
            </div>
            <div className={styles.wrapperCallNumber}>
              <p>Call Anytime</p>
              <h5>
                <a href="tel:1307776-0608">+ 44 7777 6666</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
