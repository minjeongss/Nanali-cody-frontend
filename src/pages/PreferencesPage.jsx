import React, {useState} from 'react';
import '../styles/PreferencePage.css';
import { Link } from "react-router-dom";
function Preference(){


     return (
        <div className="preference">
            <div className ='head'>
                <Link to="/mypage" className="backbutton">   
                    <img src={`${process.env.PUBLIC_URL}/assets/leftArrow.svg`}></img>
                </Link>
                <h1>설정</h1>
            </div>
            <div className = "toprofile" >
                <p>회원 정보
                    <img className ="rightarrow" src={`${process.env.PUBLIC_URL}/assets/rightArrow.svg`}></img>
                </p>
                
                
            <div/>

            <hr className="hr1"/>

            <div className = "changenickname" >
                <p>닉네임 변경
                    <img className ="rightarrow" src={`${process.env.PUBLIC_URL}/assets/rightArrow.svg`}></img>
                </p>
                
            </div>
            <div className = "changestyle" >
                <p>스타일 변경
                    <img className ="rightarrow" src={`${process.env.PUBLIC_URL}/assets/rightArrow.svg`}></img>
                </p>
                
            </div>
            <div className = "changepassword" >
                <p>비밀번호 변경
                    <img className ="rightarrow" src={`${process.env.PUBLIC_URL}/assets/rightArrow.svg`}></img>
                </p>
                
            </div>
            <hr className="hr2"/>
            <div className = "logout" >
                <p>로그아웃</p>
            </div>
            <div className = "withdraw" >
                <p>회원 탈퇴</p>
            </div>
            
            </div>
        </div>
    )
}




export default Preference;