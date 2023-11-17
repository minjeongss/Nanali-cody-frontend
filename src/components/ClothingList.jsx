import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleLikeClick = async (garmentId) => {
    try {
      // Check if the garment is already liked
      const isLiked = selectedImages.some((image) => image.garmentId === garmentId);

      if (isLiked) {
        // Unlike the garment
        await axios.delete(`http://3.37.139.209:8080/api/like/garment/${garmentId}`);
        setSelectedImages((prevImages) => prevImages.filter((image) => image.garmentId !== garmentId));
      } else {
        // Like the garment
        await axios.post(`http://3.37.139.209:8080/api/like/garment/${garmentId}`);
        // Assuming garmentId is a unique identifier for each image
        // If not, you may need to adjust this logic based on your data structure
        setSelectedImages((prevImages) => [...prevImages, { garmentId }]);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <div className = "imglist" style={{ display: 'flex' ,alignItems:'center'}}>
        {selectedImages.map((imageUrl, index) => (
         <div key={imageUrl.id} style={{ position: 'relative', marginRight: '11px' }}>
            <img
              src={imageUrl.imgUrl}
              alt={`Image ${index + 1}`}
              style={{ width: '120px', height: '120px', borderRadius: '25px' }}
            />
            <button
              onClick={() => handleLikeClick(imageUrl.id)}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                height:'15px',
                width:'15px',
                backgroundImage:`url(${process.env.PUBLIC_URL}/assets/unLike.svg)` ,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {selectedImages.some((likedImage) => likedImage.garmentId === imageUrl.id)
                ? 'Unlike'
                : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;