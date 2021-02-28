import React from 'react';

export default function ListCard({ listAnimals }) {
  return (
    <div>
      {listAnimals.map(animal => {
        const { word } = animal;
        return (
          <p>{word}</p>
        );
      })}
    </div>
  );
}