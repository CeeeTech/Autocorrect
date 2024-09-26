const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  document_name: { type: String, required: true },
  file_type: { type: String, enum: ['PDF', 'Word', 'Image'], required: true },
  upload_date: { type: Date, required: true },
  correction_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Correction' }
}, { timestamps: true });

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;
