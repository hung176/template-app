import React from 'react';
import Loading from './Loading';

export default function Anchor({ generated }) {
  const { loading, result } = generated;

  return (
    <div className="anchor-pdf">
      {loading && <Loading />}

      {!loading && <a
        href={result}
        target="_blank"
        rel="noreferrer"
        style={{
          visibility: result ? 'initial' : 'hidden'
        }}
      >
        <span>PDF</span>
      </a>}
    </div>
  );
}