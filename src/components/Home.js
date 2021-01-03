import React, { Component } from 'react';
import PropType from 'prop-types';
import { Waypoint } from 'react-waypoint';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    handleEnter = () => { this.props.onEnter('home'); }
    
    render() {
        return (
            <Waypoint onEnter={this.handleEnter}>
                <Jumbotron id="home" fluid>
                    <Container className="home-content">
                        <Row className="justify-content-md-center">
                            <h1 style={{color: "#fff", fontSize: "90px"}}>Akhil Dhanala</h1>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <a href="https://www.linkedin.com/in/akhil-dhanala/">
                                    <i className="fa fa-linkedin fa-2x"></i>
                                </a>
                            </Col>
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <a href="https://github.com/akhild-uci">
                                    <i className="fa fa-github fa-2x"></i>
                                </a>
                            </Col>
                            <Col xs="auto" sm="auto" md="auto" lg="auto">
                                <a href="mailto:akhil.dhanala@gmail.com">
                                    <i className="fa fa-envelope fa-2x"></i>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                    <a href="#about" className="down-button">
                        <i className="fa fa-chevron-circle-down fa-3x"></i>
                    </a>
                </Jumbotron>
            </Waypoint>
        )
    }
}


// PropTypes
Home.propType = {
    onEnter: PropType.func.isRequired,
}


export default Home;
