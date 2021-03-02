import React, { useState } from 'react'
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
  const [isGenerating, setIsGenerating] = useState(false);

  const generateItem = async() => {
    setIsGenerating(true);
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
    }).then(res => res.json())

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
          onClick={generateItem}
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
