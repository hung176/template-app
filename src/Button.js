import React from 'react';

export default function Button({
  text,
  isGeneratingAll,
  isEmptyList,
  handleGenerateAll
}) {
  const isGenerating = isEmptyList ? isEmptyList : isGeneratingAll;
  return (
    <div className="generate-button">
      <button
        onClick={handleGenerateAll}
        disabled={isGenerating}
        className={isGenerating? 'btn-disabled' : 'btn'}
      >
        {isGeneratingAll ? 'Generating...' : text}
      </button>
    </div>
  );
}