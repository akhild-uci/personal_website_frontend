import React from 'react';
import Card from 'react-bootstrap/Card';
import home from './media/zotnseek_home_page.jpg';

function Zotnseek() {
    return (
        <Card id="zotnseek">
            <Card.Img variant="top" src={home} alt="zotnseek"/>
            <Card.Title style={{textAlign: "center"}}>ZotnSeek</Card.Title>
        </Card>
    )
}


export default Zotnseek;