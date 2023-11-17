import React, { useEffect, useState } from 'react';
import styles from '../styles/Detail.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const [data,setData]=useState(null);
    const [like,setLike]=useState();
    const [outfitId,setOutFitId]=useState('');
    const [temperature,setTemperature]=useState(20);
    useEffect(()=>{
        axios.get(`/api/detail/`)
        .then((response)=>{ //실제 구동
            console.log(response);
        })
        .catch((error)=>{ //error처리
            console.log(error)
        })
    },[])
    // useEffect(()=>{
    //     axios.post(`/api/like/outfit/${outfitId}`,{})
    // },[like])
    const handleHeart=()=>{
        
    }
    return (
        <div className={styles.body}>
            <Link to="/home">
                <div className={styles.arrow}><IoIosArrowBack /></div0o0->
            </Link>
            <div className={styles.top}>
                <img className={styles.clothes} src={`${process.env.PUBLIC_URL}/assets/clothes2.svg`} alt="" />
                <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
            </div>
            <div className={styles.wrapBottom}>
                {/*map 사용*/}
                
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
                    <div className={temperature>=15?`${styles.bottomHidden}`:`${styles.bottom}`}>
                        <img className={styles.clothesDetail} src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
            </div>
        </div>
    );
}

