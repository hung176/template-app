import React from 'react'
import Anchor from './Anchor';

function AnimalItem({
  id,
  imageUrl,
  word,
  meaning,
  color,
  handleDelete,
  generated,
}) {

  return (
    <div className="animal-item" style={{ background: color }}>
      <img
        src={imageUrl}
        alt={word}
      />
      <div className="btn-container">
        <button
          className="btn-item btn-delete-item"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>

      {generated && 
        <Anchor 
          generated={generated}
        />
      }
    </div>
  )
}

export default AnimalItem;
