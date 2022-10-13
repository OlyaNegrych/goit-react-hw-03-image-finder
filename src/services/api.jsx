import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '29443813-ca22e65ccc725dfd305ed5d5a';

export const getImages = async ({ searchQuery, page }) => {
  const options = {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  const response = await axios.get('/', options);
  return response.data;
};



// async function fetchImages(name) {
//   const url = `https://pixabay.com/api/?key=${KEY_Pixabay}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;
//   const response = await axios.get(url);
//   const images = await response.data;
//   if (name === '') {
//     Notiflix.Notify.info(`Please, enter the text to find images.`);
//     loadMoreBtn.classList.add('is-hidden');
//     return;
//   }

//   return images;
// }