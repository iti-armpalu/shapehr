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

      <div class="stricky-header stricked-menu main-menu">
        <div class="sticky-header__content"></div>
      </div>
    </Fragment>
  );
}

export default MainHeader;
