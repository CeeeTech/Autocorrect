const Payment = require('../models/paymentModel');

async function createPayment(req, res) {
    try {
        const { billing_id, payment_status, transaction_id, amount, method } = req.body;
        const payment = new Payment({ billing_id, payment_status, transaction_id, amount, method });
        await payment.save();
        res.status(201).json({ message: 'Payment created', payment });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getPayments(req, res) {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createPayment,
    getPayments
};
