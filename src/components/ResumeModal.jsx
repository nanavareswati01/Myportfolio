import React from 'react';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';
import { X, Download, FileText, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          background: 'var(--bg-secondary)',
          boxShadow: 'var(--shadow-md)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={20} />
        </button>

        {/* Resume Header */}
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.2rem' }}>{personalInfo.name}</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '0.8rem' }}>
            {personalInfo.role} • MCA Student
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {personalInfo.location}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={14} /> {personalInfo.email}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Phone size={14} /> {personalInfo.phone}</span>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {personalInfo.summary}
          </p>
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Work Experience
          </h3>
          {experienceData.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{exp.role} - <span style={{ color: 'var(--accent-cyan)' }}>{exp.company}</span></h4>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{exp.period}</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {exp.description.map((d, dIdx) => (
                  <li key={dIdx} style={{ marginBottom: '0.3rem' }}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Education
          </h3>
          {educationData.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <div>
                <span style={{ fontWeight: 600 }}>{edu.degree}</span> – <span style={{ color: 'var(--text-secondary)' }}>{edu.institution}</span>
              </div>
              <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{edu.score}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <a
            href={`mailto:${personalInfo.email}?subject=Interview Request for Swati Nanavare`}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <Mail size={18} />
            <span>Hire Swati</span>
          </a>

          <button
            onClick={() => alert("Downloading Swati Nanavare's Resume PDF...")}
            className="btn btn-outline"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
