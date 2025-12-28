import React from "react";

function DogCard({ image, name }) {
  return (
    <div className="dog-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default DogCard;