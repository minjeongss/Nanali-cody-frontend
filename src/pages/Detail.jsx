import React from 'react';
import styles from '../styles/Detail.module.css';
import {IoIosArrowBack} from 'react-icons/io';

export default function Detail() {
    const handleHeart=()=>{

    }
    return (
        <div className={styles.body}>
            <div className={styles.arrow}><IoIosArrowBack /></div>
            <div className={styles.top}>
                <img src={`${process.env.PUBLIC_URL}/assets/clothes.svg`} alt="" />
                <img onClick={handleHeart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
            </div>
            <div>
                <div className={styles.bottom}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                        <img onClick={handleHeart} src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

