const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    name: String,
    hobby: String,
    major: String,
    year: String,
    veteran: Boolean,
});

module.exports = mongoose.model('Response', responseSchema);