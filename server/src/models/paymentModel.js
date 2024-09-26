const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  billing_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'BillingHistory' },
  payment_status: { type: String, enum: ['completed', 'failed', 'pending'], required: true },
  transaction_id: { type: String, required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['credit card', 'PayPal', 'bank transfer'], required: true }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
