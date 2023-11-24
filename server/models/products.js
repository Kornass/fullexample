const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  // _id:34857234985062345
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  category_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
});
module.exports = mongoose.model("product", productSchema);
