import React from 'react';

export default function CardBack({ title, meaning }) {

  return (
    <div className="card-back">
      <h2>{title}</h2>
      <p>{meaning}</p>
    </div>
  );
}