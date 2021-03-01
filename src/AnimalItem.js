import React, { useState } from 'react'
import Anchor from './Anchor';

import { generateItem } from './generateApi';

function AnimalItem({
  id,
  imageUrl,
  word,
  meaning,
  color,
  handleDelete
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(null);

  const handleGenerateItem = () => {
    setIsGenerating(true);
    generateItem(word, imageUrl, meaning, color)
      .then(res => {
        setGenerated(res);
      })
    setIsGenerating(false);
  };

  return (
    <div className="animal-item" style={{ background: color }}>
      <img
        src={imageUrl}
        alt={word}
      />
      <div className="btn-container">
        <button
          className="btn-item btn-generate-item"
          onClick={handleGenerateItem}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate Pdf'}
        </button>
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
          isGenerating={isGenerating}
        />
      }
    </div>
  )
}

export default AnimalItem;
