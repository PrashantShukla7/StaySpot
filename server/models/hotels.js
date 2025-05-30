const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    city: {
        type: String,
        required: true,
    },
    rooms: {
        type: [String],
    },
    address: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true,
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("Hotel", hotelSchema);
