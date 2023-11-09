import React, { useState, useEffect } from 'react';
import '../styles/MyPage.css';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';

function MyPage() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [activeTab, setActiveTab] = useState('coordi'); // Default to coordi tab

    
    useEffect(() => {
        // 실제로는 API 호출을 수행해야 합니다. 이 예제에서는 더미 데이터를 사용합니다.
        // 아래의 fetchUserInfo 함수를 API 호출로 대체해야 합니다.
        fetchUserInfo();
    }, []);

    // API 호출 함수 (더미 데이터 사용)
    const fetchUserInfo = () => {
        // API를 호출하여 닉네임과 이메일 정보를 가져온다고 가정
        // 실제 API 호출 코드를 여기에 작성해야 합니다.
        const dummyData = {
            nickname: '인하님',
            email: 'johndoe@example.com',
        };

        // 가져온 정보를 상태 변수에 설정
        setNickname(dummyData.nickname);
        setEmail(dummyData.email);
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mypage">
            <Link to="/preference" className="preferencebutton">
                <img src={`${process.env.PUBLIC_URL}/assets/preference.svg`} alt="Preference" />
            </Link>
            <div className='profile'>
                <div className='profilephoto'>
                    <img src={`${process.env.PUBLIC_URL}/assets/exprofile.svg`} alt="Profile" />
                </div>
                <div className='nickname'>{nickname}</div>
                <div className='email'>{email}</div>
            </div>
            <div className='coordibox'>
                <div className='selector'>
                    <div className={`coorditabbutton ${activeTab === 'coordi' ? 'active' : ''}`}
                        onClick={() => handleTabClick('coordi')}
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/coordi.svg`} alt="Preference" />
                    </div>
                    <div className='v-line'></div>
                    <div className={`clothingtabbutton ${activeTab === 'clothing' ? 'active' : ''}`}
                        onClick={() => handleTabClick('clothing')}
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/clothing.svg`} alt="Preference" />
                    </div> 
                </div>
            </div>
             <div className='tabcontent'>
                {/* Render content based on active tab */}
                {activeTab === 'coordi' && <div>Content for Coordi Tab</div>}
                {activeTab === 'clothing' && <div>Content for Clothing Tab</div>}
            </div>
            <Nav />
        </div>
    )
}

export default MyPage;