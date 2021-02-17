import React from 'react';
import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Loading from './Loading';

const FlashCardTemp = ({ imageUrl, words, loadingWord }) => {
  const { word, meaning, audio } = words;

  return (
    <div className="container">
      <CardContainer>
        {loadingWord && <Loading />}
        {!loadingWord && <CardFront
          audio={audio}
          word={word}
          imageUrl={imageUrl} 
          loadingWord={loadingWord}
        />}
      </CardContainer>
      
      <CardContainer>
        {loadingWord && <Loading />}
        {!loadingWord && <CardBack word={word} meaning={meaning} />}
      </CardContainer>

    </div>
  );
}

export default FlashCardTemp;