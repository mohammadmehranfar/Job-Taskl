import React from 'react';
import styles from './Report.module.css';
const Report = ({title,number}) => {
    return (
        <div className={styles.container}>
            <p className = {styles.value}>{number.toString()}</p>
            <div className = {styles.splitter}></div>
            <p className={styles.title}>{title}</p>
        </div>
    );
};

export default Report;  