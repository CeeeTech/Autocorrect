const mongoose = require('mongoose');

const writingTypeSchema = new mongoose.Schema({
  writing_type_name: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const WritingType = mongoose.model('WritingType', writingTypeSchema);
module.exports = WritingType;
