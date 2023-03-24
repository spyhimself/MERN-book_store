import { MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';

function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center text-center text-lg-start mt-auto p-3" style={{ backgroundColor: "#3C2A21" }}>
      <MDBTypography tag='em' style={{ color: "#FFF8EA" }}>Created by Youness Sadouni and Tarar Ayman</MDBTypography>
    </footer>
  );
}

export default Footer;