const express = require('express');
const writingTaskController = require('../controllers/writingTaskController');

const router = express.Router();

router.post('/api/writing-tasks', writingTaskController.createWritingTask);

module.exports = router;
