import React from "react";
import "./Clothes.css";

const Clothes = ({ clothes }) => {
  return (
    <div className="clothesItem">
      <img src={clothes.imageUrl} alt={clothes.name} />
    </div>
  );
};

export default Clothes;