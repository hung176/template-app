import React from 'react';
import Typical from 'react-typical';

export default function Header() {
  return (
    <div className="header-text">
      <div className="header-text-left">
        <span>ANIMAL FLASHCARD</span>
      </div>

      <div className="header-text-right">
        <span>
          FOR{" "}
          <Typical 
            steps={['KID', 2000, 'EVERYONE', 1000]}
            loop={Infinity}
            wrapper="b"
          />
        </span>
      </div>
    </div>
);
}