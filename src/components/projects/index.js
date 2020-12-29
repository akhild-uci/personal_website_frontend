import React, { Component } from 'react';
import PropType from 'prop-types';
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
        )
    }
}

// PropTypes
ProjectsPage.propType = {
    onClick: PropType.func.isRequired,
}


export default ProjectsPage;
