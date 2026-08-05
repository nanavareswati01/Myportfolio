import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card modal-container"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '1.5rem',
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
            transition: 'all 0.2s ease',
          }}
        >
          <X size={20} />
        </button>

        {/* Project Image Header */}
        <div
          style={{
            width: '100%',
            height: '260px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '1.5rem',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Category & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(139, 92, 246, 0.15)',
              color: 'var(--accent-purple)',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>
        </div>

        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{project.title}</h2>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.fullDesc}
        </p>

        {/* Key Features Checklist */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
            Key Features & Capabilities:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
            Technologies Used:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ flex: 1 }}
          >
            <GithubIcon size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
