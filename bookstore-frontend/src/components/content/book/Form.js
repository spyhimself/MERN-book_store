import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSpinner,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../context/BookContext";
import "../../../css/inputs.css";
import "../../../css/select.css";
import { CategoryContext } from "../../../context/CategoryContext";
import { useMatch } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function Form() {
  const edit = useMatch("auth/books/edit/:id");
  const bcontext = useContext(BookContext);
  const categoryContext = useContext(CategoryContext);
  const [state, setState] = useState({ pageLoaded: false, mode: null });

  useEffect(() => {
    if (state.mode !== edit || !state.pageLoaded) {
      bcontext.loadBookById();
      setState({ pageLoaded: true, mode: edit });
    }
    categoryContext.loadCategories();
  }, [edit, bcontext, categoryContext, state]);

  const formContent = () => {
    if (!bcontext.book || !categoryContext.categories)
      return (
        <MDBSpinner
          role="status"
          className="m-auto"
          style={{ color: "#362222" }}
        >
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      );

    return (
      <>
        <MDBRow className="m-4">
          <MDBCol>
            <MDBInput
              label="Name"
              id="typeText"
              type="text"
              value={bcontext.book.name}
              onChange={bcontext.setBookName}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <MDBTextArea
              label="Description"
              id="textAreaExample"
              rows={3}
              value={bcontext.book.description}
              onChange={bcontext.setBookDescription}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <MDBInput
              label="Isbn"
              id="typeText"
              type="text"
              value={bcontext.book.isbn}
              onChange={bcontext.setBookIsbn}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <MDBInput
              label="Author"
              id="typeText"
              type="text"
              value={bcontext.book.author}
              onChange={bcontext.setBookAuthor}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <MDBInput
              label="Editor"
              id="typeText"
              type="text"
              value={bcontext.book.editor}
              onChange={bcontext.setBookEditor}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <input
              className="form-control"
              type="date"
              value={new Date(bcontext.book.pubDate).toISOString().split("T")[0]}
              onChange={bcontext.setBookpubDate}
              style={{ background: "transparent" }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol>
            <select
              className="form-control"
              id="selectCategory"
              value={bcontext.book.category}
              onChange={bcontext.setBookCategory}
            >
              <option value="DEFAULT" hidden>
                Select category
              </option>
              {categoryContext.categories.map((category, index) => (
                <option value={category._id} key={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </MDBCol>
        </MDBRow>
        <MDBRow className="m-4">
          <MDBCol className="d-flex">
            <MDBBtn
              color="warning"
              className="mx-auto"
              onClick={bcontext.saveBook}
            >
              {edit ? "Save" : "Add"}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        {bcontext.msg !== undefined || bcontext.error !== undefined ? 
        <MDBRow className="m-4">
          <MDBCol className="d-flex">
            <Alert variant={bcontext.msg !== undefined ? "success" : "danger"} className="mx-auto">
              {bcontext.msg !== undefined ? bcontext.msg : bcontext.error}
            </Alert>
          </MDBCol>
        </MDBRow>
        :""
        }
      </>
    );
  };

  return (
    <MDBContainer>
      <MDBContainer
        style={{
          width: "400px",
          minHeight: "400px",
          border: "1px solid #362222",
          background: "#ffffffb0",
        }}
        className="py-3 rounded"
      >
        {formContent()}
      </MDBContainer>
    </MDBContainer>
  );
}

export default Form;
