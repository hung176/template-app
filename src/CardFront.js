import React from 'react';

export default function CardFront({
  word,
  audio,
  imageUrl,
}) {

  return (
    <div className="card-front">
      <img src={imageUrl} alt={word} />
      <audio className="audio" src={audio} type="audio/mpeg" controls />
    </div>
  );
}