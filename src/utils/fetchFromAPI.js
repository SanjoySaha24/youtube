import axios from ' axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
  
    //'f7db8f8673msh474f9dd9e5240cdp1d269cjsn67bcbe7f36cd'

    export const fetchFromAPI = async (url) => {
     const {data} = await axios.get(`${BASE_URL}/${url}`, options);

     return data;
    }