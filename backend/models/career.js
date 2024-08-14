// models/FormData.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formDataSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  phone: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false, // Optional field
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;
