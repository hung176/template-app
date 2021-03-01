import React from 'react'
import AnimalItem from './AnimalItem'

function ListAnimals({ imageUrl, word, color }) {
  return (
    <div className="list-animal">
      <AnimalItem imageUrl={imageUrl} word={word} color={color} />
    </div>
  )
}

export default ListAnimals;
