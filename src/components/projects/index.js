import React, { Component } from 'react';
import Zotnseek from './Zotnseek';


class ProjectsPage extends Component {
    render() {
        return (
            <div id="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                    <Zotnseek />
                </div>
            </div>
        )
    }
}


export default ProjectsPage;
