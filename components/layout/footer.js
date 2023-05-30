import styles from "./footer.module.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  // On function call, scroll to top
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Listen to the scroll event & setScrollY new state if scroll position is higher than 400 pixels
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.bottom}>
          <p>© 2023 Shape HR Ltd.</p>
        </div>
        {scrollY && (
          <div
            className={` ${styles.scrollToTopButton} ${
              scrollY ? styles.fadeIn : styles.fadeOut
            }`}
            onClick={scrollToTop}
          >
            <span>
              <FontAwesomeIcon icon={faAngleUp} />
            </span>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
