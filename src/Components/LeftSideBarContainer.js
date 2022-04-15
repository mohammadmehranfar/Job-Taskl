import React from 'react';
import styles from './LeftSideBarContainer.module.css';
import setting from '../Logos/settings.svg';
import refresh from '../Logos/refresh.svg';
import { storageInformation } from '../Data/storage';
import Report from './Report';
const LeftSideBarContainer = () => {
    return (
        <div className = {styles.leftContainer}>
            <div className={styles.container}>
                <div className = {styles.header}>
                    <div className={styles.logos}>
                        <div className={styles.setting}>
                            <img src = {setting} alt = 'settings'/>
                        </div>
                        <div className={styles.refresh}>
                            <img src = {refresh} alt = 'refresh'/>
                        </div>
                    </div>
                    <p>صندوق پیام ها</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}>مدیریت</button>
                    <button className={styles.btn}>نگهداشت</button>
                    <button className={styles.btn}>عملیات</button>
                </div>
                <div className={styles.contents}>
                    <div className={styles.head}>
                        <p className = {styles.value}>تعداد</p>
                        <div className = {styles.splitter}></div>
                        <p className={styles.title}>عنوان</p>
                    </div>
                    <div className={styles.info}>
                        {
                            storageInformation.map((el,index) => <Report key = {index} {...el}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBarContainer;