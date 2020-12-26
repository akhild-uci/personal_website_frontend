import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
