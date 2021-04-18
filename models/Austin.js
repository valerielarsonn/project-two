const mongoose = require("mongoose");

const austinSchema = new mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    hours: { type: String, required: true},
    daily: { type: String, required: true},
    monthly: Boolean,
    imageUrl: String,
    review: {
        reviewer: String,
        rating: Number,
        comments: String
    }
});

const Austin = mongoose.model("Austin", austinSchema);

module.exports = Austin;
