const mongoose = require("mongoose");

const denverSchema = new mongoose.Schema({
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

const Denver = mongoose.model("Denver", denverSchema);

module.exports = Denver;
