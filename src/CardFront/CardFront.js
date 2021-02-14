import React from 'react';
import './styles.css';

export default function CardFront({ imageAnimal, word, audio }) {
  console.log(imageAnimal);
  return (
    <div className="card-front">
      <img
        src={imageAnimal}
        alt={word}
      />
      <audio className="audio" src={audio} type="audio/mpeg" controls />
    </div>
  );
}