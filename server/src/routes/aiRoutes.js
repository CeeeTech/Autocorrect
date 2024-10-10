const express = require('express');
const aiController = require('../controllers/aiController');

const router = express.Router();

// Route to handle autocorrect requests
router.post('/correct-text', aiController.correctText);
router.post('/correct-text-languagetool', aiController.LanguageToolCheckSpelling);

module.exports = router;
