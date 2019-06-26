const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
  ],
  images: [{ type: String }],
  description: String
});

module.exports = Product = mongoose.model("product", ProductSchema);
