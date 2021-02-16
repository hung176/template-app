
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