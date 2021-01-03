import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
    state = {
        background: "transparent",
        color : "white"
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollListener);
    }

    scrollListener = () => {
        let pos = window.scrollY;
        let home = document.getElementById('home').clientHeight;
        if (pos >= home) {
            this.setState({background : "dark", color : "white"});
        } else if (pos <= (home / 10)) {
            this.setState({background : "transparent", color : "white"});
        } else {
            this.setState({background : "transparent", color : "hide"});
        }
    }

    render() {
        return (
            <Navbar
                bg={this.state.background}
                variant="dark"
                fixed="top"
                className="justify-content-center"
                style={{transition : "all .3s ease-in-out"}}
            >
                <Nav.Link className={this.state.color} href="#home">Home</Nav.Link>
                <Nav.Link className={this.state.color} href="#about">About</Nav.Link>
                <Nav.Link className={this.state.color} href="#projects">Projects</Nav.Link>
                <Nav.Link className={this.state.color} href="#contact">Contact</Nav.Link>
            </Navbar>
        )
    }
}

export default Navigation;

