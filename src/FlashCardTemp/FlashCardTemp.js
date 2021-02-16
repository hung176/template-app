import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import './styles.css';

const FlashCardTemp = ({ imageUrl, words, loading }) => {
  const { word, meaning, audio } = words;

  return (
    <div className="container">
      <CardContainer>
        <CardFront audio={audio} word={word} imageUrl={imageUrl} />
      </CardContainer>
      
      <CardContainer>
        <CardBack word={word} meaning={meaning} />
      </CardContainer>

    </div>
  );
}

export default FlashCardTemp;