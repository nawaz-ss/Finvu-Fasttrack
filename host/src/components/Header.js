import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => handleClick("/")}>LMS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleClick("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => handleClick("/books")}>Books</Nav.Link>
        </Nav>
        <Button onClick={() => handleClick("/login")} className="me-2">
          Login
        </Button>
        {/* <Button onClick={() => handleClick("/register")} variant="info">
          Register
        </Button> */}
      </Container>
    </Navbar>
  );
};

export default Header;
