import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import styles from "./mobile-navigation-bar.module.css";


import useLockBodyScroll from "../ui/use-lock-body-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function MobileNavigationBar(props) {

  // When mobile navigation bar is mounted, disable scroll
  useLockBodyScroll();

  const { isOpen, onClose } = props;

  return (
    <div className={styles.mobileNavWrapper}>
      <div
        className={styles.mobileNavOverlay}
        onClick={onClose}>
      </div>
      <div className={styles.mobileNavContent}>
        <button
          className={styles.mobileNavClose}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/images/resources/shapehr-logo-transparent-white.png"
              alt="Shape HR logo"
            />
          </Link>
        </div>
        <div className={styles.mobileNavContainer}>
          <ul>
            <li>
              <LinkScroll
                to="services-section"
                spy={true}
                smooth={true}
                duration={500}
                onClick={onClose}
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
                onClick={onClose}
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
                onClick={onClose}
              >
                Real Reviews
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                onClick={onClose}
              >
                Contact Us
              </LinkScroll>
            </li>
          </ul>
        </div>
        <ul className={styles.mobileNavContact}>
          <li>
            <span className={styles.mobileNavIcon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <p>Based in London, United Kingdom</p>
          </li>
          <li>
            <span className={styles.mobileNavIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p>simon.heath@shape-hr.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigationBar;
