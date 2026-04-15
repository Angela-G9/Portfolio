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
          <a href="https://www.linkedin.com/in/angela-gathoni-62974a332/" target="_blank" rel="noopener noreferrer" title="LinkedIn">🔗 LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
