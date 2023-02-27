import { Fragment } from "react";
import MainHeader from "./main-header";

import styles from "./layout.module.css";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <MainHeader />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
