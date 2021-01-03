import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/Contacts';
import ProjectModal from './components/modal';

class App extends Component {
  state = {
    show: false,
    selectedProject: "poo",
    activeSection: "home",
  }

  handleShow = project => {
    this.setState({show : true, selectedProject : project});
  }

  handleClose = () => { this.setState({show : false}); }

  handleWaypointEnter = activeSection => {
    this.setState({activeSection : activeSection});
  }

  render() {
    return (
      <div className="App">
        <Navigation active={this.state.activeSection}/>
        <Home onEnter={this.handleWaypointEnter}/>
        <About onEnter={this.handleWaypointEnter}/>
        <Projects onEnter={this.handleWaypointEnter} onClick={this.handleShow}/>
        <Contacts onEnter={this.handleWaypointEnter}/>
        <ProjectModal 
          show={this.state.show} 
          handleClose={this.handleClose}
          project={this.state.selectedProject}
        />
      </div>
    );
  }
}

export default App;
