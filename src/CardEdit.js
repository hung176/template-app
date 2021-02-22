import React from 'react';
import Select from 'react-select';

function CardEdit({ setWord, animalImages }) {
  const optionAnimals = 
    animalImages
      .map(animal => animal.title)
      .sort()
      .map(animalName => ({
        value: animalName,
        label: animalName
      }));

  return (
    <Select
      className="word-search"
      options={optionAnimals}
      placeholder="Select a animal"
      isSearchable
      onChange={(e) => setWord(e.value)}
    />
  );
}

export default CardEdit;