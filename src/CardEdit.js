import React, { useState } from 'react';
import Select from 'react-select';

function CardEdit({ setWord, animalImages }) {
  const [wordSearch, setWordSearch] = useState({});
  const optionAnimals = 
    animalImages
      .map(animal => animal.title)
      .sort()
      .map(animalName => ({
        value: animalName,
        label: animalName
      }));

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        setWord(wordSearch['value']);
      }}>
        <Select
          className="word-search"
          options={optionAnimals}
          placeholder="Select a animal"
          isSearchable
          onChange={setWordSearch}
        />
        <button className="btn" type="submit">Preview</button>
      </form>
    </div>
  );
}

export default CardEdit;