const mongoose = require("mongoose");

const newyorkSchema = new mongoose.Schema({
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

const NewYork = mongoose.model("NewYork", newyorkSchema);

module.exports = NewYork;
