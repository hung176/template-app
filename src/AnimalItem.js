import React from 'react'

function AnimalItem({ imageUrl, word, color }) {
  return (
    <div className="animal-item" style={{ background: color.hex }}>
      <img
        src={imageUrl}
        alt={word}
      />
      <div className="btn-container">
        <button className="btn-generate-item">GeneratePdf</button>
        <button className="btn-delete-item">Delete</button>
      </div>
    </div>
  )
}

export default AnimalItem;
