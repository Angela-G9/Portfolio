import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable web applications with modern technologies.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating elegant interfaces with a user-first approach and attention to detail.',
    icon: '🎨',
  },
  {
    title: 'Customer Support',
    description: 'Helping users solve problems and ensuring satisfaction with intuitive app experiences.',
    icon: '📞',
  },
  {
    title: 'Branding & Identity',
    description: 'Crafting digital identities that reflect vision, values, and professionalism.',
    icon: '🌟',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{textAlign:'center',marginBottom:40}}>
          <h2 style={{color:'var(--accent)',marginBottom:8}}>What I Do</h2>
          <h3 style={{fontSize:24,fontWeight:700}}>My Services</h3>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr',
          gap:24,
          '@media (min-width: 640px)': {
            gridTemplateColumns:'repeat(2, 1fr)'
          }
        }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                borderRadius: 16,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
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
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                display: 'grid',
                placeItems: 'center',
                fontSize: 24,
                marginBottom: 16,
                position: 'relative',
                zIndex: 1
              }}>
                {service.icon}
              </div>
              
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, rgba(34,197,94,0.03))`,
                zIndex: 0
              }} />

              <h4 style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 8,
                color: 'var(--accent)',
                position: 'relative',
                zIndex: 1
              }}>
                {service.title}
              </h4>
              
              <p style={{
                color: 'var(--muted)',
                lineHeight: 1.6,
                position: 'relative',
                zIndex: 1
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;