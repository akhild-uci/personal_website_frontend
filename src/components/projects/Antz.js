import React from 'react';
import Card from 'react-bootstrap/Card';
import home from './media/antz_home_page.jpg';

function Antz() {
    return (
        <Card id="antz">
            <Card.Img variant="top" src={home} alt="antz"/>
            <Card.Title style={{textAlign: "center"}}>Antz Study Groups</Card.Title>
        </Card>
    )
}


export default Antz;