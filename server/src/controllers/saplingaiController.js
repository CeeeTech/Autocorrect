const axios = require('axios');
require('dotenv').config();

// Get the Sapling API key from the environment variables
const apiKey = process.env.SAPLING_API_KEY;
const saplingUrl = 'https://api.sapling.ai/api/v1/edits';
const session_id = process.env.COOKIE_KEY;

async function sapling_correctText(req, res) {
  const { text } = req.body;
  try {
      const response = await axios.post(
          saplingUrl,
          {
              "key": apiKey,
              "session_id": session_id,
              text,
          },
      );
      const {status, data} = response;
      console.log({status});
      console.log(JSON.stringify(data, null, 4));
      res.status(200).json(data);
  } catch (err) {
      const { msg } = err.response.data;
      console.log({err: msg});
  }
}

module.exports = {
  sapling_correctText
};
