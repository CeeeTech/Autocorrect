const Correction = require('../models/correctionModel');

async function getCorrections(req, res) {
    try {
        const corrections = await Correction.find();
        res.json({ corrections });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getCorrections
};
