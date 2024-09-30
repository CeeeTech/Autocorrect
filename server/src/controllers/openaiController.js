const { OpenAI } = require('openai');
require('dotenv').config();

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Asynchronous function to handle the API request
async function correctText(req, res) {
  const { text } = req.body;

  try {
    // Call the OpenAI API asynchronously with an enhanced prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a grammar correction tool." },
        { role: "user", content: `Please correct the grammar and style of the following text, and for every correction, strike through the incorrect word and place the correct word next to it, and newly added words should be places inside (): "${text}"` }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    // Extract the corrected text from the response
    const correctedText = response.choices[0].message.content.trim();

    // Send the formatted corrected text back to the frontend
    res.status(200).json({ correctedText });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Error processing the text');
  }
};

module.exports = {
  correctText,
};
