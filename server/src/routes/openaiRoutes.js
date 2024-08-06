const express = require('express');
const openaiController = require('../controllers/openaiController');

const router = express.Router();

// Route to handle autocorrect requests
router.post('/api/autocorrect', openaiController.autocorrect);

module.exports = router;
