const mongoose = require('mongoose');

const subscriptionDetailSchema = new mongoose.Schema({
  plan_name: { type: String, required: true },
  plan_price: { type: Number, required: true },
  duration: { type: String, enum: ['monthly', 'yearly'], required: true },
  currency: { type: String, required: true },
  allowed_upload_types: { type: [String], required: true },
  max_documents: { type: Number, required: true },
  max_corrections: { type: Number, required: true },
  auto_renewal: { type: Boolean, default: false }
}, { timestamps: true });

const SubscriptionDetail = mongoose.model('SubscriptionDetail', subscriptionDetailSchema);
module.exports = SubscriptionDetail;
