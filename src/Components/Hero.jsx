import React from 'react';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <h1 id="hero-title">Hi there — I’m <span style={{color: 'var(--accent)'}}>Angela Gathoni</span></h1>
        <p>I build delightful, user-focused web apps and experiences. I make the complex simple with thoughtful design and clean code.</p>
        <div className="cta">
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
