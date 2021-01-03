import React, { Component } from 'react';
import PropType from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import home from '../media/zotnseek_home_page.jpg';

 
class Zotnseek extends Component {

    handleClick = () => {
        this.props.onClick("Zotnseek");
    }

    render() {
        return (
            <Card id="zotnseek" className="project">
                <Card.Img variant="top" src={home} alt="zotnseek"/>
                <Card.ImgOverlay>
                    <Button
                        variant="transparent" 
                        className="stretched-link text-decoration-none" 
                        onClick={this.handleClick}
                    >
                        <i className="fa fa-plus fa-2x"></i>
                    </Button>
                </Card.ImgOverlay>
                <Card.Title style={{textAlign: "center"}}>ZotnSeek</Card.Title>
            </Card>
        )
    }
}


// PropTypes
Zotnseek.propType = {
    onClick: PropType.func.isRequired,
}


export default Zotnseek;