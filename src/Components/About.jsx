import React, { useState } from 'react';

const About = () => {
  // shownDoc: null | 'cv' | 'presentation'
  const [shownDoc, setShownDoc] = useState(null);
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="profile" style={{
          width: '100%',
          maxWidth: 420,
          position: 'relative',
        }}>
          <img 
            src="/images/WhatsApp%20Image%202025-11-08%20at%2012.56.25.jpeg" 
            alt="Angela Gathoni" 
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: 16,
              boxShadow: '0 20px 40px rgba(2,6,23,0.6)',
              border: '1px solid rgba(255,255,255,0.05)',
            }} 
          />
          {/* Gradient overlay for depth */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            background: 'linear-gradient(180deg, transparent 60%, rgba(3,4,9,0.4))',
            zIndex: 1
          }} />
          {/* Accent color glow */}
          <div style={{
            position: 'absolute',
            inset: -2,
            borderRadius: 16,
            background: 'var(--accent)',
            opacity: 0.1,
            filter: 'blur(20px)',
            zIndex: -1
          }} />
        </div>

        <div>
          <h2>Who am I?</h2>
            <h3>I'm Angela Gathoni — <span style={{color:'var(--accent)'}}>CEO, AngelTech</span> & Full-stack Developer</h3>
          <p>
            I build responsive, scalable applications and bring user-centered design to life using
            technologies like React, Flask and modern JavaScript. I focus on clean UI, reliable code,
            and shipping delightful experiences.
          </p>

          <div className="meta">
            <div><strong>Name:</strong> Angela Gathoni</div>
            <div><strong>From:</strong> Nairobi, Kenya</div>
            <div><strong>Age:</strong> 25</div>
            <div><strong>Email:</strong> angelakenya.digital@gmail.com</div>
          </div>

          {/* CV actions: download + inline preview toggle */}
          <div style={{marginTop:24,display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <a
              href="/docs/Angela_Gathoni_CV.pdf"
              download="Angela_Gathoni_CV.pdf"
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 16,
                padding: '12px 20px',
                transition: 'transform 0.2s ease, opacity 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.opacity = '0.95';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.opacity = '1';
              }}
            >
              <span style={{fontSize:20}}>📄</span>
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={() => setShownDoc(prev => prev === 'cv' ? null : 'cv')}
              className="btn"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--muted)',
                padding: '10px 16px',
                borderRadius: 10,
                cursor: 'pointer',
                fontWeight: 700
              }}
              onMouseEnter={e => {e.currentTarget.style.opacity = '0.95'}}
              onMouseLeave={e => {e.currentTarget.style.opacity = '1'}}
            >
              {shownDoc === 'cv' ? 'Hide CV' : 'View CV'}
            </button>

            {/* Presentation actions */}
            <a
              href="/docs/ANGELTECH_PRESENTATION.pdf"
              download="ANGELTECH_PRESENTATION.pdf"
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 16,
                padding: '12px 20px',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'var(--muted)'
              }}
            >
              <span style={{fontSize:18}}>📁</span>
              <span>Download Presentation</span>
            </a>

            <button
              type="button"
              onClick={() => setShownDoc(prev => prev === 'presentation' ? null : 'presentation')}
              className="btn"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--muted)',
                padding: '10px 16px',
                borderRadius: 10,
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              {shownDoc === 'presentation' ? 'Hide Presentation' : 'View Presentation'}
            </button>

            <span style={{color:'var(--muted)',fontSize:14}}>PDF format</span>
          </div>

          {/* Inline preview (toggle) */}
          {shownDoc && (
            <div style={{marginTop:18,borderRadius:12,overflow:'hidden',boxShadow:'0 12px 40px rgba(2,6,23,0.6)'}}>
              <iframe
                src={shownDoc === 'cv' ? '/docs/Angela_Gathoni_CV.pdf' : '/docs/ANGELTECH_PRESENTATION.pdf'}
                title={shownDoc === 'cv' ? 'Angela Gathoni CV' : 'AngelTech Presentation'}
                style={{width:'100%',height:520,border:0,display:'block'}}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
