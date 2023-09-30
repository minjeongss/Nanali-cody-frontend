import React, { useState } from 'react';
import styles from '../styles/Signup.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import {AiFillCaretDown} from 'react-icons/ai';
export default function Signup() {
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [nickname,setNickname]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState();
    const [gender,setgender]=useState();
    const [style,setStyle]=useState();
    const handleArrow=()=>{
        alert('이동');
    }
    const handleAge=()=>{

    }
    const handleGneder=()=>{

    }
    const handleStyle=()=>{

    }
    const handleSubmit=()=>{
        alert('제출');
    }
    return (
        <div>
            <div className={styles.top}>
                <IoIosArrowBack onClick={handleArrow}/>
                <div>회원가입</div>
            </div>
            <div className={styles.wrap}>
                <div>아이디</div>
                <input type="text" placeholder='아이디를 입력해주세요.'/>
            </div>
            <div className={styles.wrap}>
                <div className={styles.password}>
                    <div>비밀번호</div>
                    <div className={styles.passwordRight}>*6자리이상 입력해주세요.</div>
                </div>
                <input type="password" placeholder='비밀번호를 입력해주세요.'/>
            </div>
            <div className={styles.wrap}>
                <div>닉네임</div>
                <input type="text" placeholder='닉네임을 입력해주세요.'/>
            </div>
            <div className={styles.wrap}>
                <div>이메일</div>
                <input type="email" placeholder='이메일을 입력해주세요.'/>
            </div>
            <div className={styles.wrap}>
                <div>나이</div>
                <button className={styles.button} onClick={handleAge}>
                    나이를 선택해주세요.
                    <AiFillCaretDown className={styles.icon}/>
                </button>
            </div>
            <div className={styles.wrap}>
                <div>성별</div>
                <button className={styles.button} onClick={handleGneder}>
                    성별을 입력해주세요.
                    <AiFillCaretDown className={styles.icon}/>
                </button>
            </div>
            <div className={styles.wrap}>
                <div>스타일</div>
                <button className={styles.button} onClick={handleStyle}>
                    스타일을 선택해주세요.
                    <AiFillCaretDown className={styles.icon2}/>
                </button>
            </div>
            <div className={styles.wrap}>
                <button type='submit' onClick={handleSubmit}>확인</button>
            </div>
        </div>
    );
}