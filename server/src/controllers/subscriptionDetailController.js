const subscriptionDetails = require('../models/subscriptionDetailModel');

async function createSubscriptionDetail(req, res) {
    try {
        const { subscription_id, user_id, start_date, end_date, status } = req.body;
        const subscription_detail = new subscriptionDetails({ subscription_id, user_id, start_date, end_date, status });
        await subscription_detail.save();
        res.status(201).json({ message: 'Subscription Detail created', subscription_detail });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getSubscriptionDetails(req, res) {
    try {
        const subscription_details = await subscriptionDetails.find();
        res.status(200).json(subscription_details);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function updateSubscriptionDetail(req, res) {
    try {
        const { subscription_id, user_id, start_date, end_date, status } = req.body;
        const subscription_detail = await subscriptionDetails.findByIdAndUpdate(req.params.id, { subscription_id, user_id, start_date, end_date, status });
        res.status(200).json({ message: 'Subscription Detail updated', subscription_detail });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function deleteSubscriptionDetail(req, res) {
    try {
        await subscriptionDetails.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Subscription Detail deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createSubscriptionDetail,
    getSubscriptionDetails,
    updateSubscriptionDetail,
    deleteSubscriptionDetail
};
