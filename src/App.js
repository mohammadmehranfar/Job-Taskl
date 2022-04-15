import React from "react";
import styles from './App.module.css';
import LeftSideBarContainer from "./Components/LeftSideBarContainer";
import RightSideBarContainer from "./Components/RightSideBarContainer";
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.rightSide}>
          <div className={styles.rightHeader}>

          </div>
           <div className={styles.rightBody}>
            <div className={styles.bodyContainer}>
              <div className={styles.rightSideBar}>
                <div className={styles.rightContainer}>
                  <RightSideBarContainer/>
                </div>
              </div>
              <div className={styles.leftSideBar}>
                <LeftSideBarContainer/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftSide}>
          <div className={styles.leftHeader}>

          </div>
          <div className={styles.leftBody}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
