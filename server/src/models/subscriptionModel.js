const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  plan_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'SubscriptionDetail' },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  last_payment_date: { type: Date },
  next_payment_date: { type: Date },
  subscription_status: { type: String, enum: ['active', 'inactive', 'canceled'], required: true },
  payment_status: { type: String, enum: ['completed', 'failed', 'pending'], required: true },
  duration: { type: String, enum: ['monthly', 'yearly'], required: true },
  next_billing_date: { type: Date, required: true }
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;
