import React from 'react';
import Card from 'react-bootstrap/Card';
import home from './media/personal_site_home_page.jpg';

function PersonalSite() {
    return (
        <Card id="personal-site">
            <Card.Img variant="top" src={home} alt="Personal Website"/>
            <Card.Title style={{textAlign: "center"}}>Personal Website</Card.Title>
        </Card>
    )
}


export default PersonalSite;