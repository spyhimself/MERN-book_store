/* ----------------------------------------------------- Book Services ----------------------------------------------------- */

const Book = require("../models/Book");

const getAllBooks = async () => {
  return await Book.find().populate("category");
};

const getBookById = async (id) => {
  return await Book.findById(id);
}

const getBooksByName = async (name) => {
  return await Book.find({ "name" : name });
}

const createBook = async (book) => {
  return await Book.create(book);
}

const deleteBookById = async (id) => {
  return await Book.findByIdAndDelete(id);
}

const updateBook = async (book) => {
  return await Book.findByIdAndUpdate(book._id, book);
}

/* ----------------------------------------------------- Categorie Services ----------------------------------------------------- */

const Category = require("../models/Category");

const getAllCategories = async () => {
  return await Category.find();
}

const createCategory = async (category) => {
  return await Category.create(category);
}

const deleteCategoryById = async (id) => {
  return Category.findByIdAndDelete(id);
}

/* ----------------------------------------------------- Exports ----------------------------------------------------- */

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
  updateBook,
  getBooksByName,
  getAllCategories,
  createCategory,
  deleteCategoryById,
}