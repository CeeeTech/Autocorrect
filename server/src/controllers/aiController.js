const axios = require('axios');
const OpenAI = require('openai');
const { diffWords } = require('diff'); // Import diff library
require('dotenv').config();

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Correct the text using Sapling AI and ChatGPT
async function correctText(req, res) {
  const { text } = req.body;

  try {
    // Step 1: Get edits from Sapling AI
    const saplingResponse = await axios.post('https://api.sapling.ai/api/v1/edits', {
      key: process.env.SAPLING_API_KEY,
      session_id: process.env.COOKIE_KEY,
      text,
    });

    const { data: saplingData } = saplingResponse;

    // Step 2: Apply Sapling edits
    let saplingCorrectedText = applySaplingEdits(text, saplingData.edits);
    const gptPrompt = `You are a grammar and punctuation correction tool. Your task is to only correct missing spelling, capitalization, or punctuation issues in the given text without changing the provided corrections and giving the fully corrected version without formatting.You are a grammar correction tool`;

    // Step 3: Call OpenAI for further corrections
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: gptPrompt },
        { role: 'user', content: saplingCorrectedText },
      ],
      max_tokens: 500,
      temperature: 0.3,
    });

    const gptCorrectedText = gptResponse.choices[0].message.content;

    // Step 4: Highlight the differences
    const highlightedText = highlightChanges(text, gptCorrectedText);

    // Step 5: Send response with results
    res.status(200).json({
      originalText: text,
      saplingCorrectedText,
      gptCorrectedText,
      highlightedText,
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

    const correctedText = `**${incorrectText}** ((${replacement}))`;
    modifiedText =
      modifiedText.slice(0, adjustedStart) + correctedText + modifiedText.slice(adjustedEnd);

    offset += correctedText.length - incorrectText.length;
  });

  return modifiedText;
}

// Highlight changes between original and corrected text
function highlightChanges(original, corrected) {
  const diff = diffWords(original, corrected); // Get word-level differences
  let result = '';

  diff.forEach((part) => {
    if (part.added) {
      result += `(( ${part.value.trim()} )) `; // Added text
    } else if (part.removed) {
      result += `**${part.value.trim()}** `; // Removed or changed text
    } else {
      result += `${part.value} `; // Unchanged text
    }
  });
  return result.trim();
}

module.exports = {
  correctText,
};
