import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../img/alpina.jpeg';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <div className="container-fluid">
        <Navbar.Brand href="#" className="text-center w-100">
          <img
            src={logo}
            alt="Logo"
            width="90" 
            height="80" 
            className="d-inline-block align-text-top"
          />
          Alpina Equipamentos Industriais
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
