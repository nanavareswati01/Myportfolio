import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <GraduationCap size={15} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="section-title">Education</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: edu.status === 'pursuing' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  border: edu.status === 'pursuing' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                  color: edu.status === 'pursuing' ? 'var(--accent-purple)' : 'var(--accent-green)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Award size={14} />
                <span>{edu.score}</span>
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                {edu.degree}
              </h3>

              <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>
                {edu.institution}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 'auto' }}>
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
