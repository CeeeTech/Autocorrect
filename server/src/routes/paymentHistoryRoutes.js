const express = require('express');
const paymentHistoryController = require('../controllers/paymentHistoryController');

const router = express.Router();

router.get('/api/payment-history', paymentHistoryController.getPaymentHistories);

module.exports = router;
