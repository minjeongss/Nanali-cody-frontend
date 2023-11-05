import React, {useState, useEffect } from 'react';
import '../styles/WeatherPage.css';
import axios from 'axios';
import HSwiper from '../components/HorizontalSwiper';


const exampleClothes = [
  {
    id: 1,
    name: "T-Shirt",
    imageUrl: "tshirt.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    imageUrl: "jeans.jpg",
  },
  {
    id: 3,
    name: "Sweater",
    imageUrl: "sweater.jpg",
  },
  {
    id: 4,
    name: "Jacket",
    imageUrl: "jacket.jpg",
  },
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
          fontSize: "12px",
          fontWeight:"400",
          color: "#5D5D5D"
        }
    return (
            <div className="weather">
                <div className="weatherbox">
                    <div className="sun" >
                        <img src={`${process.env.PUBLIC_URL}/assets/sun.svg`} alt="" ></img>
                        <div className = "uvlevel">{uvLevel}</div>
                        <div style={style}>자외선지수</div>
                    </div> 
                    <div className="rain">
                        <img src={`${process.env.PUBLIC_URL}/assets/rain.svg`} alt="" ></img>
                        <div className = "precipitation">{precipitation}</div>
                        <div style={style}>강수량</div>
                    </div> 
                    <div className="thermometer">
                        <img src={`${process.env.PUBLIC_URL}/assets/temparature.svg`} alt="" ></img>
                        <div className = "temparature">{temperature}</div>
                        <div style={style}>기온</div>
                    </div> 
                </div>
                <div className="clothesbox">
                    <HSwiper className="Swiper_1" clothes={exampleClothes} type={top} />
                    <HSwiper className="Swiper_2" clothes={exampleClothes} type={pants} />
                    <HSwiper className="Swiper_3" clothes={exampleClothes} type={outer} />
                    <HSwiper className="Swiper_4" clothes={exampleClothes} type={shoes} />
                </div>

            </div>
    );
}
export default Weather;