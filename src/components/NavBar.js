import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Container>
            <Navbar fixed="top" expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
        </Container>
    );
};

export default NavBar;