import React from 'react';

import Hero from './Components/Hero';
import ContactStrip from './Components/ContactStrip';
import About from './Components/About';
import Services from './Components/Services';
import Navbar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import './App.css';


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ContactStrip />
    </div>
  );
};

export default App;
