import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import MobileNavigationBar from "./mobile-navigation-bar";

import styles from "./navigation-bar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Listen to the scroll event & setScrollY new state if scroll position is higher than 130 pixels
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 130);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`${styles.menu} ${scrollY ? styles.stickyHeader : styles.overlay}`}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperLeft}>
          <div className={styles.logo}>
            <Link href="/">
              <img
                src="/images/resources/shapehr-logo-transparent-white.png"
                alt="Shape HR logo"
              />
            </Link>
          </div>
          <div className={styles.mainMenu}>
            <div>
              <button
                className={styles.mobileNavToggler}
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              {isOpen && (
                <MobileNavigationBar
                  isOpen={isOpen}
                  onClick={() => setIsOpen(isOpen)}
                  onClose={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
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
                  to="reviews-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Real Reviews
                </LinkScroll>
              </li>
              <li className="d-xl-none">
                <LinkScroll
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact Us
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
              Contact us
            </LinkScroll>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
