import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Layout, Server, Wrench, HeartHandshake, Users, Briefcase, Clock, Brain } from 'lucide-react';

// Tech skill brand icons SVG mapping
const TechIcon = ({ name, color }) => {
  switch (name) {
    case 'html5':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#E34F26" />
          <path d="M12 4.7V19.4L16.8 18.1L17.8 4.7H12Z" fill="#EF652A" />
          <path d="M7.7 7.5H16.3L16.1 9.8H10L10.2 12.1H15.9L15.4 17.5L12 18.5L8.6 17.5L8.4 14.8H10.6L10.7 15.9L12 16.3L13.3 15.9L13.5 13.9H8.2L7.7 7.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'css3':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 3L5.8 19.5L12 21.2L18.2 19.5L19.5 3H4.5Z" fill="#1572B6" />
          <path d="M12 4.7V19.4L16.8 18.1L17.8 4.7H12Z" fill="#33A9DC" />
          <path d="M7.7 7.5H16.3L16 10.3H10.2L10.4 12.1H15.8L15.3 17.5L12 18.5L8.7 17.5L8.5 15.3H10.7L10.8 16.3L12 16.6L13.2 16.3L13.4 14.3H8.3L7.7 7.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'react':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.8" ry="9.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="3.8" ry="9.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="3.8" ry="9.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case 'js':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M11.6 17.5C10.7 17.5 10 17 9.5 16.3C9.3 15.9 9.2 15.3 9.3 14.7H11.2C11.2 15 11.3 15.3 11.5 15.5C11.7 15.7 12 15.8 12.4 15.8C12.9 15.8 13.2 15.6 13.2 15.2C13.2 14.9 13 14.7 12.3 14.5L11.5 14.2C10.3 13.8 9.6 13.1 9.6 11.9C9.6 11.3 9.9 10.7 10.4 10.3C11 9.9 11.8 9.7 12.7 9.7C13.7 9.7 14.4 10 14.9 10.6C15.2 11.1 15.4 11.7 15.3 12.4H13.4C13.4 12 13.3 11.8 13.1 11.6C12.9 11.4 12.6 11.3 12.2 11.3C11.8 11.3 11.5 11.5 11.5 11.8C11.5 12.1 11.7 12.3 12.4 12.5L13.2 12.8C14.5 13.3 15.2 14 15.2 15.1C15.2 15.8 14.9 16.4 14.3 16.9C13.7 17.3 12.8 17.5 11.6 17.5ZM16.3 17.3V9.9H18.3V17.3H16.3Z" fill="#000000" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
        </svg>
      );
    case 'java':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M8.8 18.2C8.8 18.2 9.8 18.7 11.9 18.7C14.2 18.7 15.6 17.7 15.6 17.7C15.6 17.7 14.6 18.1 12.9 18.1C10.5 18.1 8.8 18.2 8.8 18.2ZM12.7 14.8C10.4 14.8 8 15.5 8 15.5C8 15.5 9.7 15.1 12.1 15.1C14.9 15.1 17.2 15.8 17.2 15.8C17.2 15.8 15.4 14.8 12.7 14.8ZM13 11.5C11.5 11.5 10.3 12.3 9.4 13.2C10.9 13.2 12.8 13.1 14.4 12.7C15.8 12.4 16.9 11.9 16.9 11.9C16.9 11.9 15.2 11.5 13 11.5Z" fill="#ED8B00" />
          <path d="M14.5 7.5C14.5 7.5 15.7 8.7 14.5 10.7C15.7 10.7 17 9.6 17 8.2C17 6.7 14.5 7.5 14.5 7.5Z" fill="#5382A1" />
          <path d="M11.5 5.5C11.5 5.5 13.2 6.7 12 9.2C13.6 8.7 15 7.3 14.2 5.8C13.3 4.2 11.5 5.5 11.5 5.5Z" fill="#ED8B00" />
        </svg>
      );
    case 'spring':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#6DB33F" />
        </svg>
      );
    case 'git':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21.7 10.8L13.2 2.3C12.6 1.7 11.6 1.7 11 2.3L2.3 11C1.7 11.6 1.7 12.6 2.3 13.2L10.8 21.7C11.4 22.3 12.4 22.3 13 21.7L21.7 13C22.3 12.4 22.3 11.4 21.7 10.8ZM13.4 15.3V12.7C13.4 12.3 13.1 12 12.7 12C11.5 12 10.5 12.7 9.8 13.6C9.6 13.8 9.3 13.7 9.3 13.4V7.5C9.3 7.1 9.6 6.8 10 6.8C10.4 6.8 10.7 7.1 10.7 7.5V9.4C11.2 9.1 11.9 8.9 12.7 8.9C13.9 8.9 15.1 9.6 15.8 10.6C16.1 11.1 16.3 11.7 16.3 12.3V15.3C16.3 15.7 16 16 15.6 16C15.2 16 14.9 15.7 14.9 15.3H13.4Z" fill="#F05032" />
        </svg>
      );
    case 'github':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF" />
        </svg>
      );
    case 'vscode':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5L22 4.5V19.5L17.5 21.5L8.5 14L4 17.5L2 16V8L4 6.5L8.5 10L17.5 2.5Z" fill="#007ACC" />
          <path d="M17.5 2.5L8.5 10L4 6.5L2 8V16L4 17.5L8.5 14L17.5 21.5V2.5Z" fill="#007ACC" />
        </svg>
      );
    case 'dbeaver':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#382923" />
          <path d="M12 4C7.58 4 4 5.79 4 8v8c0 2.21 3.58 4 8 4s8-1.79 8-4V8c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.12 6 2.5S15.31 11 12 11s-6-1.12-6-2.5S8.69 6 12 6zm0 12c-3.31 0-6-1.12-6-2.5V13c1.45.86 3.6 1.4 6 1.4s4.55-.54 6-1.4v2.5c0 1.38-2.69 2.5-6 2.5z" fill="#3B82F6" />
        </svg>
      );
    case 'render':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#141414" />
          <path d="M6 16.5C6 14 8 12 10.5 12C11 12 11.5 12.1 12 12.3C12.7 10.4 14.5 9 16.5 9C19 9 21 11 21 13.5C21 13.7 21 13.9 20.9 14.1C21.6 14.6 22 15.5 22 16.5C22 18 20.8 19.2 19.3 19.2H6.7C5.2 19.2 4 18 4 16.5C4 15.3 4.8 14.3 6 14C6 14.8 6 15.7 6 16.5Z" fill="#46E3B7" />
        </svg>
      );
    case 'sts':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#6DB33F" />
          <path d="M12 6L14.5 11H9.5L12 6ZM12 18L9.5 13H14.5L12 18Z" fill="#FFFFFF" />
        </svg>
      );
    case 'users': return <Users size={16} color="#10b981" />;
    case 'briefcase': return <Briefcase size={16} color="#10b981" />;
    case 'clock': return <Clock size={16} color="#10b981" />;
    case 'brain': return <Brain size={16} color="#10b981" />;
    default:
      return null;
  }
};

export default function Skills() {
  const getCategoryIcon = (iconName, color) => {
    switch (iconName) {
      case 'Layout': return <Layout size={22} color={color} />;
      case 'Server': return <Server size={22} color={color} />;
      case 'Wrench': return <Wrench size={22} color={color} />;
      case 'Handshake': return <HeartHandshake size={22} color={color} />;
      default: return <Layout size={22} color={color} />;
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '0.6rem' }}
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Languages, frameworks, databases, and developer tools I use daily.
          </p>
        </div>

        {/* 2x2 Skills Grid */}
        <div
          className="skills-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
        >
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '1.75rem',
                background: 'rgba(13, 18, 30, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${cat.color}60`;
                e.currentTarget.style.boxShadow = `0 12px 35px ${cat.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${cat.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getCategoryIcon(cat.icon, cat.color)}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {cat.category}
                </h3>
              </div>

              {/* Card Divider Line */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.5rem',
                }}
              />

              {/* Skill Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.5rem 1.1rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = `0 0 14px ${cat.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <TechIcon name={skill.icon} color={cat.color} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
