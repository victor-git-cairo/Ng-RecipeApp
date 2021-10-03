const mongoose = require('mongoose');

// schema definition
const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

// model of schema definition

module.exports = mongoose.model('Post', postSchema);