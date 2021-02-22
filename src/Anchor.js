import React from 'react';

export default function Anchor({ generated, isGenerating }) {
  return (
    <div className="anchor-pdf">
      <a
        href={generated}
        target="_blank"
        rel="noreferrer"
        style={{
          visibility: isGenerating ? 'hidden' : 'initial'
        }}
      >
        <span>Download</span>
        <span>PDF</span>
      </a>
    </div>
  );
}