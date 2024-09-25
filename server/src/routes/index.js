const express = require('express');
const openaiRoutes = require('./openaiRoutes');

const router = express.Router();

router.use('/auth', openaiRoutes);

module.exports = router;
