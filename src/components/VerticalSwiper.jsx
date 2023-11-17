import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios'; // Import axios for API calls
import "./VerticalSwiper.css";
const VerticalSwiper = () => {
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);
  const imageWidth = 167;
  const imageHeight = 162;
  const scrollThreshold = 100; // 스크롤 감지 임계값

  useEffect(() => {
    // 초기 이미지 로딩 또는 API 호출 등을 수행할 수 있습니다.
    // 여기서는 간단한 더미 데이터를 사용합니다.
    const initialImages = Array.from({ length: 8 }, (_, index) => ({
      id: index,
      url: `https://via.placeholder.com/${imageWidth}x${imageHeight}?text=Image${index + 1}`,
    }));
    setImages(initialImages);
  }, []);

  const fetchMoreData = () => {
    // 새로운 이미지를 불러오는 로직을 여기에 구현합니다.
    // 여기서는 간단한 더미 데이터를 사용합니다.
    const newImages = Array.from({ length: 4 }, (_, index) => ({
      id: images.length + index,
      url: `https://via.placeholder.com/${imageWidth}x${imageHeight}?text=Image${images.length + index + 1}`,
    }));

    // 새로운 데이터를 기존 데이터에 추가합니다.
    setImages([...images, ...newImages]);
  };

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const isAtBottom =
        container.scrollTop + container.clientHeight + scrollThreshold >= container.scrollHeight;

      if (isAtBottom) {
        fetchMoreData();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="container" // 컨테이너에 스타일 적용
      onScroll={handleScroll} // 스크롤 이벤트 핸들러 추가
    >
      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image ${image.id}`}
            className="image" // 이미지에 스타일 적용
          />
        ))}
      </div>
    </div>
  );
};
export default VerticalSwiper;