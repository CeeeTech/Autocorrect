const ErrorLog = require('../models/errorLogModel');

async function createErrorLog(req, res) {
    try {
        const { module, error_message } = req.body;
        const errorLog = new ErrorLog({ module, error_message });
        await errorLog.save();
        res.status(201).json({ message: 'Error Log created', errorLog });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getErrorLogs(req, res) {
    try {
        const errorLogs = await ErrorLog.find();
        res.json({ errorLogs });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createErrorLog,
    getErrorLogs
};
