import React from 'react';
import Skills from './Skills';
import Jumbotron from 'react-bootstrap/Jumbotron';


function About() {
    return (
        <Jumbotron id="about" fluid>
            <h2>About Me</h2>
            <div className="skills-container">
                <Skills />
            </div>
        </Jumbotron>
    )
}


export default About;