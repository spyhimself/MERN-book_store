import React, { createContext, useState } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import {
  getBooks,
  getBookById,
  getBookByName,
  addBook,
  updateBook,
  deleteBook,
} from "../services/books-services";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const edit = useMatch("auth/books/edit/:id");
  const { id } = useParams();
  const { name } = useParams();
  const [bookState, setBookState] = useState({
    books: null,
    book: null,
    actionLoading: false,
    deletedBookId: "",
  });

  const sleep = async (s) => {
    await new Promise((r) => setTimeout(r, s));
  };

  const setBookName = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        name: e.target.value,
      },
    });
  };

  const setBookDescription = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        description: e.target.value,
      },
    });
  };

  const setBookIsbn = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        isbn: e.target.value,
      },
    });
  };

  const setBookAuthor = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        author: e.target.value,
      },
    });
  };

  const setBookEditor = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        editor: e.target.value,
      },
    });
  };

  const setBookpubDate = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        pubDate: new Date(e.target.value).toISOString(),
      },
    });
  };

  const setBookCategory = (e) => {
    setBookState({
      ...bookState,
      book: {
        ...bookState.book,
        category: e.target.value,
      },
    });
  };

  const loadBooks = async () => {
    const result = await getBooks();
    setBookState({
      books: result.data,
      book: null,
    });
  };

  const loadBookById = async () => {
    let book = {
      name: "",
      description: "",
      isbn: "",
      author: "",
      editor: "",
      pubDate: Date.now(),
      category: "DEFAULT",
    };
    if (id !== undefined) {
      const result = await getBookById(id);
      if (JSON.stringify(result.data) !== JSON.stringify(bookState.book)) {
        book = result.data;
      }
    }
    setBookState({
      books: null,
      book: book,
    });
  };

  const loadBookByName = async () => {
    const result = await getBookByName(name);
    setBookState({
      books: null,
      book: result.data,
    });
  };

  const saveBook = async () => {
    setBookState({
      ...bookState,
      actionLoading: true,
    });

    const result = edit
      ? await updateBook(bookState.book)
      : await addBook(bookState.book);

    await sleep(3000);

    setBookState({
      ...bookState,
      books: null,
      ...result.data,
      actionLoading: false,
    });

    await sleep(3000);

    navigate("/auth/books");
  };

  const delBook = async (id) => {
    setBookState({
      ...bookState,
      actionLoading: true,
      deletedBookId: id,
    });

    await deleteBook(id);

    await sleep(3000);

    setBookState({
      ...bookState,
      books: bookState.books.filter(book => book._id !== id),
      actionLoading: false,
      deletedBookId: "",
    });
  };

  return (
    <BookContext.Provider
      value={{
        ...bookState,
        setBookName,
        setBookDescription,
        setBookIsbn,
        setBookAuthor,
        setBookEditor,
        setBookpubDate,
        setBookCategory,
        loadBooks,
        loadBookById,
        loadBookByName,
        saveBook,
        delBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
