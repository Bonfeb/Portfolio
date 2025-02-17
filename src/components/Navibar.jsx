import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logoBg from "../assets/images/logoBg.jpg";

function Navibar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" fixed="top" variant="dark" style={{background: 'linear-gradient(180deg, rgb(63, 77, 60), rgb(25, 52, 32))'}}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-uppercase">
            Bonfeb
          </Navbar.Brand>
          <Button variant="dark" className="navbar-toggler" onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Navbar.Collapse id="navbarResponsive" className="d-none d-lg-flex">
            <Nav className="ms-auto text-uppercase">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for Mobile Navigation */}
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ background: "linear-gradient(180deg,rgb(100, 10, 7),rgb(127, 123, 6), rgb(39, 125, 12))" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-100 text-center text-uppercase text-light">Bonfeb</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="text-center w-100">
    <img 
      src={logoBg}  // Replace with your image path
      alt="Bonfeb Logo"
      className="img-fluid rounded-circle mt-2"
      style={{ width: "150px", height: "150px", objectFit: "cover", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)"}}
    />
  </div>
        <Offcanvas.Body className="d-flex flex-column align-items-center">
          <Nav className="d-flex flex-column align-items-center text-uppercase w-100">
            <Nav.Link as={Link} className="text-light my-2" to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} className="text-light my-2" to="/skills" onClick={handleClose}>Skills</Nav.Link>
            <Nav.Link as={Link} className="text-light my-2" to="/resume" onClick={handleClose}>Resume</Nav.Link>
            <Nav.Link as={Link} className="text-light my-2" to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navibar;
