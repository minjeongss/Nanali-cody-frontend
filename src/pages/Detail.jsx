import React, { useEffect, useState } from 'react';
import styles from '../styles/Detail.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const [data,setData]=useState(null);
    const [like,setLike]=useState(false);
    const [outfitId,setOutFitId]=useState('');
    const [temperature,setTemperature]=useState(20);
    const [all,setAll]=useState();
    const [top,setTop]=useState();
    const [bottom,setBottom]=useState();
    const [shoes,setShoes]=useState();

    useEffect(()=>{
        axios.get(`http://3.37.139.209:8080/api/detail/1`)
        .then((response)=>{ //실제 구동
            setData(response.data);
            console.log(response.data);
        })
        .catch((error)=>{ //error처리
            console.log(error)
        })
    },[])
    // useEffect(()=>{
    //     axios.post(`/api/like/outfit/${outfitId}`,{})
    // },[like])
    const handleHeart=()=>{
        if(like===false){
            setLike(true);
        }else{
            setLike(false);
        }
    }
    return (
        <div className={styles.body}>
            <Link to="/home">
                <div className={styles.arrow}><IoIosArrowBack /></div>
            </Link>
            <div className={styles.top}>
                <img className={styles.clothes} src={`${process.env.PUBLIC_URL}/assets/clothes2.svg`} alt="" />
                <img onClick={handleHeart} className={styles.heart} src={like?`${process.env.PUBLIC_URL}/assets/heartRed.svg`:`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
            </div>
            <div className={styles.wrapBottom}>
                {/*map 사용*/}
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesShoe.svg`} alt="" />
                    </div>
            </div>
        </div>
    );
}

