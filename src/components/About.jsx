import React from 'react';
import { personalInfo, coreStrengths } from '../data/portfolioData';
import { GraduationCap, Briefcase, Code, MapPin, CheckCircle2, User } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={24} color="var(--accent-purple)" />,
      title: "Degree",
      value: "MCA (Pursuing)",
      sub: "Dnyansagar Inst. Pune",
    },
    {
      icon: <Briefcase size={24} color="var(--accent-cyan)" />,
      title: "Experience",
      value: "Java Full Stack Intern",
      sub: "STEP by SETTribe LLP",
    },
    {
      icon: <Code size={24} color="var(--accent-pink)" />,
      title: "BCA Score",
      value: "8.16 / 10 CGPA",
      sub: "G.A.C.C., Sangli",
    },
    {
      icon: <MapPin size={24} color="var(--accent-green)" />,
      title: "Base Location",
      value: "Pune, MH",
      sub: "Open to Opportunities",
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <User size={15} />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Highlights Grid Left */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
            }}
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {item.value}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Bio Story Right */}
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.3 }}>
              Aspiring Java Full Stack Developer & <span className="gradient-text">Team Lead Intern</span>
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Hello! I'm <strong>Swati Nanavare</strong>, a Master of Computer Applications (MCA) student at Dnyansagar Institute of Management & Research, Pune. I completed my Bachelor of Computer Applications (BCA) at G.A.C.C. Sangli with a CGPA of 8.16 / 10.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              During my internship at <strong>STEP by SETTribe LLP</strong>, I gained extensive experience developing full-stack web applications using Java, Spring Boot, React.js, MySQL, PostgreSQL, and Git. In addition to technical development, I took on <strong>Team Lead responsibilities</strong>—coordinating task allocation, tracking project progress, and ensuring high application quality.
            </p>

            {/* Core Strengths Checklist */}
            <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              Core Strengths:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
              {coreStrengths.map((q, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-purple)" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
