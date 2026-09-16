import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Staff Software Engineer',
    company: 'Meta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    quote: 'AlgoVault opens in 100ms offline. Logging problem invariants and pitfalls saved me during my E6 system coding rounds. The spaced repetition makes it impossible to forget patterns.',
    metric: 'E6',
    metricLabel: 'Offer Secured'
  },
  {
    id: 't2',
    name: 'Aditya V. Sharma',
    role: 'SDE II',
    company: 'Amazon',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: 'Instead of re-solving 400 problems blindly every 6 months, a 15-minute daily invariant warmup keeps all 24 core patterns razor-sharp. Best investment I made this year.',
    metric: '15m',
    metricLabel: 'Daily Review Time'
  },
  {
    id: 't3',
    name: 'David Keller',
    role: 'Quant Execution Engineer',
    company: 'Citadel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    quote: 'Zero telemetry and native speed. The local Markdown files sit directly in my private Git repo. You own your data completely. Worth 10x the price.',
    metric: '100%',
    metricLabel: 'Local & Private'
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section style={{ padding: 'var(--section-padding, 120px) 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header fade-in-up visible">
          <span className="section-tag">Proof of Work</span>
          <h2 className="section-title">
            Loved by <span className="text-gradient">Top Engineers</span>
          </h2>
          <p className="section-desc">
            Join thousands of developers turning interview anxiety into systematic pattern recognition.
          </p>
        </div>

        {/* Featured CSS Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`glass-card fade-in-up visible stagger-${idx + 1}`}
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div>
                <Quote size={28} color="rgba(0, 240, 255, 0.4)" style={{ marginBottom: '24px' }} />

                <p style={{
                  fontSize: '1.05rem',
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  fontWeight: 400
                }}>
                  "{t.quote}"
                </p>

                {/* Highlight Metric if present */}
                {t.metric && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '32px',
                    padding: '12px 16px',
                    background: 'rgba(0, 240, 255, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 240, 255, 0.1)',
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00f0ff', lineHeight: 1 }}>
                      {t.metric}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                      {t.metricLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '24px'
              }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    {t.role} at <span style={{ color: '#00f0ff' }}>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
