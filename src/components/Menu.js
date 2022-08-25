import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const Menu = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">DEMO Streaming</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Badge onClick={()=>alert('ciao sono login')} bg="light" text="dark">
              Login
            </Badge>{' '}
            <Badge onClick={()=>alert('ciao sono free trial')} bg="warning" text="dark">
              Free Trial
            </Badge>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu