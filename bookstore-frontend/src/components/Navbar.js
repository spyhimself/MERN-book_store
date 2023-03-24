import "../css/navbar.css";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useMatch, useNavigate } from "react-router-dom";

function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();

  const linkState = [
    useMatch("/"),
    useMatch("books"),
    useMatch("auth/books"),
    useMatch("auth/books/add"),
  ];

  return (
    <MDBNavbar
      expand="xl"
      className="shadow-0 px-xl-5 px-2 py-3 align-items-center"
    >
      <MDBContainer>
        <MDBNavbarBrand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Book Store
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mb-2 mb-md-0 w-auto align-items-center">
            <MDBNavbarItem>
              <MDBNavbarLink
                aria-current="page"
                onClick={() => navigate("/")}
                active={linkState[0]}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => navigate("/books")}
                active={linkState[1]}
              >
                Books
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => navigate("/auth/books")}
                active={linkState[2]}
              >
                Books List
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => navigate("/auth/books/add")}
                active={linkState[3]}
              >
                Add Book
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav className="ms-auto justify-content-end w-auto">
            <MDBNavbarItem className="mx-md-5 mx-2 mb-xl-0 mb-2">
              <form
                className="d-flex input-group w-auto"
                style={{ width: "300px" }}
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search book"
                  aria-label="Search"
                />
                <MDBBtn
                  className="shadow-0"
                  style={{ backgroundColor: "#935900" }}
                >
                  Search
                </MDBBtn>
              </form>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBBtn
                outline
                style={{
                  color: "#935900",
                  border: 0,
                  minWidth: "150px",
                  width: "100%",
                }}
              >
                <MDBIcon fas icon="user-alt" /> Login
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
