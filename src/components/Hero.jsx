import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, Phone, ArrowRight, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenResume }) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const tagline = personalInfo.taglines[currentTaglineIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === tagline) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? tagline.substring(0, displayText.length - 1)
          : tagline.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTaglineIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: 'auto',
        paddingTop: '6.5rem',
        paddingBottom: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Text Content Left */}
          <div>
            {/* Greeting Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent-purple)',
                marginBottom: '1.25rem',
                maxWidth: '100%',
              }}
            >
              <Sparkles size={16} style={{ flexShrink: 0 }} />
              <span>Available for Roles & Internships</span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                wordBreak: 'break-word',
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Dynamic Title */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 3vw, 1.8rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.4em',
                  background: 'var(--accent-cyan)',
                  marginLeft: '4px',
                  animation: 'pulseGlow 0.8s infinite',
                }}
              />
            </div>

            {/* Bio Summary */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Quick Meta Info */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.25rem',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-purple)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', wordBreak: 'break-all' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={16} color="var(--accent-green)" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline hero-btn">
                <span>Contact Me</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-ghost hero-btn">
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect with me:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  e.currentTarget.style.color = 'var(--accent-purple)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-glass-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-pink)';
                  e.currentTarget.style.color = 'var(--accent-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Graphic Avatar Right */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="animate-float hero-avatar-box"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1/1',
              }}
            >
              {/* Outer Glow Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  opacity: 0.15,
                  filter: 'blur(20px)',
                  animation: 'pulseGlow 5s ease-in-out infinite',
                }}
              />

              {/* Main Profile Card Container */}
              <div
                className="glass-card"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  padding: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-glow)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        @media (max-width: 640px) {
          .hero-grid {
            gap: 2.5rem !important;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn {
            width: 100% !important;
          }
          .hero-avatar-box {
            max-width: 320px !important;
          }
          .hero-badge-top {
            right: 0px !important;
            top: -10px !important;
          }
          .hero-badge-bottom {
            left: 0px !important;
            bottom: -10px !important;
          }
        }
      `}</style>
    </section>
  );
}
