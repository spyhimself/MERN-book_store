import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBSpinner,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect } from "react";
import { BookContext } from "../../../context/BookContext";
import "../../../css/card.css";

function Books() {
  const bookContext = useContext(BookContext);

  useEffect(() => {
    if (!bookContext.books) bookContext.loadBooks();
  }, [bookContext]);

  const cards = (books) =>
    books.map((book, index) => (
      <MDBCard
        alignment="center"
        style={{ width: "210px", minHeight: "100%", cursor: "pointer" }}
        className="m-2 mb-4 rounded-0"
        key={index}
      >
        <MDBCardImage
          className="rounded-0"
          src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
          alt={book.name}
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>{book.name}</MDBCardTitle>
          <MDBCardText>{book.description}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ));

  return (
    <MDBContainer fluid>
      <div
        className="d-flex flex-wrap ms-auto justify-content-sm-start justify-content-center"
        style={{ minHeight: "50vh", maxWidth: "1000px" }}
      >
        {!bookContext.books ? (
          <MDBSpinner
            role="status"
            className="m-auto"
            style={{ color: "#362222" }}
          >
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        ) : (
          cards(bookContext.books)
        )}
      </div>
    </MDBContainer>
  );
}

export default Books;
