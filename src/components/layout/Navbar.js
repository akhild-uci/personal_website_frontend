import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="/">Home</a> | 
                    <a href="/">About</a> | 
                    <a href="/">Projects</a> | 
                    <a href="/">Contact</a>
                </nav>
            </header>
        )
    }
}

export default Navbar;

