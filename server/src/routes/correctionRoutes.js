const express = require('express');
const correctionController = require('../controllers/correctionController');

const router = express.Router();

router.post('/api/correction', correctionController.getCorrections);

module.exports = router;
