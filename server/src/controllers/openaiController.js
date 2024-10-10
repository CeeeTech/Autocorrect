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
    // Call the OpenAI API asynchronously with a specific formatting request
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { 
          role: "system", 
          content: "You are a grammar correction tool that highlights grammatical and spelling errors by bolding the incorrect words and providing the corrected version in brackets next to them." 
        },
        {
          role: "user",
          content: `Make the following text grammatically, spelling-wise, and punctuation-wise correct. Bold the given incorrect words, phrases, or punctuation, and provide the corrected version in double brackets ((example)) next to them. If any word or punctuation is missing in the given text, wrap it inside ##: ex: provided text - "my name lakshani", output - "**my** ((My)) name ##is## **lakshani** ((Lakshani)) ##.##" Do not add any explanations or extra text ${text}` 
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    // Extract and return the corrected text directly
    const correctedText = response.choices[0].message.content.trim();

    // Send the corrected and formatted text back without additional escape characters
    res.status(200).send({correctedText});
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Error processing the text');
  }
}

module.exports = {
  correctText,
};
