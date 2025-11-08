import React from 'react';

// Standardized project card used by Projects.jsx
const ProjectCard = ({ title, description, tech = [], image, github, live, role }) => {
  return (
    <article 
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(2,6,23,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {image && (
        <div style={{position:'relative',paddingTop:'56.25%',overflow:'hidden'}}>
          <img 
            src={image} 
            alt={title} 
            style={{
              position:'absolute',
              top:0,
              left:0,
              width:'100%',
              height:'100%',
              objectFit:'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => {e.target.style.transform = 'scale(1.05)'}}
            onMouseLeave={e => {e.target.style.transform = 'none'}}
          />
        </div>
      )}
      
      <div style={{padding: '24px 20px'}}>
        <h3 style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'var(--accent)',
          marginBottom: 8
        }}>{title}</h3>
        
        {role && (
          <div style={{
            fontSize: 13,
            color: 'var(--muted)',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}>
            <span>Role:</span>
            <span style={{
              color: '#fff',
              background: 'rgba(255,255,255,0.04)',
              padding: '3px 8px',
              borderRadius: 6,
              fontWeight: 500
            }}>{role}</span>
          </div>
        )}
        
        <p style={{
          color: 'var(--muted)',
          lineHeight: 1.6,
          marginBottom: 16
        }}>{description}</p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 20
        }}>
          {tech.map((t,i) => (
            <span 
              key={i}
              style={{
                background: 'rgba(34,197,94,0.08)',
                color: 'var(--accent)',
                padding: '4px 10px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.02em'
              }}
            >{t}</span>
          ))}
        </div>
        
        <div style={{
          display: 'flex',
          gap: 12,
          marginTop: 'auto'
        }}>
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255,255,255,0.05)';
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255,255,255,0.02)';
                e.target.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              GitHub
            </a>
          )}
          {live && (
            <a 
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                background: 'var(--accent)',
                color: '#000',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={e => {
                e.target.style.opacity = '1';
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
