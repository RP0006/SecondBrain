import React from 'react';
import {
  FolderGit2,
  Network,
  PenTool,
  Repeat,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { APP_CONFIG } from '../data/config';
import type { FeatureItem } from '../data/config';

const iconMap: Record<string, React.ReactNode> = {
  FolderGit2: <FolderGit2 size={24} color="#00f0ff" />,
  Network: <Network size={24} color="#38bdf8" />,
  PenTool: <PenTool size={24} color="#00f0ff" />,
  Repeat: <Repeat size={24} color="#38bdf8" />,
  Zap: <Zap size={24} color="#00f0ff" />,
  TrendingUp: <TrendingUp size={24} color="#38bdf8" />,
};

// Simplified metric data to pair with config features
const metricData: Record<string, string> = {
  'problem-management': '0ms',
  'dsa-patterns': '24+',
  'notes-pitfalls': '3x',
  'revision-engine': '94%',
  'search-filter': '<1ms',
  'progress-analytics': '360°'
};

export const Features: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="features" style={{ padding: 'var(--section-padding, 120px) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-header fade-in-up visible">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">
            Built for Engineers Who <span className="text-gradient">Demand Mastery</span>
          </h2>
          <p className="section-desc">
            Stop losing track of solutions in scattered Notion pages. Everything you need to
            build deep algorithmic intuition, organized beautifully.
          </p>
        </div>

        {/* Feature Grid - Minimalist Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {APP_CONFIG.features.map((feature: FeatureItem, index) => (
            <div
              key={feature.id}
              className={`glass-card fade-in-up visible stagger-${(index % 6) + 1}`}
              onMouseMove={handleMouseMove}
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Top Row: Icon + Large Metric */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(0, 240, 255, 0.05)',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px -8px rgba(0, 240, 255, 0.2)',
                  }}
                >
                  {iconMap[feature.iconName] || <Zap size={24} color="#00f0ff" />}
                </div>

                {/* Big Number Metric instead of standard badge */}
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.08)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1,
                  }}
                >
                  {metricData[feature.id] || '∞'}
                </span>
              </div>

              {/* Title & Description */}
              <div style={{ flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#f8fafc',
                    marginBottom: '8px',
                  }}
                >
                  {feature.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#00f0ff',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  {feature.tagline}
                </div>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#94a3b8',
                    lineHeight: 1.65,
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Minimal Accent Line */}
              <div
                style={{
                  marginTop: '24px',
                  height: '2px',
                  width: '32px',
                  background: 'linear-gradient(90deg, #00f0ff, transparent)',
                  borderRadius: '2px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
