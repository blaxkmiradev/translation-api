const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const API_KEY = process.env.GOOGLE_API_KEY;

const googleTranslate = async (text, target) => {
  const response = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    {
      q: text,
      target: target
    }
  );

  return response.data.data.translations[0].translatedText;
};

module.exports = { googleTranslate };
