import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="justify-content-center">
                <Nav.Link href="#home" style={navBarStyle}>Home</Nav.Link>
                <Nav.Link href="#about" style={navBarStyle}>About</Nav.Link>
                <Nav.Link href="#projects" style={navBarStyle}>Projects</Nav.Link>
                <Nav.Link href="#contact" style={navBarStyle}>Contact</Nav.Link>
            </Navbar>
        )
    }
}

const navBarStyle = { color: "#fff" }

export default Navigation;

