const BillingHistory = require('../models/billingHistoryModel');

async function getBillingHistories(req, res) {
    try {
        const billingHistories = await BillingHistory.find();
        res.json({ billingHistories });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getBillingHistories
};
