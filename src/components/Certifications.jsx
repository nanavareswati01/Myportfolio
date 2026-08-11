import React, { useState, useEffect, useRef } from 'react';
import { certificationsData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

// Lightweight PDF to Canvas renderer component
function PdfCanvasViewer({ file, title, isThumbnail = false }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const renderPdf = async () => {
      try {
        setLoading(true);
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument(file);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        if (!isMounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const unscaledViewport = page.getViewport({ scale: 1 });
        let targetScale = 1.5;

        if (isThumbnail) {
          targetScale = 360 / unscaledViewport.width;
        } else {
          const targetWidth = Math.min(window.innerWidth * 0.88, 980);
          targetScale = targetWidth / unscaledViewport.width;
        }

        const viewport = page.getViewport({ scale: targetScale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (isMounted) setLoading(false);
      } catch (err) {
        console.error('Error rendering PDF:', err);
        if (isMounted) setLoading(false);
      }
    };

    renderPdf();
    return () => {
      isMounted = false;
    };
  }, [file, isThumbnail]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {loading && (
        <div
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          Loading Certificate...
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          display: loading ? 'none' : 'block',
          maxWidth: isThumbnail ? '100%' : '88vw',
          maxHeight: isThumbnail ? '100%' : '82vh',
          width: isThumbnail ? '100%' : 'auto',
          height: isThumbnail ? '100%' : 'auto',
          objectFit: 'contain',
          borderRadius: isThumbnail ? '0px' : '14px',
          boxShadow: isThumbnail ? 'none' : '0 20px 50px rgba(0, 0, 0, 0.9)',
          background: '#ffffff',
        }}
      />
    </div>
  );
}

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock body scroll when certificate modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const cardsPerPage = 2;
  const maxIndex = Math.max(0, certificationsData.length - cardsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}
          >
            Certifications
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Professional certifications, national level accreditations, and course completions.
          </p>

          {/* Carousel Arrows */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Certificates"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: currentIndex === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                opacity: currentIndex === 0 ? 0.4 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next Certificates"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: currentIndex >= maxIndex ? 'var(--text-muted)' : 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                opacity: currentIndex >= maxIndex ? 0.4 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div style={{ overflow: 'hidden', padding: '0.5rem 0' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              transform: `translateX(-${currentIndex * (100 / cardsPerPage + 1.5)}%)`,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card cert-card-item"
                style={{
                  minWidth: 'calc(50% - 0.75rem)',
                  flex: '0 0 calc(50% - 0.75rem)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Top Half: Real Canvas Certificate Preview */}
                <div
                  style={{
                    width: '100%',
                    height: '240px',
                    position: 'relative',
                    background: '#080c14',
                    overflow: 'hidden',
                    borderBottom: '1px solid var(--border-color)',
                  }}
                >
                  <PdfCanvasViewer file={cert.file} title={cert.title} isThumbnail={true} />

                  {/* Hover Overlay Button */}
                  <div
                    className="cert-card-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(9, 13, 22, 0.6)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(59, 130, 246, 0.9)',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <Eye size={16} />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Half: Certificate Title & Badges */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: cert.badge.includes('Elite') ? '#f59e0b' : '#3b82f6',
                        flexShrink: 0,
                      }}
                    />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '1rem', paddingLeft: '1rem' }}>
                    {cert.issuer}
                  </p>

                  {/* Pill Badges Bar */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto', paddingLeft: '1rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {cert.date}
                    </span>

                    {cert.badge && (
                      <span
                        style={{
                          padding: '0.25rem 0.7rem',
                          borderRadius: 'var(--radius-full)',
                          background: cert.badge.includes('Elite') ? 'rgba(245, 158, 11, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                          border: cert.badge.includes('Elite') ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(59, 130, 246, 0.3)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          color: cert.badge.includes('Elite') ? '#f59e0b' : '#3b82f6',
                        }}
                      >
                        {cert.badge}
                      </span>
                    )}

                    {cert.score && (
                      <span
                        style={{
                          padding: '0.25rem 0.7rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          color: '#10b981',
                        }}
                      >
                        {cert.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.4rem',
            marginTop: '1.25rem',
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, dIdx) => (
            <button
              key={dIdx}
              onClick={() => setCurrentIndex(dIdx)}
              aria-label={`Go to page ${dIdx + 1}`}
              style={{
                width: currentIndex === dIdx ? '24px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                background: currentIndex === dIdx ? 'var(--accent-purple)' : 'var(--border-color)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* In-Page Certificate Frameless Lightbox (PURE CERTIFICATE ONLY) */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(9, 13, 22, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '88vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate viewer"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#1e293b',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <X size={22} />
            </button>

            {/* Pure Canvas Rendering - ZERO Gray Background Box */}
            <PdfCanvasViewer file={selectedCert.file} title={selectedCert.title} isThumbnail={false} />
          </div>
        </div>
      )}

      <style>{`
        .cert-card-item:hover .cert-card-overlay {
          opacity: 1 !important;
        }
        .cert-card-item:hover {
          transform: translateY(-5px);
          border-color: var(--border-glow) !important;
        }
        @media (max-width: 768px) {
          .cert-card-item {
            min-width: 100% !important;
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
