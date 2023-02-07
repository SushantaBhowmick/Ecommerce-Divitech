const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type:String,
        required:true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category"
    },
    brand: {
        type: String,
        required:true
        // enum: ['Apple', 'Samsung', 'Lenovo'],
    },
    quantity: {
        type:Number,
        required:true
    },
    sold: {
        type: Number,
        default: 0,
        select:false,
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        required:true,
        // enum: ['Black', 'Brown', 'Red'],
    },
    ratings: [{
        star: Number,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }],
},
    { timestamps: true }
)

//Export The Model
module.exports = mongoose.model("Product", productSchema);