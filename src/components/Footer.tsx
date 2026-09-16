import React from 'react';
import { Layers, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#020406', // Slightly darker than main bg
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '80px 0 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand Column */}
          <div style={{ flex: '1 1 300px', maxWidth: '360px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(37, 99, 235, 0.4) 100%)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Layers size={18} color="#00f0ff" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
                Algo<span style={{ color: '#00f0ff' }}>Vault</span>
              </span>
            </Link>

            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
              Your native desktop workspace for mastering Data Structures and Algorithms. Own your knowledge, completely offline.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: '#64748b', transition: 'color 0.2s' }} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" style={{ color: '#64748b', transition: 'color 0.2s' }} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" style={{ color: '#64748b', transition: 'color 0.2s' }} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
            <Link to="/features" className="footer-link">Features</Link>
            <Link to="/pricing" className="footer-link">Pricing</Link>
            <Link to="/download" className="footer-link">Download</Link>
            <Link to="/changelog" className="footer-link">Changelog</Link>
          </div>

          {/* Resources Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resources</h4>
            <Link to="/dsa" className="footer-link">DSA Pattern Guide</Link>
            <Link to="/faq" className="footer-link">Help Center / FAQ</Link>
            <Link to="/contact" className="footer-link">Contact Support</Link>
            <a href="mailto:support@algovault.dev" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
              <Mail size={16} /> support@algovault.dev
            </a>
          </div>

          {/* Legal Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/refund" className="footer-link">Refund Policy</Link>
            <Link to="/license-agreement" className="footer-link">EULA</Link>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            © {currentYear} AlgoVault. All rights reserved. Built with precision for engineers.
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #00f0ff;
        }

        .footer-link:focus-visible {
          outline: 2px solid #00f0ff;
          outline-offset: 4px;
          border-radius: 2px;
        }
      `}</style>
    </footer>
  );
};
