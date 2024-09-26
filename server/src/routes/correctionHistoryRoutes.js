const express = require('express');
const correctionHistoryController = require('../controllers/correctionHistoryController');

const router = express.Router();

router.get('/api/correction-history', correctionHistoryController.getCorrectionHistories);

module.exports = router;
