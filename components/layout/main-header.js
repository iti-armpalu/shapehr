import HeaderRibbon from "./header-ribbon";
import NavigationBar from "./navigation-bar";

import styles from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={`${styles.mainHeader} clearfix`}>
      <HeaderRibbon />
      <NavigationBar />
    </header>
  );
}

export default MainHeader;
