import "../css/header.css";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";

function Header() {

  return (
    <header>
      <MDBContainer className="my-5">
        <MDBRow>
          <MDBCol size="lg" className="mb-5 mb-lg-0">
            <MDBTypography tag="h2" className="mb-2 text-center">
              Read More, Spend Less: Your Online Bookstore Destination.
            </MDBTypography>
            <MDBTypography tag="h5" className="text-center">
              Discover a World of Books at Your Fingertips - Shop, Read, and
              Save with Ease!
            </MDBTypography>
          </MDBCol>
          <MDBCol size="lg">
            <MDBRow>
              <MDBCol size="md" className="d-flex justify-content-center">
                <img
                  src={require("../img/header-img.jpg")}
                  className="figure-img img-fluid rounded shadow-3 mb-3"
                  alt="..."
                  style={{ maxHeight: "300px", width: "auto" }}
                />
              </MDBCol>
              <MDBCol size="md" className="d-flex justify-content-center">
                <div>
                  <MDBTypography tag="h5">
                    Get started creating video games using Unreal Engine and
                    learning the fundamentals of game development.
                  </MDBTypography>
                  <MDBTypography tag="small" className="mt-2">
                    Through hands-on, step-by-step tutorials, you will learn to
                    design engaging environments and a build solid foundation
                    for more complex games. Discover how to utilize the 3D game
                    design software behind the development of immensely popular
                    games for PC, console, and mobile.
                  </MDBTypography>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </header>
  );
}

export default Header;
