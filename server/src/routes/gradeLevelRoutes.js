const express = require('express');
const gradeLevelController = require('../controllers/gradeLevelController');

const router = express.Router();

router.get('/api/grade-levels', gradeLevelController.getGradeLevels);
router.post('/api/grade-levels', gradeLevelController.createGradeLevel);

module.exports = router;
