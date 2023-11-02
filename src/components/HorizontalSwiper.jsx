import React, { useState } from "react";
import Clothes from "./Clothes";
import "./HorizontalSwiper.css";


const HorizontalSwiper = ({ clothes, type }) => {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + 101);
  };

  const toNext = () => {
    slidePx > -4125 && setSlidePx(slidePx - 101);
  };

  if (!clothes) return null; // Return null if 'clothes' is not defined.

  return (
    <div className="horizontalSwiper">
      <p className="clothesType">{type.name}</p>
      <ul className="clothesList" style={{ transform: `translateX(${slidePx}px)` }}>
        {clothes.map((clothing) => (
          <Clothes key={clothing.id} clothes={clothing} />
        ))}
      </ul>
      <div
        className="prevBtn"
        onClick={toPrev}
        style={{ display: slidePx === 0 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div
        className="nextBtn"
        onClick={toNext}
        style={{ display: slidePx === -303 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  );
};

export default HorizontalSwiper;
