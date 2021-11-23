import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SoNavbar = (props) => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Linnil XO</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link as={Link} to="playground">Playground</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

SoNavbar.propTypes = {
  // bla: PropTypes.string,
};

SoNavbar.defaultProps = {
  // bla: 'test',
};

export default SoNavbar;
