import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeaderTitle = () => {
  return (
    <Navbar bg="light">
    <Container>
      <Navbar.Brand>Popular Titles</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default HeaderTitle