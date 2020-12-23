import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="#home">Home</a> | 
                    <a href="#about">About</a> | 
                    <a href="#projects">Projects</a> | 
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        )
    }
}

export default Navbar;

