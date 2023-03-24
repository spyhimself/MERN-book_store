const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter book name."] },
    description: { type: String },
    isbn: { type: String, required: [true, "Please enter isbn."] },
    author: { type: String, required: [true, "Please enter author name."] },
    editor: { type: String, required: [true, "Please enter editor name."] },
    pubDate: { type: Date, default: Date.now() },
    img: { type: String },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Please chose category."],
    },
  },
  { collection: "Book" }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
