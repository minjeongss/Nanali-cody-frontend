import React, { useState, useEffect } from 'react';

const ImageList = ({ imageUrls }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    // 이미지 배열을 섞어 무작위로 3개 선택
   if (imageUrls && imageUrls.length > 0) {
      // 이미지 배열을 섞어 무작위로 3개 선택
      const shuffledImages = shuffle(imageUrls).slice(0, 3);
      setSelectedImages(shuffledImages);
    }
  }, [imageUrls]);
  // 배열을 섞는 함수
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div>
      <div style={{ display: 'flex' ,alignItems:'center'}}>
        {selectedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            style={{ width: '120px', height: '120px', marginRight: '11px', borderRadius:'25px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageList;