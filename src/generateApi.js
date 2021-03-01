export const generateItem = async(word, imageUrl, meaning, color) => {
  // setIsGenerating(true);
  const apiUrl = 'https://api.make.cm/make/t/964d132b-0be6-47f3-ba74-41f94bb35bc1/sync';
  const params = {
    size: 'A4',
    format: 'pdf',
    data: {
      word, imageUrl, meaning, color
    }
  };

  const { resultUrl } = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-MAKE-API-KEY': 'HsB5+CDZdrs8GOMMG449IkxuxCqkiPCjbQAbZoDv'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

  return resultUrl;
  // setGenerated(resultUrl);
  // setIsGenerating(false);
};