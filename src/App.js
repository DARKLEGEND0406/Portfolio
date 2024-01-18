import './App.css';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Intro from './components/intro';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
