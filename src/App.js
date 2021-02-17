import React, { useState, useEffect } from 'react';
import FlashCardTemp from './FlashCardTemp';
import CardEdit from './CardEdit';
import Button from './Button';

import { fetchPhotos } from './animalImg';
import { capitalizeFirstLetter } from './helper';

import './App.css';

function App() {
  const [loadingWord, setLoadingWord] = useState(false);
  const [word, setWord] = useState('Elephant');
  const [words, setWords] = useState({});

  const [animalImages, setAnimalImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(null)

  const fetchWord = async (word) => {
    try {
      setLoadingWord(true);
      const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const wordDataJson = await result.json();
      const wordData = {
        word: capitalizeFirstLetter(wordDataJson[0]['word']),
        audio: wordDataJson[0]['phonetics'][0]['audio'],
        meaning: wordDataJson[0]['meanings'][0]['definitions'][0]['definition'],
      };
  
      setWords(wordData);
      setLoadingWord(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    setGenerated(null)
    fetchWord(word);

    fetchPhotos().then(res => {
      const { photoset: { photo } } = res;
      const imageUrl = photo.filter(photoItem => photoItem.title === word)[0]['url_o'];
      setAnimalImages(photo);
      setImageUrl(imageUrl);
    })

  }, [word, setAnimalImages]);

  return (
    <div className="App">
      <h1>ANIMALS FLASHCARD FOR KID</h1>
      <CardEdit setWord={setWord} animalImages={animalImages} />
      <FlashCardTemp
        loadingWord={loadingWord}
        imageUrl={imageUrl}
        words={words}
      />
      <Button
        text="GeneratePDF"
        word={words.word}
        meaning={words.meaning}
        imageUrl={imageUrl}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        setGenerated={setGenerated}
      />
      <a
         href={generated}
         target="_blank"
         rel="noreferrer"
         style={{
           visibility: generated ? 'initial' : 'hidden'
         }}
      >
        Download PDF
      </a>
    </div>
  );
}

export default App;
