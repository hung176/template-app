import React from 'react';
import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Loading from './Loading';

const FlashCardTemp = ({ word, animalData, loadingWord, color }) => {

  if (loadingWord) {
    return (
    <div className="container">
      <CardContainer color={color}>
        <Loading />
        
      </CardContainer>
      
      <CardContainer color={color}>
        <Loading />
  
      </CardContainer>

    </div>
    )
  }

  const { title, meaning, audio, imageUrl } = animalData;
  // console.log(meaning)

  return (
    <div className="container">
      <CardContainer color={color}>
        {loadingWord && <Loading />}
        {!loadingWord && <CardFront
          audio={audio}
          title={title}
          imageUrl={imageUrl} 
          loadingWord={loadingWord}
        />}
      </CardContainer>
      
      <CardContainer color={color}>
        {loadingWord && <Loading />}
        {!loadingWord && <CardBack title={title} meaning={meaning} />}
      </CardContainer>

    </div>
  );
}

export default FlashCardTemp;