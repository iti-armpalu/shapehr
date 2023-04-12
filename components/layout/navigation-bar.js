import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import styles from "./navigation-bar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useLayoutEffect, useState } from "react";
import useLockBodyScroll from "../ui/use-lock-body-scroll";
import MobileNavigationBar from "./mobile-navigation-bar";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.menu} clearfix ${isOpen ? styles.locked : ""}`}>
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
                  to="expert-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Our People
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
              contact us
            </LinkScroll>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
