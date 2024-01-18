import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
const NavBarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-bar-container">
        <Navbar.Brand href="#home">TECNM Campus Pachuca</Navbar.Brand>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Items</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mis Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cerrar sesión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBarComponent;
