import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import {IoIosArrowForward} from 'react-icons/io';
import Nav from '../components/Nav';
import SwiperWeather from '../components/SwiperWeather';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [data,setData]=useState(null);
    // const [calendar,setCalendar]=useState([
    //     {}
    // ]);
    // const dateList=calendar.map((list)=><div></div>);
    const [isDay,setIsDay]=useState(false);
    const [isRainy,setIsRainy]=useState(false);
    const [rainPercent,setRainPercent]=useState(100);
    const [weather,setWeather]=useState("cloud");
    const [uv,setUv]=useState(2);

    useEffect(()=>{
        axios.get(`/api/outfit`)
        .then((response)=>{ //실제 구동
            //setData(response.data)
            //console.log(response)
            alert(response);
        })
        .catch((error)=>{ //error처리
            console.log(error)
        })
    },[])
    
    const PrintUmbrella=()=>{
        if(rainPercent===100){
            return <img src={`${process.env.PUBLIC_URL}/assets/umbrella.svg`} alt="" />;
        }
        return null;
    }
    const PrintWeather=()=>{
        if(uv<=0){
           return <img className={styles.imgWeather} src={`${process.env.PUBLIC_URL}/assets/cloud.svg`} alt="" />;
        }
        else if(uv<=1){
            return <img className={styles.imgWeather} src={`${process.env.PUBLIC_URL}/assets/sunnycloud.svg`} alt="" />;
        }
        else if(uv<=2){ 
            return <img className={styles.imgWeather} src={`${process.env.PUBLIC_URL}/assets/sunny.svg`} alt="" />;
        }
        return null;
    }
    const handleRandom=()=>{

    }
    const handleButtonSex=()=>{
        
    }
    return (
        <div className={isDay?`${styles.bodyDay}`:`${styles.bodyNight}`}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.date}>10월 18일 수요일</div>
                    <div className={isDay?`${styles.temperatureDay}`:`${styles.temperatureNight}`}>11°</div>
                    <div className={isDay?`${styles.locationDay}`:`${styles.locationNight}`}><button className={styles.buttonImgSmall}><img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="" /></button>인천, 대한민국</div>
                    <div className={styles.rainyPercent}>강수확률2% {PrintUmbrella()}</div>
                </div>
                <div>{PrintWeather()}</div>
            </div>
            <div className={styles.center}>
                <div className={styles.centerButton}>
                    <button className={styles.buttonSex}>성별</button>
                    <button className={styles.buttonStyle}>스타일</button>
                    <button className={styles.buttonImg}><img src={`${process.env.PUBLIC_URL}/assets/calendar.svg`} alt="" /></button>
                </div>
                <div className={styles.centerContent}>
                    <div>오늘은 이 옷 어때요?</div>
                        <img onClick={handleRandom} className={styles.imgCenterTitle} src={isDay?`${process.env.PUBLIC_URL}/assets/reset.svg`:`${process.env.PUBLIC_URL}/assets/resetDark.svg`} alt="" />
                    <Link to="/detail">
                        <img src={`${process.env.PUBLIC_URL}/assets/clothes.svg`} alt="" />
                    </Link>
                    <div>옷 정보</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={isDay?`${styles.bottomTitleDay}`:`${styles.bottomTitleNight}`}>
                    <div>Today</div>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className={styles.swipe}>
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                    <SwiperWeather />
                </div>
            <Nav/>
        </div>
    );
}

