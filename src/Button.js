import React from 'react';

export default function Button({
  text,
  word,
  imageUrl,
  meaning,
  isGenerating,
  setIsGenerating,
  setGenerated
}) {
  const generatePDF = async () => {
    setIsGenerating(true);
    const apiUrl = 'https://api.make.cm/make/t/964d132b-0be6-47f3-ba74-41f94bb35bc1/sync';
    const params = {
      size: 'A4',
      format: 'pdf',
      data: {
        word, imageUrl, meaning
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

    setGenerated(resultUrl);
    setIsGenerating(false);
  }

  return (
    <div>
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className={isGenerating ? 'disabled' : 'btn'}
      >
        {isGenerating ? 'Generating...' : text}
        {isGenerating && <span className="spinner-button" />}
      </button>
    </div>
  );
}