import React from 'react';
import Select from 'react-select';

function CardEdit({ setWord, animalData }) {
  const optionAnimals = Object.keys(animalData).map(val => ({
    value: val,
    label: val
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