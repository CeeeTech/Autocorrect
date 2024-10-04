const express = require('express');
const saplingaiController = require('../controllers/saplingaiController');

const router = express.Router();

// Route to handle autocorrect requests
router.post('/sapling-correct-text', saplingaiController.sapling_correctText);

module.exports = router;
