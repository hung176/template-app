import React, { useState } from 'react';
import Select from 'react-select';
import { animalName } from '../data/animals';
import './styles.css';

function CardEdit({ setWord }) {
  const [wordSearch, setWordSearch] = useState({});

  const optionAnimals = animalName.map(animal => ({
    value: animal,
    label: animal
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