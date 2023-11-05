import React, { useState } from 'react';
import styles from '../styles/ShowList.module.css'
export default function ShowList() {
    const [ageList,setAgeList]=useState([
        "10대","20대","30대"
    ])
    return (
        <div>
            <ul>
                {ageList.map(item=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );
}