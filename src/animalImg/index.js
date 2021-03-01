
export const fetchPhotos = async() => {
  const BASE_URL = 'https://api.flickr.com/services/rest/';
  const API_KEY = '0104be4ab6ed6e11994df43528078c31';
  const PHOTOSET_ID = '72157718300400733';
  const USER_ID = '192219400@N08';

  const flickrURL = `${BASE_URL}?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${PHOTOSET_ID}&user_id=${USER_ID}&extras=url_o&format=json&nojsoncallback=1`;
  const response = await fetch(flickrURL);
  const animalPhotos = await response.json();
  return animalPhotos;
}

export const fetchWord = async(word) => {
  const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
  const wordDataJson = await result.json();

  const wordData = {
    audio: wordDataJson[0]['phonetics'][0]['audio'],
    meaning: wordDataJson[0]['meanings'][0]['definitions'][0]['definition'],
  };

  return wordData;
}