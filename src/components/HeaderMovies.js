import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeaderMovies = () => {
  return (
    <Navbar bg="light">
    <Container>
      <Navbar.Brand>Popular Movies</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default HeaderMovies