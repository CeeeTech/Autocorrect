const express = require('express');

const subscriptionDetailController = require('../controllers/subscriptionDetailController');

const router = express.Router();

router.get('/api/subscription-details', subscriptionDetailController.getSubscriptionDetails);
router.post('/api/subscription-details', subscriptionDetailController.createSubscriptionDetail);
router.put('/api/subscription-details/:id', subscriptionDetailController.updateSubscriptionDetail);
router.delete('/api/subscription-details/:id', subscriptionDetailController.deleteSubscriptionDetail);

module.exports = router;
