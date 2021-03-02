import React, { useState, useEffect } from 'react';
import { TwitterPicker } from 'react-color';
import { v4 as uuid4 } from 'uuid';

import FlashCardTemp from './FlashCardTemp';
import CardEdit from './CardEdit';
import Button from './Button';
// import Anchor from './Anchor';
import AnimalItem from './AnimalItem';

import { fetchPhotos, fetchWord } from './animalImg';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('Elephant');
  const [color, setColor] = useState({ hex: '#0693E3' });

  const [animalData, setAnimalData] = useState({});

  const [isGeneratingAll, setIsGeneratingAll] = useState(false);
  const [generatedAll, setGeneratedAll] = useState([]);

  const [listAnimals, setListAnimals] = useState([]);

  const reducer = (acc, val) => {
    const newImageObject = {
      title: val['title'],
      imageUrl: val['url_o']
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
    // setGeneratedAll(null)
    const fetchData = async () => {
      try {
        setLoading(true);
        const imageAPI = await fetchPhotos();
        const newImageAPI = imageAPI.photoset.photo;
        const newImage = newImageAPI.reduce(reducer, {});

        const wordData = await fetchWord(word);
        
        const newAnimalData = {
          ...newImage,
          [word]: {
            ...newImage[word],
            ...wordData
          }
        };

        setAnimalData(newAnimalData);
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, [word]);

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleSave = () => {
    setListAnimals([...listAnimals, {
      id: uuid4(),
      word: word,
      imageUrl: animalData[word]['imageUrl'],
      meaning: animalData[word]['meaning'],
      color: color.hex,
    }]);

  };

  const handleDelete = (id) => {
    const newListAnimals = listAnimals.filter(animal => animal.id !== id);
    setListAnimals(newListAnimals);
  };

  const handleGenerateAll = () => {
    setIsGeneratingAll(true);
    const newList = listAnimals.map(async an => {
      const { word, imageUrl, meaning, color, id } = an;

      const apiUrl = 'https://api.make.cm/make/t/964d132b-0be6-47f3-ba74-41f94bb35bc1/sync';
      const params = {
        size: 'A4',
        format: 'pdf',
        data: {
          word, imageUrl, meaning, color
        }
      };
    
      const { resultUrl } = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MAKE-API-KEY': 'HsB5+CDZdrs8GOMMG449IkxuxCqkiPCjbQAbZoDv'
        },
        body: JSON.stringify(params)
      })
      .then(res => res.json())

      return { [id]: resultUrl };
    })
    Promise.all(newList).then(res => {
      return res.reduce((acc, val) => ({...acc, ...val}),{});
    }).then(res => setGeneratedAll(res));
    setIsGeneratingAll(false);
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
        loading={loading}
        animalData={animalData[word]}
        color={color.hex}
      />

      <button
        onClick={handleSave}
      >
        Save
      </button>

      {listAnimals.length === 0
        ? (<div>Press save button to store one image </div>)
        : (
          <div className="list-animal">
            {listAnimals.map(animal => (
              <AnimalItem
                key={animal.id}
                imageUrl={animal.imageUrl}
                word={animal.word}
                meaning={animal.meaning}
                color={animal.color}
                id={animal.id}
                handleDelete={handleDelete}
                generated={generatedAll[animal.id]}
              />
            ))}
          </div>
        )
      }

      <Button
        text="Generate All"
        listAnimals={listAnimals}
        isGeneratingAll={isGeneratingAll}
        setIsGeneratingAll={setIsGeneratingAll}
        setGeneratedAll={setGeneratedAll}
        handleGenerateAll={handleGenerateAll}
      />
    </div>
  );
}

export default App;