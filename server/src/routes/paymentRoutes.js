const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/api/payment', paymentController.createPayment);
router.get('/api/payment', paymentController.getPayments);

module.exports = router;
