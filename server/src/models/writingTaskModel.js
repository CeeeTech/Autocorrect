const mongoose = require('mongoose');

const writingTaskSchema = new mongoose.Schema({
  correction_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Correction' },
  writing_type_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'WritingType' },
  grade_level_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'GradeLevel' }
}, { timestamps: true });

const WritingTask = mongoose.model('WritingTask', writingTaskSchema);
module.exports = WritingTask;
