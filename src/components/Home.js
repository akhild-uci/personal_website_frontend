import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
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
        </Jumbotron>
    )
}


export default Home;
