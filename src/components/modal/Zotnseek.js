import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../media/zotnseek_home_page.jpg';
import secondImg from '../media/zotnseek_location_1.jpg';
import thirdImg from '../media/zotnseek_end.jpg';

function Zotnseek() {
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={thirdImg}
                            alt="Third Slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className="justify-content-md-center">
                <h3>ZotnSeek</h3>
                <p></p>
            </Row>
        </Container>
    )
}

export default Zotnseek;
