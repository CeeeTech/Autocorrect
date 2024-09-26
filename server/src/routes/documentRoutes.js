const express = require('express');
const documentController = require('../controllers/documentController');

const router = express.Router();

router.post('/api/document', documentController.saveDocument);
router.get('/api/document', documentController.getDocuments);

module.exports = router;