import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern responsive portfolio website built with React and Vite.',
    tech: ['React', 'Vite', 'JavaScript'],
    
    github: 'https://github.com/angela-G9/portfolio',
    live: 'https://yourportfolio.com',
    role: 'Full-Stack Developer',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app for managing daily tasks with authentication and analytics.',
    tech: ['React', 'Flask', 'SQLAlchemy'],
    github: 'https://github.com/angela-G9/taskmanager',
    live: 'https://taskmanager.com',
    role: 'Frontend Developer',
  },
  {
    title: 'E-commerce API',
    description: 'A RESTful API for an e-commerce platform with secure authentication.',
    tech: ['Python', 'Flask', 'PostgreSQL'],
  
    github: 'https://github.com/angela-G9/ecommerce-api',
    live: '',
    role: 'Backend Developer',
  },
];

const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
  <div style={{textAlign:'center',marginBottom:40}}>
        <div style={{
          width: 80,
          height: 80,
          margin: '0 auto 16px',
          position: 'relative'
        }}>
          <img 
            src="/images/public/images/WhatsApp Image 2025-11-08 at 12.56.25.jpeg" 
            alt="Angela" 
            style={{
              width:'100%',
              height:'100%',
              objectFit:'cover',
              borderRadius:'50%',
              border:'3px solid var(--accent)',
              padding: 3,
              background: 'var(--bg-1)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: -3,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, var(--accent), transparent)',
            opacity: 0.5,
            filter: 'blur(8px)',
            zIndex: -1
          }} />
        </div>
        <h2 style={{color:'var(--accent)',marginBottom:8}}>Featured Work</h2>
        <h3 style={{fontSize:24,fontWeight:700}}>Projects</h3>
        <div style={{marginTop:12}}>
          <a
            href="https://github.com/angela-G9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              borderRadius: 10,
              background: 'var(--accent)',
              color: '#00140f',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            🔗 View my GitHub
          </a>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
        marginTop: 32
      }}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
