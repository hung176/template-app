import React, { useState } from 'react';

export default function Button({
  text,
  listAnimals,
  isGeneratingAll,
  setIsGeneratingAll,
  setGeneratedAll,
}) {

  return (
    <div className="generate-button">
      <button
        // onClick={}
        disabled={isGeneratingAll}
        className={isGeneratingAll ? 'btn-disabled' : 'btn'}
      >
        {isGeneratingAll ? 'Generating...' : text}
      </button>
    </div>
  );
}