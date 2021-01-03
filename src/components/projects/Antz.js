import React, { Component } from 'react';
import PropType from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import home from '../media/antz_home_page.jpg';

class Antz extends Component {

    handleClick = () => {
        this.props.onClick("Antz");
    }

    render() {
        return (
            <Card id="antz" className="project">
                <Card.Img variant="top" src={home} alt="antz"/>
                <Card.ImgOverlay>
                    <Button
                        variant="transparent" 
                        className="stretched-link text-decoration-none" 
                        onClick={this.handleClick}
                    >
                        <i className="fa fa-plus fa-2x"></i>
                    </Button>
                </Card.ImgOverlay>
                <Card.Title style={{textAlign: "center"}}>Antz Study Groups</Card.Title>
            </Card>
        )
    }
}


// PropTypes
Antz.propType = {
    onClick: PropType.func.isRequired,
}

export default Antz;