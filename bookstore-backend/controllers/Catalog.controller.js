const catalogService = require("../services/Catalog.service");

/* ----------------------------------------------------- Books Controllers ----------------------------------------------------- */

const getBooks = async (req, res) => {
  try {
    const result = await catalogService.getAllBooks();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await catalogService.getBookById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "book not found !" });
  }
};

const getBookByName = async (req, res) => {
  try {
    const name = req.params.name;
    const result = await catalogService.getBookByName(name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "book not found !" });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await catalogService.deleteBookById(id);
    console.log(result);
    return res.status(200).json({ msg: "Book deleted." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addBook = async (req, res) => {
  try {
    const book = req.body;
    const result = await catalogService.createBook(book);
    return res.status(201).json({ msg: "Book created." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const book = req.body;
    const result = await catalogService.updateBook(book);
    return res.status(201).json({ msg: "Book updated." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

/* ----------------------------------------------------- Categories Controllers ----------------------------------------------------- */

const getCategories = async (req, res) => {
  try {
    const result = await catalogService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await catalogService.deleteCategoryById(id);
    return res.status(200).json({ msg: "Category deleted." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await catalogService.createCategory(category);
    return res.status(201).json({ msg: "Category created." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

/* ----------------------------------------------------- Exports ----------------------------------------------------- */

module.exports = {
  getBooks,
  getBookById,
  getBookByName,
  deleteBookById,
  addBook,
  updateBook,
  getCategories,
  addCategory,
  deleteCategoryById,
};
