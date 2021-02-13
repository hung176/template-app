import React, { useState, useEffect } from 'react';
import FlashCardTemp from './FlashCardTemp/FlashCardTemp';
import CardEdit from './CardEdit/CardEdit';

function App() {
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState('elephant');
  const [words, setWords] = useState([]);

  const fetchWord = async (word) => {
    try {
      setLoading(true);
      const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const wordDataJson = await result.json();
      const wordData = wordDataJson.map(wordInfor => ({
        pronunciation: {
          text: wordInfor['phonetics'][0]['text'],
          audio: wordInfor['phonetics'][0]['audio']
        },
        definitions: wordInfor['meanings'].map(meaning => meaning['definitions']).flat()
      }));
  
      setWords(wordData);
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
      <CardEdit setWord={setWord} />
      <FlashCardTemp
        word={word}
        loading={loading}
        words={words}
      />
    </div>
  );
}

export default App;
