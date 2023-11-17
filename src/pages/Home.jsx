import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import {IoIosArrowForward} from 'react-icons/io';
import Nav from '../components/Nav';
import SwiperWeather from '../components/SwiperWeather';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [data,setData]=useState(null);
    const [isDay,setIsDay]=useState(true);
    const [isRainy,setIsRainy]=useState(false);
    const [rainPercent,setRainPercent]=useState(10);
    const [weather,setWeather]=useState("cloud");
    const [uv,setUv]=useState(2);
    const [clothUrl,setClothUrl]=useState();
    const [body,setBody]=useState();
    const [time,setTime]=useState([]);
    const [sliceTime,setSliceTime]=useState(["","",""]);
    const [tem,setTem]=useState();
    const [sex,setSex]=useState("MAN");
    const [style,setStyle]=useState("DANDY");
    const [date,setDate]=useState("2023-11-18T10:07:00");

    const fetchData=()=>{
        axios.get(`http://3.37.139.209:8080/api/outfit?style=${style}&sex=${sex}&time=${date}`)
        .then((response)=>{ //실제 구동
            setData(response.data);
            setClothUrl(response.data.outfitUrl);
            setBody(response.data.weather.body);
            setTime(Object.keys(response.data.weather.body));
            setTem(response.data.weather.body.time.temperature);
            setSliceTime(time[0],time[1],time[2]);
            console.log(tem);
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
        var input="";
        input=prompt("남성 또는 여성을 입력해주세요.");
        if(input==="남성"){setSex("MAN");}
        else if(input==="여성"){setSex("WOMAN");}
        fetchData();
    }
    const handleButtonStyle=()=>{
        var input="";
        input=prompt("댄디, 캐주얼, 포멀, 시크, 스트리트 중 원하는 스타일을 입력해주세요.");
        if(input==="댄디"){setStyle("DANDY");}
        else if(input==="캐주얼"){setStyle("CASUAL");}
        else if(input==="포멀"){setStyle("FORMAL");}
        else if(input==="시크"){setStyle("CHIC");}
        else if(input==="스트리트"){setStyle("STREET");}
        fetchData();
    }
    const handleButtonDate=()=>{
        var input="";
        input=prompt("오늘 또는 내일을 입력해주세요.");
        if(input==="오늘"){setDate("2023-11-18T10:07:00");}
        else if(input==="내일"){setDate("2023-11-19T10:07:00");}
        fetchData();
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
                    <button className={styles.buttonSex} onClick={handleButtonSex}>성별</button>
                    <button className={styles.buttonStyle} onClick={handleButtonStyle}>스타일</button>
                    <button className={styles.buttonImg} onClick={handleButtonDate}><img src={`${process.env.PUBLIC_URL}/assets/calendar.svg`} alt="" /></button>
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
                        <div>{(time[2]+"").substring(11,18)}</div> {/*11부터 시간 시작*/}
                        <img className={styles.weather} src={`${process.env.PUBLIC_URL}/assets/cloud.svg`} alt="" />
                        <div>{5}°</div>
                    </div>
                    <div className={styles.box}>
                        <div>{(time[0]+"").substring(11,18)}</div> 
                        <img className={styles.weather} src={`${process.env.PUBLIC_URL}/assets/sunny.svg`} alt="" />
                        <div>{6}°</div>
                    </div>
                    <div className={styles.box}>
                        <div>{(time[20]+"").substring(11,18)}</div> 
                        <img className={styles.weather} src={`${process.env.PUBLIC_URL}/assets/sunnycloud.svg`} alt="" />
                        <div>{10}°</div>
                    </div>
                </div>
            <Nav/>
        </div>
    );
}

