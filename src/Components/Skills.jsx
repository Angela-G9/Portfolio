import React from 'react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind', icon: '🌬️' },
      { name: 'HTML', icon: '📄' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '🍶' },
      { name: 'Node', icon: '🟩' },
      { name: 'SQLAlchemy', icon: '🗄️' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: '🔧' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Figma', icon: '🎨' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
];

// friendly proficiency mapping (0-100) - can be tweaked later
const proficiency = {
  React: 92,
  Tailwind: 82,
  HTML: 96,
  CSS: 88,
  JavaScript: 90,
  Python: 90,
  Flask: 80,
  Node: 75,
  SQLAlchemy: 72,
  Git: 92,
  GitHub: 94,
  Figma: 68,
  Docker: 70,
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{color:'var(--accent)'}}>Skills</h2>
        <h3 style={{fontSize:24,fontWeight:700}}>What I Use</h3>
      </div>

      <div className="container" style={{marginTop:24}}>
        <div className="skills-grid" style={{display:'grid',gridTemplateColumns:'1fr',gap:20}}>
          {skills.map((group, idx) => (
            <section key={idx} className="skill-card" style={{padding:16,borderRadius:12,background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'}}>
              <h4 style={{color:'var(--accent)',margin:0,marginBottom:10}}>{group.category}</h4>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12,alignItems:'center'}}>
                {group.items.map((skill,i)=>{
                  const value = proficiency[skill.name] ?? 72;
                  return (
                    <div key={i} className="skill-tile" style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}>
                      <div style={{display:'flex',alignItems:'center',gap:10,width:'100%'}}>
                        <div style={{width:44,height:44,display:'grid',placeItems:'center',borderRadius:10,background:'rgba(255,255,255,0.02)',boxShadow:'inset 0 -2px 6px rgba(0,0,0,0.4)'}}>
                          <span style={{fontSize:18}}>{skill.icon}</span>
                        </div>
                        <div style={{flex:1}}>
                          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div style={{fontWeight:700}}>{skill.name}</div>
                            <div style={{color:'var(--muted)',fontSize:12}}>{value}%</div>
                          </div>
                          <div style={{height:8,background:'rgba(255,255,255,0.04)',borderRadius:99,marginTop:6,overflow:'hidden'}}>
                            <div style={{width:`${value}%`,height:'100%',background:'linear-gradient(90deg,var(--accent),#16a34a)',borderRadius:99}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* small local styles for skills layout */}
      <style>{`
        @media(min-width:720px){
          .skills-grid{grid-template-columns:repeat(3,1fr)}
        }
        .skill-card{box-shadow:0 8px 30px rgba(2,6,23,0.6)}
        .skill-tile{transition:transform .18s ease, box-shadow .18s ease}
        .skill-tile:hover{transform:translateY(-6px);box-shadow:0 8px 18px rgba(2,6,23,0.5)}
      `}</style>
    </section>
  );
};

export default Skills;
