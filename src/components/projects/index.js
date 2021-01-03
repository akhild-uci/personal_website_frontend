import React, { Component } from 'react';
import PropType from 'prop-types';
import { Waypoint } from 'react-waypoint';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Zotnseek from './Zotnseek';
import Antz from './Antz';
import PersonalSite from './PersonalSite';


class ProjectsPage extends Component {
    handleEnter = () => { this.props.onEnter('projects'); }

    render() {
        return (
            <Waypoint onEnter={this.handleEnter}>
                <Jumbotron id="projects" fluid>
                    <h2 style={{textAlign: "center"}}>Projects</h2>
                    <br/>
                    <Container>
                        <Row>
                            <CardDeck>
                                <Zotnseek onClick={this.props.onClick}/>
                                <Antz onClick={this.props.onClick}/>
                                <PersonalSite onClick={this.props.onClick}/>
                            </CardDeck>
                        </Row>
                    </Container>
                </Jumbotron>
            </Waypoint>
        )
    }
}

// PropTypes
ProjectsPage.propType = {
    onEnter: PropType.func.isRequired,
    onClick: PropType.func.isRequired
}


export default ProjectsPage;
