import styles from "./footer.module.css";
import { useEffect, useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";



function Footer() {

  const [scrollY, setScrollY] = useState(0);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.siteFooterBottom}>
          <p className={styles.siteFooterBottomText}>
            © 2023 Copyrights by ShapeHR.com
          </p>
        </div>


        {scrollY > 400
            ? 
            <div 
              className={styles.scrollToTop}
              onClick={scrollToTop}>
                <span>
                  <FontAwesomeIcon icon={faAngleUp} />
                </span>
            </div>
            :
            <div 
              className={styles.scrollToTopNoShow}
              onClick={scrollToTop}>
                <span>
                  <FontAwesomeIcon icon={faAngleUp} />
                </span>
            </div>
        }

      </div>
    </footer>
  );
}

export default Footer;
