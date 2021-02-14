import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import './styles.css';

const FlashCardTemp = ({ words, imageAnimal, loading }) => {
  const { word, meaning, audio } = words;

  return (
    <div className="container">
      <CardContainer>
        <CardFront audio={audio} word={word} imageAnimal={imageAnimal} />
      </CardContainer>
      
      <CardContainer>
        <CardBack word={word} meaning={meaning} />
      </CardContainer>

    </div>
  );
}

export default FlashCardTemp;