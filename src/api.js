export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39899011-b77b3552b8ef0b4d082b172dc';
export const options = {
  params: { 
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
