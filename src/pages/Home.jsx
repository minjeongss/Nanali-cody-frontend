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
    const [isDay,setIsDay]=useState(true);
    const [isRainy,setIsRainy]=useState(false);
    const [rainPercent,setRainPercent]=useState(10);
    const [weather,setWeather]=useState("cloud");
    const [uv,setUv]=useState(2);
    const [clothUrl,setClothUrl]=useState();
    const [body,setBody]=useState();
    const [time,setTime]=useState([]);
    const [tem,setTem]=useState();

    const fetchData=()=>{
        axios.get(`http://3.37.139.209:8080/api/outfit?style=DANDY&sex=MAN&time=2023-11-18T10:07:00`)
        .then((response)=>{ //실제 구동
            setData(response.data);
            setClothUrl(response.data.outfitUrl);
            setBody(response.data.weather.body);
            setTime(Object.keys(body));
            setTem(response.data.weather.body.get([Object.keys(body)[0]]));
        })
        .catch((error)=>{ //error처리
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchData();
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
        fetchData();
    }
    const handleButtonSex=()=>{
        
    }
    return (
        <div className={isDay?`${styles.bodyDay}`:`${styles.bodyNight}`}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.date}>11월 18일 토요일</div>
                    <div className={isDay?`${styles.temperatureDay}`:`${styles.temperatureNight}`}>2°</div>
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
                        <img className={styles.clothes} src={clothUrl} alt="" />
                    </Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={isDay?`${styles.bottomTitleDay}`:`${styles.bottomTitleNight}`}>
                    <div>Today</div>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className={styles.swipe}>
                    {/* <SwiperWeather time={data.weather}/> */}
                    <div className={styles.box}>
                        <div>{time[0]}</div> {/*11부터 시간 시작*/}
                        <img className={styles.weather} src={`${process.env.PUBLIC_URL}/assets/cloud.svg`} alt="" />
                        <div>{tem}</div>
                    </div>
                    <SwiperWeather />
                    <SwiperWeather />
                </div>
            <Nav/>
        </div>
    );
}

