const Feedback = require('../models/feedbackModel');

async function createFeedback(req, res) {
    try {
        const { feedback_text, user_id } = req.body;
        const feedback = new Feedback({ feedback_text, user_id });
        await feedback.save();
        res.status(201).json({ message: 'Feedback created', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
  createFeedback
};
