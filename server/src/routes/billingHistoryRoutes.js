const express = require('express');
const billingHistoryController = require('../controllers/billingHistoryController');

const router = express.Router();

router.get('/api/billing-history', billingHistoryController.getBillingHistories);

module.exports = router;
