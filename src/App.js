import React, { useState, useEffect } from 'react';
import FlashCardTemp from './FlashCardTemp/FlashCardTemp';
import CardEdit from './CardEdit/CardEdit';

import { animals } from './data/animals';
import { capitalizeFirstLetter } from './helper';

function App() {
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState('Elephant');
  const [words, setWords] = useState({});

  const imageAnimal = animals.filter(animal => animal.name === word)[0]['image'];

  const fetchWord = async (word) => {
    try {
      setLoading(true);
      const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const wordDataJson = await result.json();
      const wordDataAPI = {
        word: capitalizeFirstLetter(wordDataJson[0]['word']),
        audio: wordDataJson[0]['phonetics'][0]['audio'],
        meaning: wordDataJson[0]['meanings'][0]['definitions'][0]['definition'],
      };
  
      setWords(wordDataAPI);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchWord(word);
  }, [word]);

  console.log(words);
  return (
    <div className="App">
      <h1>ANIMALS FLASHCARD FOR KID</h1>
      <CardEdit setWord={setWord} />
      <FlashCardTemp
        loading={loading}
        imageAnimal={imageAnimal}
        words={words}
      />
    </div>
  );
}

export default App;
