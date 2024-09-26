const express = require('express');
const openaiRoutes = require('./openaiRoutes');
const billingHistoryRoutes = require('./billingHistoryRoutes');
const correctionRoutes = require('./correctionRoutes');
const errorLogRoutes = require('./errorLogRoutes');
const gradeLevelRoutes = require('./gradeLevelRoutes');
const paymentRoutes = require('./paymentRoutes');
const writingTaskRoutes = require('./writingTaskRoutes');
const correctionHistoryRoutes = require('./correctionHistoryRoutes');
const feedbackRoutes = require('./feedbackRoutes');
const invoiceRoutes = require('./invoiceRoutes');
const paymentHistoryRoutes = require('./paymentHistoryRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const subscriptionDetailRoutes = require('./subscriptionDetailRoutes');
const writingTypeRoutes = require('./writingTypeRoutes');
const documentRoutes = require('./documentRoutes');

const router = express.Router();

router.use('/auth', openaiRoutes);
router.use('/billing-history', billingHistoryRoutes);
router.use('/correction', correctionRoutes);
router.use('/error-log', errorLogRoutes);
router.use('/grade-levels', gradeLevelRoutes);
router.use('/payment', paymentRoutes);
router.use('/writing-tasks', writingTaskRoutes);
router.use('/correction-history', correctionHistoryRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/invoice', invoiceRoutes);
router.use('/payment-history', paymentHistoryRoutes);
router.use('/subscription', subscriptionRoutes);
router.use('/subscription-detail', subscriptionDetailRoutes);
router.use('/writing-type', writingTypeRoutes);
router.use('/document', documentRoutes);

module.exports = router;