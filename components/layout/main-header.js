import HeaderRibbon from "./header-ribbon";
import NavigationBar from "./navigation-bar";

import styles from "./main-header.module.css";
import { Fragment } from "react";

function MainHeader() {
  return (
    <Fragment>
      <header className={`${styles.mainHeader} clearfix`}>
        <HeaderRibbon />
        <NavigationBar />
      </header>
    </Fragment>
  );
}

export default MainHeader;
