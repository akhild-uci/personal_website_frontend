import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
