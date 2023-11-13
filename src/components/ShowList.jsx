import React, { useState } from 'react';
import styles from '../styles/ShowList.module.css'
export default function ShowList(props) {
    const type=props.type;
    const [ageList,setAgeList]=useState([
        "10대","20대","30대"
    ])
    const [sexList,setSexList]=useState([
        "남성","여성","미정"
    ])
    const [styleList,setStyleList]=useState([
        "A","B","C","D"
    ])
    const handleItem=(item)=>{
        props.getTextValue(item,type);
    }
    return (
        <div className={styles.div}>
            <ul>
                {type==="age" && ageList.map(item=>{
                    return <li onClick={()=>handleItem(item)}>{item}</li>
                })}
                {type==="style" && styleList.map(item=>{
                    return <li onClick={()=>handleItem(item)}>{item}</li>
                })}
                {type==="sex" && sexList.map(item=>{
                    return <li onClick={()=>handleItem(item)}>{item}</li>
                })}
            </ul>
        </div>
    );
}