import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';
import { CheckoutModal } from './CheckoutModal';

const DSA_PATTERNS = [
  'Two Pointers',
  'Monotonic Stack',
  'Sliding Window',
  'Binary Search',
  'Dynamic Programming',
  'Graph BFS & DFS',
  'Backtracking',
  'Trie & Prefix Trees',
];

export const Hero: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [currentPattern, setCurrentPattern] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typing animation effect
  useEffect(() => {
    const pattern = DSA_PATTERNS[currentPattern];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < pattern.length) {
        timeout = setTimeout(() => {
          setDisplayText(pattern.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentPattern((prev) => (prev + 1) % DSA_PATTERNS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPattern]);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: '180px',
        paddingBottom: '60px',
        position: 'relative',
        textAlign: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Social Proof Badge */}
        <div
          className="badge-pill"
          style={{
            marginBottom: '32px',
            animation: 'slideUpFade 0.6s ease forwards',
          }}
        >
          <span className="pulse-dot" />
          <span>2,500+ engineers mastering DSA patterns</span>
        </div>

        {/* Hero Headline — Large, Bold, Minimal */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.045em',
            maxWidth: '900px',
            marginBottom: '28px',
            animation: 'slideUpFade 0.6s ease 0.1s forwards',
            opacity: 0,
          }}
        >
          Your Personal{' '}
          <span className="text-gradient" style={{ display: 'inline' }}>
            DSA Knowledge
          </span>
          <br />
          <span className="text-gradient-electric text-glow">Vault.</span>
        </h1>

        {/* Subtitle — Clean, Concise */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#94a3b8',
            maxWidth: '640px',
            lineHeight: 1.7,
            marginBottom: '40px',
            fontWeight: 400,
            animation: 'slideUpFade 0.6s ease 0.2s forwards',
            opacity: 0,
          }}
        >
          Save problems, record invariants, organize by{' '}
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>
            DSA patterns
          </span>
          , and revise with{' '}
          <span style={{ color: '#00f0ff', fontWeight: 600 }}>
            spaced repetition
          </span>{' '}
          — all offline on your desktop.
        </p>

        {/* Animated Pattern Typing */}
        <div
          style={{
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            background: 'rgba(0, 240, 255, 0.04)',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            borderRadius: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            animation: 'slideUpFade 0.6s ease 0.3s forwards',
            opacity: 0,
          }}
        >
          <span style={{ color: '#64748b' }}>pattern:</span>
          <span style={{ color: '#00f0ff', fontWeight: 600, minWidth: '200px', textAlign: 'left' }}>
            {displayText}
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '16px',
                background: '#00f0ff',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'pulseDot 1s infinite',
              }}
            />
          </span>
        </div>

        {/* Primary CTA — Single Focus */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            animation: 'slideUpFade 0.6s ease 0.4s forwards',
            opacity: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '560px',
            }}
          >
            <button
              onClick={() => setShowCheckout(true)}
              className="btn-primary"
              style={{
                flex: '1 1 260px',
                minWidth: '240px',
                cursor: 'pointer',
                padding: '16px 32px',
                fontSize: '1rem',
              }}
              title="Buy AlgoVault Pro Lifetime License"
              id="hero-buy-pro"
            >
              <Sparkles size={20} />
              <span>Get Pro Lifetime — ₹1,499</span>
            </button>

            <Link
              to="/download"
              className="btn-secondary"
              style={{
                flex: '1 1 200px',
                minWidth: '180px',
                textDecoration: 'none',
              }}
              title="Download Free Community Edition"
              id="hero-download-free"
            >
              <Zap size={18} color="#38bdf8" />
              <span>Try Free</span>
            </Link>
          </div>

          {/* Sub-CTA Text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: '#64748b',
            }}
          >
            <ShieldCheck size={14} color="#10b981" />
            <span>30-day money-back guarantee · No subscription</span>
          </div>
        </div>

        {/* Trust Badges — Compact */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '28px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.84rem',
            color: '#64748b',
            animation: 'slideUpFade 0.6s ease 0.5s forwards',
            opacity: 0,
          }}
        >
          {[
            { label: '100% Offline-First', icon: CheckCircle2 },
            { label: 'SM-2 Spaced Repetition', icon: CheckCircle2 },
            { label: 'macOS · Windows · Linux', icon: CheckCircle2 },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <item.icon size={14} color="#00f0ff" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          isOpen={showCheckout}
          onClose={() => setShowCheckout(false)}
          planId="pro_lifetime"
          planName="AlgoVault Pro — Lifetime License"
          amountInr={1499}
        />
      )}
    </section>
  );
};
