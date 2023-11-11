import React, { useState,useRef,useEffect } from "react";
import "./HorizontalSwiper.css";


const HorizontalSwiper = ({type, items}) => {
  const containerRef = useRef(null);
   const [scrollPosition, setScrollPosition] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    // 초기 콘텐츠 로딩 또는 API 호출 등을 수행할 수 있습니다.
    // 여기서는 간단한 더미 데이터를 사용합니다.
    const initialContent = Array.from({ length: 4 }, (_, index) => (
      <div key={index} className="content-item">
        <img
          src={`https://via.placeholder.com/120x120?text=Image${index + 1}`}
          alt={`Image ${index + 1}`}
        />
      </div>
    ));
    setContent(initialContent);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const newPosition = container.scrollLeft;
      setScrollPosition(newPosition);

      // 특정 지점에 도달하면 새로운 콘텐츠를 추가합니다.
      if (newPosition + container.clientWidth >= container.scrollWidth) {
        addNewContent();
      }
    }
  };

  const addNewContent = () => {
    // 새로운 콘텐츠를 불러오는 로직을 여기에 구현합니다.
    // 여기서는 간단한 더미 데이터를 사용합니다.
    const newContent = Array.from({ length: 4 }, (_, index) => (
      <div key={content.length + index} className="content-item">
        <img
          src={`https://via.placeholder.com/120x120?text=Image${content.length + index + 1}`}
          alt={`Image ${content.length + index + 1}`}
        />
      </div>
    ));

    // 새로운 데이터를 기존 데이터에 추가합니다.
    setContent([...content, ...newContent]);
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
