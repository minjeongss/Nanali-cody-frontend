import React, { useState,useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function ImageTransformationWeather() {
  const [imageURL, setImageURL] = useState(`${process.env.PUBLIC_URL}/assets/nav_weather_unclicked.svg`);

  useEffect(() => {
    // 특정 주소에 도달할 때 이미지 URL을 변경합니다.
    if (window.location.pathname === '/weather') {
      setImageURL(`${process.env.PUBLIC_URL}/assets/nav_weather.svg`);
    }
  }, []);

  return (
    <div>
      <img src={imageURL} alt="이미지" />
    </div>
  );
}
function ImageTransformationHome() {
  const [imageURL, setImageURL] = useState(`${process.env.PUBLIC_URL}/assets/nav_home_unclicked.svg`);

  useEffect(() => {
    // 특정 주소에 도달할 때 이미지 URL을 변경합니다.
    if (window.location.pathname === '/home') {
      setImageURL(`${process.env.PUBLIC_URL}/assets/nav_home.svg`);
    }
  }, []);

  return (
    <div>
      <img src={imageURL} alt="이미지" />
    </div>
  );
}
function ImageTransformationMypage() {
  const [imageURL, setImageURL] = useState(`${process.env.PUBLIC_URL}/assets/nav_mypage_unclicked.svg`);

  useEffect(() => {
    // 특정 주소에 도달할 때 이미지 URL을 변경합니다.
    if (window.location.pathname === '/mypage') {
      setImageURL(`${process.env.PUBLIC_URL}/assets/nav_mypage.svg`);
    }
  }, []);

  return (
    <div>
      <img src={imageURL} alt="이미지" />
    </div>
  );
}

const Nav = ()=>{
    return (
            <div className = "wrapper">
                 <nav className="nav">
                    <Link to="/weather" className="nav-link">
                        <div className ="navIcon1">
                            <ImageTransformationWeather />
                        </div>
                    </Link>
                    <Link to="/home" className="nav-link">
                        <div className ="navIcon2">
                           <ImageTransformationHome />  
                        </div>
                    </Link>
                    <Link to="/mypage" className="nav-link">
                        <div className ="navIcon3">
                            <ImageTransformationMypage />  
                        </div>
                    </Link>
                </nav>
                
            </div>
    );
};

export default Nav;