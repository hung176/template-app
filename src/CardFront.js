import React from 'react';

export default function CardFront({
  title,
  audio,
  imageUrl,
}) {

  return (
    <div className="card-front">
      <img src={imageUrl} alt={title} />
      <audio className="audio" src={audio} type="audio/mpeg" controls />
    </div>
  );
}