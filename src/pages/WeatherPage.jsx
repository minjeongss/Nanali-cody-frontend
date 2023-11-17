import React, {useState, useEffect } from 'react';
import '../styles/WeatherPage.css';
import axios from 'axios';
import Nav from '../components/Nav';
import ImageList from '../components/ClothingList';


 const topImageUrls = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
    'https://via.placeholder.com/800',
    // ... 더 많은 이미지 URL들
  ];
   const pantsImageUrls = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
    'https://via.placeholder.com/800',
    // ... 더 많은 이미지 URL들
  ];
   const shoesImageUrls = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
    'https://via.placeholder.com/800',
    // ... 더 많은 이미지 URL들
  ];
   const outerImageUrls = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
    'https://via.placeholder.com/800',
    // ... 더 많은 이미지 URL들
  ];


function Weather(){
  const [uvLevel, setUvLevel] = useState('');
  const [precipitation, setPrecipitation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [sex, setSex] = useState('');

    const handleSexToggle = () => {
    setSex((prevSex) => (prevSex === "MAN" ? "WOMAN" : "MAN"));
  };

  
   const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      console.log({
          temp: parseFloat(temperature), // Assuming temperature is a string, convert it to a float
          uv: parseFloat(uvLevel),
          rain: parseFloat(precipitation),
          sex: sex in Sex ? sex : null,
        })
      fetchData();
    }
  };

    const Sex = {
  MAN: "MAN",
  WOMAN: "WOMAN",
  BOTH: "BOTH",
};
  const fetchData = async () => {
    try {
      const response = await axios.get('http://3.37.139.209:8080/api/garment', {
        params: {
          temp: parseFloat(temperature), // Assuming temperature is a string, convert it to a float
          uv: parseFloat(uvLevel),
          rain: parseFloat(precipitation),
          sex: sex in Sex ? sex : null,
        },
      });
      const data = response.data;
      // Use the received data as needed
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
                              <input
                                id="uv"
                                onChange={(e) => setUvLevel(Number(e.target.value))}
                                value={Number(uvLevel)}
                                onKeyDown={handleKeyPress}
                              />
                        <div style={style}>자외선지수</div>
                    </div> 
                    <div className="rain">
                        <img src={`${process.env.PUBLIC_URL}/assets/rain.svg`} alt="" ></img>
                              <input
                                id="precipitation"
                                onChange={(e) => setPrecipitation(Number(e.target.value))}
                                value={Number(precipitation)}
                                onKeyDown={handleKeyPress}
                              />
                        <div style={style}>강수량</div>
                    </div> 
                    <div className="thermometer">
                        <img src={`${process.env.PUBLIC_URL}/assets/temparature.svg`} alt="" ></img>
                              <input
                                id="temperature"
                                onChange={(e) => setTemperature(Number(e.target.value))}
                                value={Number(temperature)}
                                onKeyDown={handleKeyPress}
                              />
                        <div style={style}>기온</div>
                    </div>
                </div>
                <div className="weatherparagraph">원하는 날씨에 맞는 옷을 추천드려요!</div>
                      <button onClick={handleSexToggle}>{sex === "MAN" ? '여자' : '남자'}</button>
                <div className="clothesbox">
                  <div>
                    <div className="clothestype">상의</div>
                    <ImageList className="Swiper_1" imageUrls={topImageUrls}/>
                    <div className="clothestype">하의</div>
                    <ImageList className="Swiper_2" imageUrls={pantsImageUrls}/>
                    <div className="clothestype">신발</div>
                    <ImageList className="Swiper_3" imageUrls={shoesImageUrls}/>
                    <div className="clothestype">아우터</div>
                    <ImageList className="Swiper_4" imageUrls={outerImageUrls}/>
                    <div className ="box" style={{ width: '120px', height: '100px'}}/>
                    </div>
                </div>
                <Nav/>
            </div>
    );
}
export default Weather;