import React, { useState } from 'react';
import styles from '../styles/SwiperWeather.module.css'

export default function SwiperWeather(props) {
    const weather=props.weather;
    const [time,setTime]=useState([
        {}
    ])
    return (
        <div> {/*여기에 className={styles.all} 생략*/}
           
            <div className={styles.box}>
                <div>{weather}</div>
                <img className={styles.weather} src={`${process.env.PUBLIC_URL}/assets/cloud.svg`} alt="" />
                <div>온도</div>
            </div>   
        </div>
    );
}