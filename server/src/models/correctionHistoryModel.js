const mongoose = require('mongoose');

const correctionHistorySchema = new mongoose.Schema({
  correction_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Correction' },
  correction_version: { type: Number, required: true },
  date_modified: { type: Date, required: true }
}, { timestamps: true });

const CorrectionHistory = mongoose.model('CorrectionHistory', correctionHistorySchema);
module.exports = CorrectionHistory;
