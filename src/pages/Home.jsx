import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import {IoIosArrowForward} from 'react-icons/io';
import Nav from '../components/Nav';

export default function Home() {
    // const [calendar,setCalendar]=useState([
    //     {}
    // ]);
    // const dateList=calendar.map((list)=><div></div>);
    const [isDay,setIsDay]=useState(false);
    const [rainPercent,setRainPercent]=useState(0);
    const PrintUmbrella=()=>{
        if(rainPercent===100){
            return <img src={`${process.env.PUBLIC_URL}/assets/umbrella.svg`} alt="" />;
        }
        return null;
    }
    const [weather,setWeather]=useState("cloud");
    const PrintWeather=()=>{
        if(weather==="cloud"){
           return <img src={`${process.env.PUBLIC_URL}/assets/cloud.svg`} alt="" />;
        }
        return null;
    }
    return (
        // styles.body ${controlBackground?'day':'night'}
        <div className={isDay?`${styles.bodyDay}`:`${styles.bodyNight}`}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div>10월 18일 수요일</div>
                    <div className={styles.temperature}>23°</div>
                    <div className={isDay?`${styles.locationDay}`:``}><button className={styles.buttonImg}><img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="" /></button>인천, 대한민국</div>
                    <div>강수확률2% {PrintUmbrella()}</div>
                </div>
                <div>{PrintWeather()}</div>
            </div>
            <div className={styles.center}>
                <div className={styles.centerButton}>
                    <button className={styles.buttonText}>성별</button>
                    <button className={styles.buttonText}>스타일</button>
                    <button className={styles.buttonImg}><img src={`${process.env.PUBLIC_URL}/assets/calendar.svg`} alt="" /></button>
                </div>
                <div className={styles.centerContent}>
                    <div className={styles.centerTitle}>
                        <div>오늘은 이 옷 어때요?</div>
                        <img className={styles.centerTitleImg} src={`${process.env.PUBLIC_URL}/assets/reset.svg`} alt="" />
                    </div>
                    <div><img src={`${process.env.PUBLIC_URL}/assets/clothes.svg`} alt="" /></div>
                    <div>옷 정보</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomTitle}>
                    <div>Today</div>
                    <IoIosArrowForward />
                </div>
                <div>
                    {/*map weather*/}
                </div>
            </div>
            <Nav/>
        </div>
    );
}

