import React, { useState } from 'react';
import Select from 'react-select';
import './styles.css';

function CardEdit({ setWord, animalImages }) {
  const [wordSearch, setWordSearch] = useState({});

  const optionAnimals = animalImages.map(image => ({
    value: image.title,
    label: image.title
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