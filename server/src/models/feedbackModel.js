const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback_type: { type: String, enum: ['corrective', 'positive', 'improvement'], required: true },
  feedback_text: { type: String, required: true },
  correction_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Correction' }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
