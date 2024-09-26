const mongoose = require('mongoose');

const gradeLevelSchema = new mongoose.Schema({
  grade_level_name: { type: String, required: true }
}, { timestamps: true });

const GradeLevel = mongoose.model('GradeLevel', gradeLevelSchema);
module.exports = GradeLevel;
