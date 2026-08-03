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
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
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
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--accent-purple)',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={16} />
              <span>Available for Full-Time Roles & Internships</span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Dynamic Title */}
            <div
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.8rem)',
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
                fontSize: '1.05rem',
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
                marginBottom: '2.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-purple)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={16} color="var(--accent-green)" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-outline">
                <span>Contact Me</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-ghost">
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
                marginTop: '2.5rem',
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
              className="animate-float"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1',
              }}
            >
              {/* Outer Glow Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  opacity: 0.25,
                  filter: 'blur(30px)',
                  animation: 'pulseGlow 4s ease-in-out infinite',
                }}
              />

              {/* Main Profile Card Container */}
              <div
                className="glass-card"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                  padding: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '-15px',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ color: '#f59e0b' }}>☕</span>
                <span>Java & Spring</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '-15px',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ color: '#61dafb' }}>⚛️</span>
                <span>React Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
