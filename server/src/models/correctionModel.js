const mongoose = require('mongoose');

const correctionSchema = new mongoose.Schema({
  document_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Document' },
  correction_text: { type: String, required: true },
  correction_status: { type: String, enum: ['completed', 'pending'], required: true },
  correction_date: { type: Date, required: true },
  feedback_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }
}, { timestamps: true });

const Correction = mongoose.model('Correction', correctionSchema);
module.exports = Correction;
