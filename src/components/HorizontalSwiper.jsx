import React, { useState,useRef,useEffect } from "react";
import Clothes from "./Clothes";
import "./HorizontalSwiper.css";


const HorizontalSwiper = ({type, items}) => {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollX(containerRef.current.scrollLeft);

      // Check if the user has scrolled to the right end of the list
      if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
        // Implement logic to add new items to the end of the list
        // For example, you can concatenate more items to the existing `items` array.
      }
    }
  };


  return (
    <div 
      className="horizontalSwiper"
      onScroll={handleScroll}
      ref={containerRef}
     >
      <p className="clothesType">{type.name}</p>
      <div className="clothesList">
          {items&&items.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.imageSrc} alt={item.title}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSwiper;
