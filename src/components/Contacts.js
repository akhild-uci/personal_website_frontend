import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Contacts() {
    return (
        <Jumbotron id="contact">
            <h2 style={{color: "white", textAlign: "center"}}>Contacts</h2>
            <br/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="justify-content-center d-flex">
                        <Card bg="transparent" style={{border: "none"}}>
                            <Card.Header className="justify-content-center d-flex">
                                <i className="fa fa-linkedin fa-3x"></i>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="justify-content-center d-flex">
                                    Let's Connect
                                </Card.Title>
                                <Card.Text className="justify-content-center d-flex">
                                    <a href="https://www.linkedin.com/in/akhil-dhanala/">
                                        LinkedIn Profile
                                    </a>
                                </Card.Text>
                            </Card.Body>                      
                        </Card>
                    </Col>
                    <Col className="justify-content-center d-flex">
                        <Card bg="transparent" style={{border: "none"}}>
                            <Card.Header className="justify-content-center d-flex">
                                <i className="fa fa-envelope fa-3x"></i>
                            </Card.Header> 
                            <Card.Body>
                                <Card.Title className="justify-content-center d-flex">
                                    Email Me At
                                </Card.Title>
                                <Card.Text className="justify-content-center d-flex">
                                    <a href="mailto:akhil.dhanala@gmail.com">
                                        akhil.dhanala@gmail.com
                                    </a>
                                </Card.Text>
                            </Card.Body>                      
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}


export default Contacts;