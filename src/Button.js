import React from 'react';
import axios from "axios";

export default function Button({ text, setGenerated }) {
  const generatePDF = () => {
    const url = "https://api.stg.make.cm/make/t/4b99e8f1-e0d3-4d20-82bb-e925715ef30f/sync";

    const headers = {
      'Content-Type': 'application/json',
      'X-MAKE-API-KEY': 'HsB5+CDZdrs8GOMMG449IkxuxCqkiPCjbQAbZoDv'
    };

    const data = {
      customSize: {
        width: 1000,
        height: 1000,
        unit: "px"
      },
      format: "pdf",
      fileName: "animal-flashcard",
      contentDisposition: "inline",
      data: {
        
      }
    };

    axios
        .post(url, data, {
          headers: headers
        })
        .then((response) => {
          const generatedPDF = response.data.resultUrl
          console.log(generatePDF);
          setGenerated(generatedPDF);
        })
        .catch((error) => {
          throw new Error(error);
        });
    
  }

  return (
    <div>
      <button
        onClick={generatePDF}
      >
        {text}
      </button>
    </div>
  );
}