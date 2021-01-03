import React, { Component } from 'react';
import PropType from 'prop-types';
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

    getClasses = anchor => {
        if (anchor === this.props.active) {
            return `${this.state.color} active`;
        } else {
            return this.state.color;
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
                <Nav.Link className={this.getClasses('home')} href="#home">Home</Nav.Link>
                <Nav.Link className={this.getClasses('about')} href="#about">About</Nav.Link>
                <Nav.Link className={this.getClasses('projects')} href="#projects">Projects</Nav.Link>
                <Nav.Link className={this.getClasses('contact')} href="#contact">Contact</Nav.Link>
            </Navbar>
        )
    }
}


// PropTypes
Navigation.propType = {
    active: PropType.string.isRequired,
}


export default Navigation;

