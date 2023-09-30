import React, { useState } from 'react';
import styles from '../styles/Signup.module.css';
import {IoIosArrowBack} from 'react-icons/io';
import {AiFillCaretDown} from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export default function Signup() {
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [nickname,setNickname]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState();
    const [gender,setgender]=useState();
    const [style,setStyle]=useState();
    const list=[
        /^[a-zA-z0-9]{4,12}$/, //id
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/, //password
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/, //email
    
    ];
    const navigate=useNavigate();

    //url 값 받아오는 방법::추후에 사용
    const {params}=useParams();

    //함수
    const handleArrow=()=>{
        navigate(`/`);
    }
    const handleId=(e)=>{
        setId(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleNickname=(e)=>{
        setNickname(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleAge=()=>{

    }
    const handleGneder=()=>{

    }
    const handleStyle=()=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id===''){alert('아이디를 입력해주세요.'); window.location.reload();}
        else if(password===''){alert('비밀번호를 입력해주세요.'); window.location.reload();}
        else if(password.length<6){alert('비밀번호 6자리 이상 입력해주세요!'); window.location.reload();}
        else if(nickname===''){alert('닉네임을 입력해주세요'); window.location.reload();}
        else if(email===''){alert('이메일을 입력해주세요.'); window.location.reload();}
        else if(!email.match(list[2])){alert('올바른 이메일 형식을 유지해주세요.'); window.location.reload();}
        else{
            navigate(`/`);
        }
    }
    return (
        <div>
            <div className={styles.top}>
                <IoIosArrowBack onClick={handleArrow}/>
                <div>회원가입</div>
            </div>
            <div className={styles.wrap}>
                <div>아이디</div>
                <input type="text" placeholder='아이디를 입력해주세요.' onChange={handleId}/>
            </div>
            <div className={styles.wrap}>
                <div className={styles.password}>
                    <div>비밀번호</div>
                    <div className={styles.passwordRight}>*6자리 이상 입력해주세요.</div>
                </div>
                <input type="password" placeholder='비밀번호를 입력해주세요.' onChange={handlePassword}/>
            </div>
            <div className={styles.wrap}>
                <div>닉네임</div>
                <input type="text" placeholder='닉네임을 입력해주세요.' onChange={handleNickname}/>
            </div>
            <div className={styles.wrap}>
                <div>이메일</div>
                <input type="email" placeholder='이메일을 입력해주세요.' onChange={handleEmail}/>
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