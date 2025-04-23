const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://via.placeholder.com/150"
    },
    prix: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    grammage: {
        type: String,
        required: false
    },
    ingredient: {
        type: [String],
        required: false
    },
    ustensible: {
        type: [String],
        required: false
    },
    temps: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
