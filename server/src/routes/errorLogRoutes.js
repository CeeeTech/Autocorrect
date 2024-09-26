const express = require('express');
const errorLogController = require('../controllers/errorLogController');

const router = express.Router();

router.post('/api/error-log', errorLogController.createErrorLog);
router.get('/api/error-log', errorLogController.getErrorLogs);

module.exports = router;