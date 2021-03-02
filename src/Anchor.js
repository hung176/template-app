import React from 'react';

export default function Anchor({ generated, isGenerating }) {
  console.log('geee', generated)
  return (
    <div className="anchor-pdf">
      <a
        href={generated}
        target="_blank"
        rel="noreferrer"
        style={{
          visibility: generated ? 'initial' : 'hidden'
        }}
      >
        <span>PDF</span>
      </a>
    </div>
  );
}