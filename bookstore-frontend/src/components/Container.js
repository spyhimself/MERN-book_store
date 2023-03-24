import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

function Container({ children }) {
  return <MDBContainer className="my-5 mb-5 px-xl-5 px-md-2 justify-content-center" style={{ minWidth: "100%" }}>{children}</MDBContainer>;
}

export default Container;
