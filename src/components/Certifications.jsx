import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldCheck, Calendar, Eye, X, Download, Maximize2 } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Helper to render stylized top preview banners for certificates
  const renderCardBanner = (cert) => {
    const isNptel = cert.issuer.includes('NPTEL');
    const isCisco = cert.issuer.includes('Cisco');
    const isNipam = cert.issuer.includes('Intellectual');
    const isNism = cert.issuer.includes('NISM');

    return (
      <div
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1rem',
          background: isNptel
            ? 'linear-gradient(135deg, #1e1b4b 0%, #311b92 100%)'
            : isCisco
            ? 'linear-gradient(135deg, #075985 0%, #0c4a6e 100%)'
            : isNipam
            ? 'linear-gradient(135deg, #701a75 0%, #4a044e 100%)'
            : isNism
            ? 'linear-gradient(135deg, #78350f 0%, #451a03 100%)'
            : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          textAlign: 'center',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)',
        }}
      >
        {/* NPTEL Header Ribbon */}
        {isNptel && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#dc2626',
              color: '#ffffff',
              padding: '0.15rem 1.2rem',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
              textTransform: 'uppercase',
            }}
          >
            Elite
          </div>
        )}

        <div style={{ opacity: 0.9, marginBottom: '0.3rem' }}>
          <ShieldCheck size={32} color={isNptel ? '#f59e0b' : isCisco ? '#38bdf8' : '#e879f9'} />
        </div>

        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '0.2rem',
          }}
        >
          {cert.issuer}
        </span>

        <h4
          style={{
            fontSize: '0.95rem',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.3,
            maxWidth: '90%',
          }}
        >
          {cert.title}
        </h4>

        {/* Hover View Overlay Indicator */}
        <div
          className="cert-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(9, 13, 22, 0.75)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#ffffff',
            fontSize: '0.85rem',
            fontWeight: 600,
            opacity: 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          <Eye size={18} />
          <span>Click to View</span>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Award size={15} />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Professional certifications, national level accreditations, and course completions.
          </p>
        </div>

        {/* Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card cert-card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Visual Banner Header */}
              {renderCardBanner(cert)}

              {/* Card Meta Body */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: cert.title.includes('Elite') ? '#f59e0b' : 'var(--accent-purple)',
                    }}
                  />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{cert.title}</h3>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.8rem' }}>
                  {cert.issuer}
                </p>

                {/* Badges Bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <Calendar size={12} />
                    {cert.date}
                  </span>

                  {cert.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: sk.includes('Elite')
                          ? 'rgba(245, 158, 11, 0.15)'
                          : sk.includes('Score')
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'var(--bg-tertiary)',
                        border: sk.includes('Elite') ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid var(--border-color)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: sk.includes('Elite')
                          ? '#f59e0b'
                          : sk.includes('Score')
                          ? '#10b981'
                          : 'var(--text-secondary)',
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-Page Certificate Viewer Modal (No New Browser Tabs!) */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '900px',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem',
              position: 'relative',
              background: 'var(--bg-secondary)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.85rem',
                marginBottom: '1rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{selectedCert.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                style={{
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
            </div>

            {/* Embedded Inline Document Viewer */}
            <div
              style={{
                width: '100%',
                height: '62vh',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#090d16',
                border: '1px solid var(--border-color)',
                position: 'relative',
              }}
            >
              <iframe
                src={`${selectedCert.file}#toolbar=0&navpanes=0&scrollbar=1`}
                title={selectedCert.title}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>

            {/* Modal Footer Controls */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
                gap: '1rem',
              }}
            >
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Official Certificate Document
              </span>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={selectedCert.file}
                  download
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn btn-outline"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hover Overlay CSS */}
      <style>{`
        .cert-card:hover .cert-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
