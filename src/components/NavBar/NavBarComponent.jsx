import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const NavBarComponent = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name);
  }, [name]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-bar-container">
        <Navbar.Brand onClick={()=>navigate("/")}>TECNM Campus Pachuca</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/")}>Items</Nav.Link>
            <Nav.Link onClick={()=>navigate("/acercade")}>Acerca de</Nav.Link>
            {name && (
              <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My perfil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Mis Items
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setName("")
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
