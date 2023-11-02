import React, {useState} from 'react';
import '../styles/WeatherPage.css';
import Logo from '../components/Logo';
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

    return (
            <div className="weather">
                <Logo/>
                <div className="weatherbox">
                    <div className="sunlight" >
                        
                    </div> 
                    <div class="israining">
                        
                    </div> 
                    <div class="temperature">
                        
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