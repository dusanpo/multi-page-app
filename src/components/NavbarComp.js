import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Multi Page App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/main"}>
                Drinks
              </Nav.Link>
              <Nav.Link as={Link} to={"actressesMain"}>
                Actresses
              </Nav.Link>
              <Nav.Link as={Link} to={"/toDoMain"}>
                To Do List
              </Nav.Link>
              <Nav.Link as={Link} to={"/loremIpsumMain"}>
                Lorem Ipsum
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
