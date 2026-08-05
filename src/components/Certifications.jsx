import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldCheck, Calendar } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Award size={15} />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="section-title">Certifications & Training</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{cert.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                <Calendar size={14} />
                <span>Issued: {cert.date}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {cert.skills.map((sk, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      padding: '0.22rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
