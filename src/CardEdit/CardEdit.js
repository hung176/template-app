import React, { useState } from 'react';

function CardEdit({ setWord }) {
  const [wordSearch, setWordSearch] = useState('');

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        setWord(wordSearch);
      }}>
        <input
          type="text"
          name="word"
          value={wordSearch}
          onChange={e => setWordSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CardEdit;