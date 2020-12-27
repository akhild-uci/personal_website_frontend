import React from 'react';
import Skills from './Skills';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilePic from '../media/profile_pic.jpg';


function About() {
    return (
        <Jumbotron id="about" fluid style={{marginBottom: "0"}}>
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
    )
}

const imgStyle = {
    height: "143.5px",
    width: "132px"
}


export default About;