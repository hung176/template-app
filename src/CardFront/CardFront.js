import React from 'react';
import './styles.css';

export default function CardFront({ word, audio, imageUrl }) {
  return (
    <div className="card-front">
      <img
        src={imageUrl}
        alt={word}
      />
      <audio className="audio" src={audio} type="audio/mpeg" controls />
    </div>
  );
}