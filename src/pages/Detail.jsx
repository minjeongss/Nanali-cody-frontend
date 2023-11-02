import React from 'react';
import styles from '../styles/Detail.module.css';
export default function Detail() {
    return (
        <div>
            <div className={styles.top}>
                <img src={`${process.env.PUBLIC_URL}/assets/clothes.svg`} alt="" />
                <img src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
            </div>
            <div>
                <div className={styles.bottom}>
                    <img src={`${process.env.PUBLIC_URL}/assets/clothesDetail.svg`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/assets/heart.svg`} alt="" />
                </div>
            </div>
        </div>
    );
}

