import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../media/antz_home_page.jpg';
import secondImg from '../media/antz_page1.jpg';


function Antz() {
    return (
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={firstImg}
                            alt="First Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={secondImg}
                            alt="Second Slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className="justify-content-md-center">
                <h3>Antz</h3>
                <p></p>
            </Row>
        </Container>
    )
}

export default Antz;
