import React from 'react';

const Navbar = () => {
  return (
    <nav className="site-nav" aria-label="Main Navigation">
      <div className="nav-inner container">
        <div className="brand">Angela Gathoni</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/docs/Angela_Gathoni_CV.pdf" download="Angela_Gathoni_CV.pdf" className="nav-cta">📄 CV</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
