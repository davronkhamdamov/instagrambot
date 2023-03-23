const axios = require('axios');

const video = async function (url) {
  try {
    const options = {
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
      params: {
        url: url,
      },
      headers: {
        'X-RapidAPI-Key': '5a8d9c1565msh8605506e40e6e37p1433a0jsn348300d0ccd9',
        'X-RapidAPI-Host':
          'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
      },
    };

    const axios1 = await axios.request(options);
    return axios1;
  } catch (error) {
    console.log(error);
  }
};
module.exports = video;
