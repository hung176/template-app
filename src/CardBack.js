import React from 'react';

export default function CardBack({ word, meaning }) {

  return (
    <div className="card-back">
      <h2>{word}</h2>
      <p>{meaning}</p>
    </div>
  );
}