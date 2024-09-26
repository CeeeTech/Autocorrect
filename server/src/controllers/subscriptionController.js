const Subscription = require('../models/subscriptionModel');

async function createSubscription(req, res) {
    try {
        const { user_id, plan_id, start_date, end_date, status } = req.body;
        const subscription = new Subscription({ user_id, plan_id, start_date, end_date, status });
        await subscription.save();
        res.status(201).json({ message: 'Subscription created', subscription });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getSubscriptions(req, res) {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function updateSubscription(req, res) {
    try {
        const { user_id, plan_id, start_date, end_date, status } = req.body;
        const subscription = await Subscription.findByIdAndUpdate(req.params.id, { user_id, plan_id, start_date, end_date, status });
        res.status(200).json({ message: 'Subscription updated', subscription });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function deleteSubscription(req, res) {
    try {
        await Subscription.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Subscription deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createSubscription,
    getSubscriptions,
    updateSubscription,
    deleteSubscription
};
