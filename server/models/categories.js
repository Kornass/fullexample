const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
   // _id:1111
  category: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("category", categorySchema);
