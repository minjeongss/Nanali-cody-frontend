import React, {useState, useEffect } from 'react';
import '../styles/WeatherPage.css';
import axios from 'axios';
import Nav from '../components/Nav';
import HSwiper from '../components/HorizontalSwiper';


const exampleClothes = [
  { imageSrc: 'image1.jpg', title: 'Item 1' },
  { imageSrc: 'image2.jpg', title: 'Item 2' },
  { imageSrc: 'image3.jpg', title: 'Item 3' },
  { imageSrc: 'image1.jpg', title: 'Item 1' },
  { imageSrc: 'image2.jpg', title: 'Item 2' },
  { imageSrc: 'image3.jpg', title: 'Item 3' },
  
  // 더 많은 의류 항목을 추가할 수 있습니다.
];
function Weather(){

    const [uvLevel, setUvLevel] = useState(null);
    const [precipitation, setPrecipitation] = useState(null);
    const [temperature, setTemperature] = useState(null);
  
    useEffect(() => {
    // API에서 날씨 데이터 가져오기
    axios.get('https://api.example.com/weather')
      .then(response => {
        // API에서 받아온 데이터를 상태로 업데이트
        setUvLevel(response.data.uvLevel);
        setPrecipitation(response.data.precipitation);
        setTemperature(response.data.temperature);
        
      })
      .catch(error => {
        console.error('날씨 데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);
        const top = {
            name: "상의", 
        };
        const pants = {
            name: "하의", 
        };
        const outer = {
            name: "아우터", 
        };
        const shoes = {
            name: "신발", 
        };

        const style = {
          display: "block",
          whiteSpace: "nowrap",
          fontSize: "12px",
          fontWeight:"400",
          color: "#5D5D5D"
        }
    return (
            <div className="weather">
                <div className="weatherbox">
                    <div className="sun" >
                        <img src={`${process.env.PUBLIC_URL}/assets/sun.svg`} alt="" ></img>
                        {uvLevel !== null ? (
                        <div className="uvlevel">{uvLevel}</div>
                      ) : (
                        <div className="temporary-message">NULL</div>
                      )}
                        <div style={style}>자외선지수</div>
                    </div> 
                    <div className="rain">
                        <img src={`${process.env.PUBLIC_URL}/assets/rain.svg`} alt="" ></img>
                        {precipitation !== null ? (
                        <div className="precipitation">{precipitation}</div>
                      ) : (
                        <div className="temporary-message">NULL</div>
                      )}
                        <div style={style}>강수량</div>
                    </div> 
                    <div className="thermometer">
                        <img src={`${process.env.PUBLIC_URL}/assets/temparature.svg`} alt="" ></img>
                        {temperature !== null ? (
                        <div className="temperature">{temperature}</div>
                      ) : (
                        <div className="temporary-message">NULL</div>
                      )}
                        <div style={style}>기온</div>
                    </div>
        
                </div>
                <div className="weatherparagraph">멘트</div>
                <div className="clothesbox">
                    <HSwiper className="Swiper_1" items={exampleClothes} type={top} visibleItems={4}/>
                    <HSwiper className="Swiper_2" items={exampleClothes} type={pants} visibleItems={4} />
                    <HSwiper className="Swiper_3" items={exampleClothes} type={outer} visibleItems={4}/>
                    <HSwiper className="Swiper_4" items={exampleClothes} type={shoes} visibleItems={4} />
                </div>
                <Nav/>
            </div>
    );
}
export default Weather;