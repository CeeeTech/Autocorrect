const express = require('express');
const saplingaiController = require('../controllers/saplingaiController');

const router = express.Router();

// Route to handle autocorrect requests
router.post('/correct-text', saplingaiController.correctText);

module.exports = router;
