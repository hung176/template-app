import React, { useState, useEffect } from 'react';
import FlashCardTemp from './FlashCardTemp/FlashCardTemp';
import CardEdit from './CardEdit/CardEdit';

import { fetchPhotos } from './animalImg';
import { capitalizeFirstLetter } from './helper';

function App() {
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState('Elephant');
  const [words, setWords] = useState({});

  const [animalImages, setAnimalImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchWord = async (word) => {
    try {
      setLoading(true);
      const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const wordDataJson = await result.json();
      const wordData = {
        word: capitalizeFirstLetter(wordDataJson[0]['word']),
        audio: wordDataJson[0]['phonetics'][0]['audio'],
        meaning: wordDataJson[0]['meanings'][0]['definitions'][0]['definition'],
      };
  
      setWords(wordData);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchWord(word);

    fetchPhotos().then(res => {
      setLoadingImage(true);
      const { photoset: { photo } } = res;
      const imageUrl = photo.filter(photoItem => photoItem.title === word)[0]['url_o'];
      setAnimalImages(photo);
      setImageUrl(imageUrl);
      setLoadingImage(false);
    })

  }, [word, setAnimalImages]);

  return (
    <div className="App">
      <h1>ANIMALS FLASHCARD FOR KID</h1>
      <CardEdit setWord={setWord} animalImages={animalImages} />
      <FlashCardTemp
        loading={loading}
        imageUrl={imageUrl}
        words={words}
      />
    </div>
  );
}

export default App;
