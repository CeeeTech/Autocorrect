const axios = require('axios');

// Asynchronous function to handle the API request
async function getCorrectedText(text) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: text,
      model: 'text-davinci-003',
      max_tokens: 100
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data.choices[0].text;
  } catch (error) {
    throw new Error('Error generating response');
  }
}

// Controller function to handle autocorrect requests
async function autocorrect(req, res) {
  const { text } = req.body;
  try {
    const correctedText = await getCorrectedText(text);
    res.json({ correctedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  autocorrect
};
