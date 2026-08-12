import React from 'react';
import { jsPDF } from 'jspdf';
import { personalInfo, experienceData, educationData, certificationsData, skillsData } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const blue = [37, 99, 235];
      const dark = [15, 23, 42];
      const gray = [71, 85, 105];

      let y = 15;

      // Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(...blue);
      doc.text('SWATI NANAVARE', 15, y);

      y += 6;
      doc.setFontSize(10.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text('Software Developer | MCA (Completed 2026)', 15, y);

      y += 5;
      doc.setFontSize(9);
      doc.text('Pune, Maharashtra, India  |  +91 9067880874  |  swatinanavare8@gmail.com', 15, y);

      y += 4;
      doc.text('GitHub: github.com/nanavareswati01  |  LinkedIn: linkedin.com/in/swati-nanavare-0a4a91321', 15, y);

      y += 4;
      doc.setDrawColor(200, 200, 200);
      doc.line(15, y, 195, y);

      // Summary
      y += 6;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...blue);
      doc.text('PROFESSIONAL SUMMARY', 15, y);

      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...dark);
      const summary = personalInfo.summary;
      const splitSummary = doc.splitTextToSize(summary, 180);
      doc.text(splitSummary, 15, y);

      y += splitSummary.length * 4.5 + 2;

      // Work Experience
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...blue);
      doc.text('WORK EXPERIENCE', 15, y);

      y += 5;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...dark);
      doc.text('Software Developer Intern', 15, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text('Jan 2026 - Present', 195, y, { align: 'right' });

      y += 4.5;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...blue);
      doc.text('STEP by SETTribe LLP, Pune, India', 15, y);

      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.8);
      doc.setTextColor(...dark);
      const bullets = [
        '• Developed frontend and backend features using Java Full Stack technologies, including Java, Spring Boot, React.js, and MySQL.',
        '• Implemented form handling, REST APIs, CRUD operations, API integration, and database operations.',
        '• Collaborated with team members to analyze requirements, track development progress, and maintain effective communication throughout project lifecycle.',
        '• Contributed to development team coordination and took Team Lead responsibilities by supporting task allocation and coordinating deliverables.',
        '• Contributed to Meeting & Task Planner System and College Management System focusing on application quality and performance.'
      ];

      bullets.forEach((bullet) => {
        const lines = doc.splitTextToSize(bullet, 175);
        doc.text(lines, 18, y);
        y += lines.length * 4;
      });

      // Technical Skills
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...blue);
      doc.text('TECHNICAL SKILLS', 15, y);

      y += 5;
      doc.setFontSize(8.8);
      doc.setTextColor(...dark);
      const skills = [
        ['Programming Languages:', 'Java, JavaScript (ES6+)'],
        ['Frontend Development:', 'HTML5, CSS3, React.js, Bootstrap'],
        ['Backend Development:', 'Java SE/EE, Spring Boot, REST APIs, CRUD Operations'],
        ['Database Systems:', 'MySQL, PostgreSQL, Relational DB Design, SQL Queries'],
        ['Software Testing:', 'Manual Testing, API Testing, Debugging, Test Execution'],
        ['Tools & IDEs:', 'Git, GitHub, VS Code, STS (Spring Tool Suite), Postman']
      ];

      skills.forEach(([label, val]) => {
        doc.setFont('helvetica', 'bold');
        doc.text(label, 15, y);
        doc.setFont('helvetica', 'normal');
        doc.text(val, 60, y);
        y += 4.2;
      });

      // Certifications
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...blue);
      doc.text('CERTIFICATIONS & ACHIEVEMENTS', 15, y);

      y += 5;
      certificationsData.forEach((cert) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.2);
        doc.setTextColor(...dark);
        doc.text(`• ${cert.title}`, 15, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...gray);
        doc.text(`${cert.issuer} (${cert.date})`, 195, y, { align: 'right' });

        y += 4.5;
      });

      // Education
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...blue);
      doc.text('EDUCATION', 15, y);

      y += 5;
      doc.setFontSize(9.2);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...dark);
      doc.text('Master of Computer Applications (MCA)', 15, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text('2024 - 2026 (Completed)', 195, y, { align: 'right' });
      y += 4;
      doc.text('Dnyansagar Institute of Management & Research, Pune', 15, y);

      y += 4.5;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...dark);
      doc.text('Bachelor of Computer Applications (BCA)', 15, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text('2021 - 2024 (CGPA: 8.16 / 10)', 195, y, { align: 'right' });
      y += 4;
      doc.text('G.A.C.C., Sangli', 15, y);

      doc.save('Swati_Nanavare_Resume.pdf');
    } catch (err) {
      console.error(err);
      window.print();
    }
  };

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
          }}
        >
          <X size={20} />
        </button>

        {/* Resume Header */}
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.2rem' }}>{personalInfo.name}</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '0.8rem' }}>
            {personalInfo.role} • MCA (Completed 2026)
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

        {/* Certifications Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Certifications & Achievements
          </h3>
          {certificationsData.map((cert, idx) => (
            <div key={idx} style={{ marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
              <div>
                <span style={{ fontWeight: 600 }}>{cert.title}</span> – <span style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</span>
              </div>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{cert.date}</span>
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
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <button
            onClick={handleDownloadPDF}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem' }}
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
