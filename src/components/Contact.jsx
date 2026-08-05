import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <MessageSquare size={15} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1rem' }}>
            Let's build something <span className="gradient-text">great together</span>
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              fontSize: '1rem',
              maxWidth: '650px',
              marginInline: 'auto',
            }}
          >
            I am currently seeking full-time Full Stack Software Developer opportunities and internships. Whether you have a question, project proposal, or just want to connect, feel free to reach out!
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.8rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)',
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  Location
                </h4>
                <p style={{ fontSize: '0.98rem', fontWeight: 600 }}>{personalInfo.location}</p>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.8rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                }}
              >
                <Mail size={22} />
              </div>
              <div style={{ width: '100%', minWidth: 0 }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  Email Address
                </h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    wordBreak: 'break-all',
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.8rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)',
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  Phone Number
                </h4>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary"
            style={{ padding: '0.85rem 2.2rem', fontSize: '0.95rem' }}
          >
            <Mail size={18} />
            <span>Say Hello via Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
