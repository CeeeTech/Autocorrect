const mongoose = require('mongoose');

const paymentHistorySchema = new mongoose.Schema({
  payment_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Payment' },
  status: { type: String, required: true },
  date_modified: { type: Date, required: true }
}, { timestamps: true });

const PaymentHistory = mongoose.model('PaymentHistory', paymentHistorySchema);
module.exports = PaymentHistory;
