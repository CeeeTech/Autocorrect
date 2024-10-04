const axios = require('axios');
const OpenAI = require('openai');
require('dotenv').config();

// Get the Sapling and OpenAI API keys from environment variables
const saplingApiKey = process.env.SAPLING_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;
const saplingUrl = 'https://api.sapling.ai/api/v1/edits';
const session_id = process.env.COOKIE_KEY;

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

// Correct the text using Sapling AI and ChatGPT
async function correctText(req, res) {
  const { text } = req.body;

  try {
    // Step 1: Get edits from Sapling AI
    const saplingResponse = await axios.post(saplingUrl, {
      key: saplingApiKey,
      session_id: session_id,
      text,
    });
    const { data: saplingData } = saplingResponse;

    // Step 2: Process Sapling AI's edits to create bolded and corrected version
    let modifiedText = text;
    saplingData.edits.forEach((edit) => {
      const { start, end, replacement } = edit;
      const incorrect = modifiedText.slice(start, end);
      modifiedText =
        modifiedText.slice(0, start) +
        `**${incorrect}** ((${replacement}))` +
        modifiedText.slice(end);
    });

    // Step 3: Process Sapling AI's edits to create just the corrected version without any stylings
    let correctedText = text;
    saplingData.edits.forEach((edit) => {
      const { start, end, replacement } = edit;
      correctedText =
        correctedText.slice(0, start) +
        replacement +
        correctedText.slice(end);
    });

    // Step 4: Request ChatGPT to format the response
    const chatGptPrompt = `Make the following text grammatically, spelling-wise, and punctuation-wise correct. Bold the given incorrect words, phrases, or punctuation, and provide the corrected version in double brackets ((example)) next to them. If any word or punctuation is missing in the given text, wrap it inside ##. Here is the text: ${modifiedText}`;

    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: chatGptPrompt }],
    });

    const chatGptCorrectedText = openaiResponse.choices[0].message.content;

    // Step 5: Generate descriptive feedback from ChatGPT with grammar explanations
    const feedbackPrompt = `Based on the following Sapling AI edits, provide a detailed explanation of the grammatical errors, referencing English grammar rules. Here are the edits: ${JSON.stringify(saplingData.edits)}. The original text is: ${text}. Please write a coherent paragraph explaining the errors, why they are incorrect, and suggestions for improvement, focusing on the grammar aspects.`;

    const feedbackResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: feedbackPrompt }],
    });

    const descriptiveFeedback = feedbackResponse.choices[0].message.content;

    // Step 6: Return the final corrected text and feedback
    res.status(200).json({
      originalText: text,
      correctedText: correctedText,
      modifiedText: chatGptCorrectedText,
      feedback: descriptiveFeedback,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing the text.' });
  }
}

module.exports = {
  correctText,
};
