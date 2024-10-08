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

    // Step 2: Apply Sapling edits
    let saplingCorrectedText = applySaplingEdits(text, saplingData.edits);

    // // Step 3: Run post-processing with OpenAI to detect additional issues
    // const correctionPrompt = `Please proofread the following text for any spelling, punctuation, and capitalization errors: ${saplingCorrectedText}`;
    // const feedbackResponse = await openai.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [{ role: "user", content: correctionPrompt }],
    // });

    // const fullyCorrectedText = feedbackResponse.choices[0].message.content.trim();

    // Step 5: Generate detailed feedback for students
    const feedbackPrompt = `Based on the following Sapling AI edits and OpenAI corrections, provide a detailed explanation of the grammatical errors, spelling mistakes, and other issues. The original text is: "${text}". The Sapling corrections are: ${JSON.stringify(saplingData.edits)}. The final corrected text is: "${saplingCorrectedText}". Explain why each correction was necessary.`;
    const detailedFeedbackResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: feedbackPrompt }],
    });

    const detailedFeedback = detailedFeedbackResponse.choices[0].message.content;

    // Step 6: Return the final result
    res.status(200).json({
      originalText: text,
      saplingCorrectedText,
      // fullyCorrectedText,
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

// Helper function to merge Sapling and OpenAI corrections with formatting
function mergeCorrectionsWithFormatting(originalText, fullyCorrectedText) {
  let formattedText = originalText;

  const originalWords = originalText.split(/\b/);  // Split by word boundaries
  const words = fullyCorrectedText.split(/\b/);      // Same split for OpenAI corrections

  let formattedArray = [];
  let originalIndex = 0;

  // Loop through the OpenAI corrected words and compare them with the original
  for (let i = 0; i < words.length; i++) {
    const openaiWord = words[i].trim();
    const originalWord = originalWords[originalIndex] ? originalWords[originalIndex].trim() : null;

    // Case 1: Added punctuation or new words from OpenAI
    if (openaiWord && !originalWord) {
      formattedArray.push(`####${openaiWord}####`);
    } 
    // Case 2: OpenAI corrected word that differs from the original
    else if (openaiWord && originalWord && openaiWord !== originalWord) {
      formattedArray.push(`**${originalWord}** ((${openaiWord}))`);
      originalIndex++;
    } 
    // Case 3: Words are the same, no correction
    else if (openaiWord === originalWord) {
      formattedArray.push(openaiWord);
      originalIndex++;
    }
  }

  // Join the array back into a string
  formattedText = formattedArray.join(' ');

  return formattedText;
}

module.exports = {
  correctText,
};
