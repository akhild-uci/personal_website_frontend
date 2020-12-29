import React, { Component } from 'react';
import PropType from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import home from '../media/personal_site_home_page.jpg';

class PersonalSite extends Component {

    handleClick = () => {
        this.props.onClick("PersonalSite");
    }

    render() {
        return (
            <Card id="personal-site" className="project">
                <Card.Img variant="top" src={home} alt="Personal Website"/>
                <Card.ImgOverlay>
                    <Button
                        variant="transparent" 
                        className="stretched-link text-decoration-none" 
                        onClick={this.handleClick}
                    >
                        <i class="fa fa-plus fa-2x"></i>
                    </Button>
                </Card.ImgOverlay>
                <Card.Title style={{textAlign: "center"}}>Personal Website</Card.Title>
            </Card>
        )
    }
}

// PropTypes
PersonalSite.propType = {
    onClick: PropType.func.isRequired,
}

export default PersonalSite;