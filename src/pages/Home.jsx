import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
export default function Home() {
    // const [calendar,setCalendar]=useState([
    //     {}
    // ]);
    // const dateList=calendar.map((list)=><div></div>);
    return (
        <div>
            <div>
                <div>10월 18일 수요일</div>
                <div>
                    <div>23 도</div>
                </div>
                <div className={styles.location}><img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="" />인천, 대한민국</div>
                <div>강수확률2%</div>
            </div>
            <div><img src={`${process.env.PUBLIC_URL}/assets/sunny.svg`} alt="" /></div>
            <div>
                <button><img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="" /></button>
                <button>성별</button>
                <button>스타일</button>
                <button><img src={`${process.env.PUBLIC_URL}/assets/calendar.svg`} alt="" /></button>
            </div>
            <div className={styles.center}>
                <div>오늘은 이 옷 어때요?</div>
                <div><img src={`${process.env.PUBLIC_URL}/assets/reset.svg`} alt="" /></div>
                <div><img src={`${process.env.PUBLIC_URL}/assets/clothes.svg`} alt="" /></div>
                <div>옷 정보</div>
            </div>
            <div>
                <div>Today</div>
                <div>화살표</div>
                <div>
                    {/*map weather*/}
                </div>
            </div>
        </div>
    );
}

