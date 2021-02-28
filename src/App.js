import React, { useState, useEffect } from 'react';
import { TwitterPicker } from 'react-color';
// import { v4 as uuidv4 } from 'uuid';

import FlashCardTemp from './FlashCardTemp';
import CardEdit from './CardEdit';
import Button from './Button';
import Anchor from './Anchor';

import { fetchPhotos } from './animalImg';

import './App.css';

function App() {
  const [loadingWord, setLoadingWord] = useState(true);
  const [word, setWord] = useState('Elephant');
  const [color, setColor] = useState({ hex: '#0693E3' });

  const [animalData, setAnimalData] = useState({});

  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(null);
  
  const reducer = (acc, val) => {
    const newImageObject = {
      title: val['title'],
      imageUrl: val['url_o']
    }
    if(newImageObject['title'] === word) {
    }
    return {
      ...acc,
      [newImageObject.title]: {
        ...(animalData[newImageObject.title] || {}),
        ...newImageObject
      }
    };
  };
 
  useEffect(() => {
    // setGenerated(null)
    const fetchWord = async () => {
      try {
        setLoadingWord(true);
        const imageAPI = await fetchPhotos();
        const newImageAPI = imageAPI.photoset.photo;
        const newAnimalData = newImageAPI.reduce(reducer, {});

        const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
        const wordDataJson = await result.json();

        const wordData = {
          audio: wordDataJson[0]['phonetics'][0]['audio'],
          meaning: wordDataJson[0]['meanings'][0]['definitions'][0]['definition'],
        };
        
        const newestAnimal = {
          ...newAnimalData,
          [word]: {
            ...newAnimalData[word],
            ...wordData
          }
        };

        setAnimalData(newestAnimal);
        setLoadingWord(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchWord();
  }, [word]);

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="App">
      <h1>ANIMAL FLASHCARD FOR KID</h1>
      <CardEdit setWord={setWord} animalData={animalData} />
      <TwitterPicker
        triangle="hide"
        color={color.hex}
        onChange={handleColorChange}
      />

      <FlashCardTemp
        loadingWord={loadingWord}
        animalData={animalData[word]}
        color={color.hex}
      />

      {/* <button onClick={() => {
        const animalData = {
          id: uuidv4(),
          ...words,
          imageUrl,
          color: color['hex']
        };
        const newListAnimals = [...listAnimals, animalData];
        setListAnimals(newListAnimals);
      }}>Save</button> */}

      {/* <ListCard listAnimals={listAnimals} /> */}

      <Button
        text="Generate PDF"
        word={word}
        animalData={animalData}
        color={color.hex}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
        setGenerated={setGenerated}
      />

      <Anchor
        generated={generated}
        isGenerating={isGenerating}
      />
    </div>
  );
}

export default App;