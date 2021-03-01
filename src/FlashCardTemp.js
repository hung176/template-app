import React from 'react';
import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Loading from './Loading';

const FlashCardTemp = ({ word, animalData, loading, color }) => {

  if (loading) {
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
        {loading && <Loading />}
        {!loading && <CardFront
          audio={audio}
          title={title}
          imageUrl={imageUrl} 
          loading={loading}
        />}
      </CardContainer>
      
      <CardContainer color={color}>
        {loading && <Loading />}
        {!loading && <CardBack title={title} meaning={meaning} />}
      </CardContainer>

    </div>
  );
}

export default FlashCardTemp;