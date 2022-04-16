import React from 'react';
import styles from './Result.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import needle from '../Logos/needle.svg';
const myChart = {
    series:[{
        name:'level',
        type:'pie',
        innerSize:'70%',
        data:[
            {
                name: 'خوب',
                y: 33,
                color: '#61B237'
            },
            {
                name: 'متوسط',
                y: 34,
                color: '#F4C01F'
            },
            {
                name: 'ضعیف',
                y: 33,
                color: '#B9131C'
            },
        ]
    }]
}
const Result = ({color,id,performance,number,explanation,name,title,logo}) => {
    const highChartsRender =
            {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
            },
            
            title:{
                text:null
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '10%'],
                    size: '110%',
                }
            },
            series:myChart.series
    }
    return (
        <div className = {styles.container}>
            <div className = {styles.header}>
                <h2 className={styles.number}>{number.toString()}</h2>
                <h5 className={styles.title}>{title}</h5>
                <img className = {styles.logo} src = {logo} alt = 'logo'/>
            </div>
            <div className={styles.name}>
                <div style = {{backgroundColor:color,height:'15%'}}></div>
                <h2 className = {styles.projName}>{name}</h2>
                <p className={styles.id}>{id}</p>
            </div>
            <div className={styles.chart}>
                <select className = {styles.inputForm}>
                    <option>24 ساعت اخیر</option>
                </select>
                <div className={styles.chartDisplay}>
                    <HighchartsReact highcharts = {Highcharts} options = {highChartsRender}/>
                </div>
                <div className={styles.needle}>
                    <img src = {needle} alt = 'needle' style = {{transform:`rotate(${90+performance*180}deg)`}}/>
                </div>
                <h3 className={styles.percentage}>{performance*100}%</h3>
                <h4 className={styles.explanationStyle}>{explanation}</h4>
            </div> 
                       
        </div>
    );
};

export default Result;