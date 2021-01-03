import React, { Component } from 'react';
import PropType from 'prop-types';
import { Waypoint } from 'react-waypoint';
import Skills from './Skills';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilePic from '../media/profile_pic.jpg';


class About extends Component {
    handleEnter = () => { this.props.onEnter('about'); }

    render() {
        return (
            <Waypoint onEnter={this.handleEnter}>
                <Jumbotron id="about" fluid>
                    <Container>
                        <Row className="justify-content-center">
                            <h2 style={{color: "white"}}>About Me</h2>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Image src={profilePic} style={imgStyle} roundedCircle/>
                            </Col>
                            <Col>
                                <div className="skills-container">
                                    <h3 style={{textAlign: "center", color: "white"}}>Skills</h3>
                                    <Skills />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Waypoint>
        )
    }
}

const imgStyle = {
    height: "143.5px",
    width: "132px"
}


// PropTypes
About.propType = {
    onEnter: PropType.func.isRequired,
}


export default About;