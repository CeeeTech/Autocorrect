const CorrectionHistory = require('../models/correctionHistoryModel');

async function getCorrectionHistories(req, res) {
    try {
        const correctionHistories = await CorrectionHistory.find();
        res.json({ correctionHistories });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getCorrectionHistories
};
