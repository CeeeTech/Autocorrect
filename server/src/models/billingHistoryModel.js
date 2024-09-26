const mongoose = require('mongoose');

const billingHistorySchema = new mongoose.Schema({
  subscription_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subscription' },
  payment_date: { type: Date, required: true },
  amount: { type: Number, required: true },
  payment_status: { type: String, enum: ['completed', 'failed', 'pending'], required: true },
  last_payment_date: { type: Date },
  next_payment_date: { type: Date },
  card_holder_name: { type: String },
  masked_card_number: { type: String },
  expiry_date: { type: String },
  invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }
}, { timestamps: true });

const BillingHistory = mongoose.model('BillingHistory', billingHistorySchema);
module.exports = BillingHistory;
