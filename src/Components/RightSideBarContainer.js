import React from 'react';
import styles from './RightSideBarContainer.module.css';
import refresh from '../Logos/refresh.svg';
import add from '../Logos/add.svg';
import { data } from '../Data/mokData';
import Result from './Result';
const RightSideBarContainer = () => {
    return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logos}>
                        <div className={styles.add}>
                            <img src = {add} alt = 'add'/>
                        </div>
                        <div className={styles.refresh}>
                            <img src = {refresh} alt = 'refresh'/>
                        </div>
                    </div>
                </div>
                <div className={styles.charts}>
                    {
                        data.map(el => <Result key = {el.id}{...el}/>)
                    }
                </div>
                <div className={styles.addButton}>
                    <img src = {add} alt = 'add'/>
                </div>
            </div>
    );
};

export default RightSideBarContainer;