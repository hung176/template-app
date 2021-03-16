import React from 'react';
import Typical from 'react-typical';

export default function Header({ color }) {
  return (
    <div className="header-text">
      <div className="header-text-top">
        <span>ANIMAL FLASHCARD</span>
      </div>

      <div className="header-text-bottom">
        <span style={{color: color, border: `3px solid ${color}`}}>
          FOR{" "}
          <Typical
            steps={['KID', 4000, 'FUN', 4000]}
            loop={Infinity}
            wrapper="b"
          />
        </span>
      </div>
    </div>
);
}