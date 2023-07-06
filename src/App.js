
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Work';
import Skills from './components/Skills/Skill';



function App() {
  return (
      <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/works' element={<Works />} />
      <Route path='/skills' element={<Skills />} />

      </Routes>
      </>
    
  );
}

export default App;

