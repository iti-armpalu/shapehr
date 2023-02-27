import Link from "next/link";
import MainHeaderTop from "./main-header-top";
import NavigationBar from "./navigation-bar";

import styles from "./main-header.module.css";


function MainHeader() {
  return (
    <header className={`${styles.mainHeader} clearfix`}>
      <MainHeaderTop />
      <NavigationBar />
    </header>
  );
}

export default MainHeader;
