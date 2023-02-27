import styles from "./trusted-by.module.css";

function TrustedBy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.imgWrapper}>
          <div className={styles.imgBox}>
            <img src="images/brand/fast-company-logo.png" alt="" />
          </div>
          <div className={styles.imgBox}>
            <img src="images/brand/fast-company-logo.png" alt="" />
          </div>
          <div className={styles.imgBox}>
            <img src="images/brand/fast-company-logo.png" alt="" />
          </div>
          <div className={styles.imgBox}>
            <img src="images/brand/fast-company-logo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
