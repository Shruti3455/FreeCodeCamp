import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { FaFreeCodeCamp } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="title_1">
            FreeCodeCamp
            <FaFreeCodeCamp />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox />
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/login">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
