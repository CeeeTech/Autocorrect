const axios = require('axios');
const OpenAI = require('openai');
const qs = require('qs');
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

    // Step 2: Apply Sapling edits
    let saplingCorrectedText = applySaplingEdits(text, saplingData.edits);

    // Step 3: Call OpenAI to correct any missing errors
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: "You are a grammar and punctuation correction tool. Your task is to only correct missing spelling, capitalization, or punctuation issues in the given text without changing the provided corrections and giving the fully corrected version without formatting." 
        },
        {
          role: 'user',
          content: `${saplingCorrectedText}`
        }
      ],
      max_tokens: 500,
      temperature: 0.3,
    });

    const gptCorrectedText = gptResponse.choices[0].message.content;

    // Step 4: Generate detailed feedback for students
    const feedbackPrompt = `Based on the following Sapling AI edits and OpenAI corrections, provide a detailed explanation of the grammatical errors, spelling mistakes, and other issues. The original text is: "${text}". The Sapling corrections are: ${JSON.stringify(saplingData.edits)}. The final corrected text is: "${gptCorrectedText}". Explain why each correction was necessary in a student-friendly way, with a point-wise breakdown.`;

    const detailedFeedbackResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: feedbackPrompt }],
    });

    const detailedFeedback = detailedFeedbackResponse.choices[0].message.content;

    // Step 5: Return the final result
    res.status(200).json({
      originalText: text,
      saplingCorrectedText,
      gptCorrectedText,
      detailedFeedback,
      saplingEdits: saplingData.edits,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing the text.' });
  }
}

// Helper function to apply Sapling edits
function applySaplingEdits(text, edits) {
  let modifiedText = text;
  let offset = 0;

  edits.forEach((edit) => {
    const { sentence_start, start, end, replacement } = edit;
    const adjustedStart = sentence_start + start + offset;
    const adjustedEnd = sentence_start + end + offset;
    const incorrectText = modifiedText.slice(adjustedStart, adjustedEnd);

    // Create the replacement with the desired formatting
    const correctedText = `**${incorrectText}** ((${replacement}))`;
    modifiedText = modifiedText.slice(0, adjustedStart) + correctedText + modifiedText.slice(adjustedEnd);

    // Update offset
    offset += correctedText.length - incorrectText.length;
  });

  return modifiedText;
}

module.exports = {
  correctText,
};
