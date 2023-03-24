import http from "./http-common";

const getBooks = async () => await http.get("/book/all");
const getBookById = async (id) => await http.get("/book/id/" + id);
const getBookByName = async (name) => await http.get("/book/name/" + name);
const deleteBook = async (id) => await http.delete("/book/delete/" + id);
const addBook = async (book) => await http.post("/book/add", book);
const updateBook = async (book) => await http.put("/book/update", book);

export {
  getBooks,
  getBookById,
  getBookByName,
  deleteBook,
  addBook,
  updateBook,
};
