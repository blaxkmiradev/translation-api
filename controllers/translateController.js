const { googleTranslate } = require('../utils/googleTranslate');

const translateText = async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Please provide text and targetLang' });
  }

  try {
    const translatedText = await googleTranslate(text, targetLang);
    res.json({ translatedText });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
};

module.exports = { translateText };
