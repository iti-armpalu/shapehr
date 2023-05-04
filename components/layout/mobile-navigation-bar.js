import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import styles from "./mobile-navigation-bar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import useLockBodyScroll from "../ui/use-lock-body-scroll";

function MobileNavigationBar(props) {
  useLockBodyScroll();

  const { isOpen, onClose } = props;

  return (
    <div
      className={`${styles.mobileNavWrapper}  ${isOpen ? styles.expanded : ''}`}
    >
      <div
        className={` ${styles.mobileNavOverlay} ${styles.mobileNavToggler}`}
        onClick={onClose}
      ></div>
      {/* /.mobile-nav__overlay */}
      <div className={styles.mobileNavContent}>
        <button
          className={` ${styles.mobileNavClose} ${styles.mobileNavToggler}`}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={styles.logoBox}>
          <Link href="/">
            <img
              src="/images/resources/shapehr-logo-transparent-white.png"
              alt="Shape HR logo"
            />
          </Link>
        </div>
        {/* /.logo-box */}
        <div className={styles.mobileNavContainer}>
          <ul className={styles.mobileNavlist}>
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
        {/* /.mobile-nav__container */}

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
        {/* /.mobile-nav__contact */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
}

export default MobileNavigationBar;
