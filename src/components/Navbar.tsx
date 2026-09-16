import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Sun, Moon, LogOut, ArrowRight, LayoutDashboard, Shield } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<'dark' | 'electric'>('dark');

  const { user, isAdmin, hasProLicense, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = themeMode === 'dark' ? 'electric' : 'dark';
    setThemeMode(next);
    if (next === 'electric') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Downloads', path: '/download' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
        background: scrolled ? 'rgba(3, 5, 8, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
              Algo<span style={{ color: '#00f0ff' }}>Vault</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                color: location.pathname === link.path ? '#00f0ff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseOut={(e) => (e.currentTarget.style.color = location.pathname === link.path ? '#00f0ff' : '#94a3b8')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Auth CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* User Auth CTAs */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desktop-nav">
              <Link
                to="/dashboard"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 600,
                }}
              >
                <span>Dashboard</span>
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-nav">
              <Link
                to="/login"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                Sign In
              </Link>

              <Link
                to="/pricing"
                className="btn-primary"
                style={{
                  padding: '10px 20px',
                  fontSize: '0.9rem',
                }}
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
