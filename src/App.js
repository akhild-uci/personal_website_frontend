import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
