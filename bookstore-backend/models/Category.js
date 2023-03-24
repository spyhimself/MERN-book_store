const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please enter category name."] },
  description: { type: String },
},
{ collection: "Category" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
