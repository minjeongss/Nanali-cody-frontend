import React, { useEffect, useState } from 'react';
import styles from '../styles/Detail.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get('http://3.37.139.209:8080/api/detail')
        .then((response)=>{ //실제 구동
            //setData(response.data)
            console.log(response)
        })
        .catch((error)=>{ //error처리
            console.log(error)
        })
    },[])
    const handleHeart=()=>{

    }
    return (
        <div className={styles.body}>
            <Link to="/home">
                <div className={styles.arrow}><IoIosArrowBack /></div>
            </Link>
            <div className={styles.top}>
                <img className={styles.clothes} src={`${process.env.PUBLIC_URL}/assets/clothes2.svg`} alt="" />
                <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
            </div>
            <div>
                {/*map 사용*/}
                
                    <div className={styles.bottom}>
                        <img className={styles.clothesDetail}src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} className={styles.heart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
            </div>
        </div>
    );
}

