import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../../context/BookContext";
import "../../../css/table.css";

function BookList() {
  const bookContext = useContext(BookContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!bookContext.books) bookContext.loadBooks();
  }, [bookContext]);

  const booksTable = (books) => (
    <MDBTable responsive>
      <MDBTableHead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Isbn</th>
          <th scope="col">Author</th>
          <th scope="col">Editor</th>
          <th scope="col">Publication Date</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {books ? (
          books.map((book, index) => {
            return (
              <tr key={index}>
                <th scope="row">{book.name}</th>
                <td>{book.description}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td>{book.editor}</td>
                <td>{new Date(book.pubDate).toDateString()}</td>
                <td>{book.category.name}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <MDBBtn
                      floating
                      tag="a"
                      className="mx-2"
                      color="warning"
                      onClick={() => navigate("/auth/books/edit/" + book._id)}
                    >
                      <MDBIcon fas icon="pen" />
                    </MDBBtn>
                    <MDBBtn
                      floating
                      tag="a"
                      className="mx-2"
                      color="danger"
                      onClick={() => bookContext.delBook(book._id)}
                    >
                      {bookContext.actionLoading && book._id === bookContext.deletedBookId ? (
                        <MDBIcon fas icon="spinner" animate="spin" />
                      ) : (
                        <MDBIcon fas icon="trash-alt" />
                      )}
                    </MDBBtn>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </MDBTableBody>
    </MDBTable>
  );

  return (
    <MDBContainer style={{ maxWidth: "1200px" }}>
      <div className="d-flex flex-wrap" style={{ minHeight: "50vh" }}>
        {!bookContext.books ? (
          <MDBSpinner
            role="status"
            className="m-auto"
            style={{ color: "#362222" }}
          >
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        ) : (
          booksTable(bookContext.books)
        )}
      </div>
    </MDBContainer>
  );
}

export default BookList;
