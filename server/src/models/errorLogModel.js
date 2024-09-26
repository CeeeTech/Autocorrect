const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
  module: { type: String, required: true },
  error_message: { type: String, required: true },
  date_logged: { type: Date, required: true }
}, { timestamps: true });

const ErrorLog = mongoose.model('ErrorLog', errorLogSchema);
module.exports = ErrorLog;
