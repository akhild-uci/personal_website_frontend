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
  }

  handleShow = project => {
    this.setState({show : true, selectedProject : project}); 
  }

  handleClose = () => { this.setState({show : false}); }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Projects onClick={this.handleShow}/>
        <Contacts />
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
