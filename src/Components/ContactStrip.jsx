import React from 'react';

const ContactStrip = () => {
  return (
    <section id="contact" className="section">
      <div className="container" style={{textAlign:'center'}}>
        <div className="meta" style={{display:'inline-grid',gap:8,background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',padding:20,borderRadius:12,boxShadow:'0 8px 30px rgba(2,6,23,0.6)'}}>
          
          <div><strong>Email:</strong> <a href="mailto:angelakenya.digital@gmail.com" className="" style={{color:'var(--accent)',textDecoration:'none'}}>angelakenya.digital@gmail.com</a></div>
        </div>

        <div style={{marginTop:12,color:'var(--muted)'}}>
          <div><strong>Phone:</strong> <span style={{color:'var(--accent)'}}>+254 729 483 248</span></div>
          <div style={{marginTop:6}}><strong>Location:</strong> <span style={{color:'var(--accent)'}}>Nairobi, Kenya</span></div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
