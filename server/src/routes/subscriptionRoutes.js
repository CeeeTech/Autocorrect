const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');

const router = express.Router();

router.post('/api/subscription', subscriptionController.createSubscription);
router.get('/api/subscription', subscriptionController.getSubscriptions);
router.put('/api/subscription/:id', subscriptionController.updateSubscription);
router.delete('/api/subscription/:id', subscriptionController.deleteSubscription);

module.exports = router;
