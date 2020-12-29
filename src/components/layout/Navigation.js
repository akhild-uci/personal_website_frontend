import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-center">
                <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
                <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            </Navbar>
        )
    }
}

export default Navigation;

