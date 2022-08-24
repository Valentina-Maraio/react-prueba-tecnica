import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <Navbar fixed="bottom" bg="dark">
                <Container>
                    <h3>FOOTER</h3>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer