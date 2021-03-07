import React from 'react';

export default function Button({
  text,
  isGeneratingAll,
  handleGenerateAll
}) {
  return (
    <div className="generate-button">
      <button
        onClick={handleGenerateAll}
        disabled={isGeneratingAll}
        className={isGeneratingAll ? 'btn-disabled' : 'btn'}
      >
        {isGeneratingAll ? 'Generating...' : text}
      </button>
    </div>
  );
}