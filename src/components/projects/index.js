import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Zotnseek from './Zotnseek';
import Antz from './Antz';
import PersonalSite from './PersonalSite';


class ProjectsPage extends Component {
    render() {
        return (
            <Jumbotron id="projects" fluid style={{marginBottom: "0"}}>
                <h2 style={{textAlign: "center"}}>Projects</h2>
                <br/>
                <Container>
                    <Row>
                        <CardDeck>
                            <Zotnseek />
                            <Antz />
                            <PersonalSite />
                        </CardDeck>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}


export default ProjectsPage;
