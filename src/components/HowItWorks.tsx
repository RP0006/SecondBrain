import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../data/config';
import type { HowItWorksStep } from '../data/config';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" style={{ padding: 'var(--section-padding, 120px) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-up visible">
          <span className="section-tag">Methodology</span>
          <h2 className="section-title">
            The <span className="text-gradient">4-Step</span> Process
          </h2>
          <p className="section-desc">
            A proven feedback loop designed to build deep algorithmic intuition and eliminate the anxiety
            of forgetting previous solutions.
          </p>
        </div>

        {/* 4-Step Cards Grid - Cleaner Design */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {APP_CONFIG.howItWorks.map((step: HowItWorksStep, idx) => (
            <div
              key={step.stepNumber}
              className={`glass-card fade-in-up visible stagger-${idx + 1}`}
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              {/* Step indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(255, 255, 255, 0.06)',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {step.stepNumber}
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(0, 240, 255, 0.08)',
                    color: '#00f0ff',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                  }}
                >
                  {step.metric}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, flexGrow: 1, marginBottom: '24px' }}>
                {step.description}
              </p>

              {/* Code/Tag pill */}
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(4, 6, 12, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: '#38bdf8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                <code>{step.codeOrTag}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="fade-in-up visible stagger-5">
          <div
            style={{
              marginTop: '64px',
              padding: '32px 40px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(8, 12, 24, 0.8) 0%, rgba(4, 6, 12, 1) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              boxShadow: '0 16px 32px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Ready to stop forgetting patterns?
              </div>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                Join engineers from top tech companies using AlgoVault daily.
              </div>
            </div>

            <a href="#download" className="btn-primary" style={{ padding: '14px 28px' }}>
              <span>Get Started</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
