const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  issue_date: { type: Date, required: true },
  due_date: { type: Date, required: true },
  total_amount: { type: Number, required: true },
  status: { type: String, enum: ['paid', 'unpaid', 'overdue'], required: true },
  subscription_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subscription' },
  payment_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Payment' }
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
