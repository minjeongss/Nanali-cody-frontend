import React, { useState } from "react";
import {Outlet} from "react-router"
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ()=>{
    // 현재 선택된 아이콘을 관리하는 state
    const [activeNav, setActiveNav] = useState(1);
    return (
            <div className = "wrapper">
                <Outlet />
                 <nav className="nav">
                    <Link to="/weather" className="nav-link" onClick={() => setActiveNav(1)}>
                        <div className ="navIcon1">
                            <img alt="weather" 
                                src="img/weather.png"
                                className={activeNav === 1 ? "nav-item active" : "nav-item"}
                            />
                        </div>
                    </Link>
                    <Link to="/home" className="nav-link" onClick={() => setActiveNav(2)}>
                        <div className ="navIcon2">
                            <img alt="home" 
                                src="img/home.png" 
                                className={activeNav === 2 ? "nav-item active" : "nav-item"}
                            />        
                        </div>
                    </Link>
                    <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(3)}>
                        <div className ="navIcon3">
                            <img alt="mypage" 
                                src="img/mypage.png" 
                                className={activeNav === 3 ? "nav-item active" : "nav-item"}
                            />
                        </div>
                    </Link>
                </nav>
                
            </div>
    );
};

export default Nav;