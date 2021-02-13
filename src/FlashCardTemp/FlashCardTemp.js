import React from 'react';
import elephant from '../assets/elephant2.png';
import './styles.css';

const FlashCardTemp = ({ word, words, loading }) => {

  return (
    <div className="container">
        <div className="card">
          {loading ? (
            <div>loading...</div>
          ) : (
            <div>
                <div className="card-image">
                  <img
                    src={elephant}
                    alt="elephant"
                  />
                </div>
                <span className="caption">
                  {word}
                </span>
            </div>
          )}
        </div>
        
        <div className="card">
          {loading ? (
            <div>loading...</div>
          ) : (
            <div>
                <a 
                  href={`https://dictionary.cambridge.org/vi/dictionary/english/${word}?q=${word}`}
                  target="_blank" 
                  rel="noreferrer"
                  >
                  <h1>{word}</h1>
                </a>
              {words.map(word => 
              <div>
                  {words.length ? <h3>{word['pronunciation']['text']} </h3> : <p>waiting...</p>}
                  {words.length 
                    ? <p className="description">{word['definitions'][0]['definition']} </p>
                    : <p>waiting...</p>
                  }
                
              </div>)}
            </div>
          )}
        </div>

    </div>
  );
}

export default FlashCardTemp;