const PaymentHistory = require('../models/paymentHistoryModel');

async function getPaymentHistories(req, res) {
    try {
        const payment_histories = await PaymentHistory.find();
        res.status(200).json(payment_histories);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getPaymentHistories
};
