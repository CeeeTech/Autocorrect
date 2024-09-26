const express = require('express');
const { createWritingType, getWritingTypes, updateWritingType, deleteWritingType } = require('../controllers/writingTypeController');

const router = express.Router();

router.post('/writing_types', createWritingType);
router.get('/writing_types', getWritingTypes);
router.put('/writing_types/:id', updateWritingType);
router.delete('/writing_types/:id', deleteWritingType);

module.exports = router;
 
