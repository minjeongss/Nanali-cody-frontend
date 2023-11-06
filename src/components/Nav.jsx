import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ()=>{
    // 현재 선택된 아이콘을 관리하는 state
    const [activeNav, setActiveNav] = useState(1);
    return (
            <div className = "wrapper">
                 <nav className="nav">
                    <Link to="/weather" className="nav-link" onClick={() => setActiveNav(1)}>
                        <div className ="navIcon1">
                            <img alt="weather" 
                                src={`${process.env.PUBLIC_URL}/assets/nav_weather.svg`} 
                                className={activeNav === 1 ? "nav-item active" : "nav-item"}
                            />
                        </div>
                    </Link>
                    <Link to="/home" className="nav-link" onClick={() => setActiveNav(2)}>
                        <div className ="navIcon2">
                            <img alt="home" 
                               src={`${process.env.PUBLIC_URL}/assets/nav_home.svg`} 
                                className={activeNav === 2 ? "nav-item active" : "nav-item"}
                            />        
                        </div>
                    </Link>
                    <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(3)}>
                        <div className ="navIcon3">
                            <img alt="mypage" 
                                src={`${process.env.PUBLIC_URL}/assets/nav_mypage.svg`} 
                                className={activeNav === 3 ? "nav-item active" : "nav-item"}
                            />
                        </div>
                    </Link>
                </nav>
                
            </div>
    );
};

export default Nav;