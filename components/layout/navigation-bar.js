import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import styles from "./navigation-bar.module.css";

function NavigationBar() {
  return (
    <nav className={`${styles.menu} clearfix`}>
      <div className={`${styles.wrapper} clearfix`}>
        <div className={styles.wrapperLeft}>
          <div className={styles.wrapperLogo}>
            <Link href="/">
              <img
                src="/images/resources/shapehr-logo-transparent-white.png"
                alt="Shape HR logo"
              />
            </Link>
          </div>
          <div className={styles.wrapperMainMenu}>
            {/* <a href="#" class="mobile-nav__toggler">
                <i class="fa fa-bars"></i>
              </a> */}
            <ul className={styles.list}>
              <li>
                <LinkScroll
                  to="services-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  What We Do
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="about-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Us
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="expert-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Our People
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapperRight}>
          <div className={styles.wrapperContact}>
            <LinkScroll
              to="contact-section"
              className={styles.btn}
              spy={true}
              smooth={true}
              duration={500}
            >
              contact us
            </LinkScroll>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
