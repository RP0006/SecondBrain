import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  algovault: boolean | string;
  notion: boolean | string;
  obsidian: boolean | string;
  spreadsheet: boolean | string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: '100% Offline-First Desktop App',
    algovault: true,
    notion: false,
    obsidian: true,
    spreadsheet: 'partial',
  },
  {
    feature: 'Native Code Editor with Syntax Highlighting',
    algovault: true,
    notion: false,
    obsidian: 'plugin',
    spreadsheet: false,
  },
  {
    feature: 'SM-2 Spaced Repetition Engine',
    algovault: true,
    notion: false,
    obsidian: 'plugin',
    spreadsheet: false,
  },
  {
    feature: 'DSA Pattern Taxonomy (24+ patterns)',
    algovault: true,
    notion: false,
    obsidian: false,
    spreadsheet: false,
  },
  {
    feature: 'One-Click LeetCode/Codeforces Import',
    algovault: true,
    notion: false,
    obsidian: false,
    spreadsheet: false,
  },
  {
    feature: 'Sub-1ms Fuzzy Search',
    algovault: true,
    notion: false,
    obsidian: true,
    spreadsheet: false,
  },
  {
    feature: 'Progress Analytics & Heatmaps',
    algovault: true,
    notion: false,
    obsidian: 'plugin',
    spreadsheet: 'manual',
  },
  {
    feature: 'Zero Telemetry & Data Privacy',
    algovault: true,
    notion: false,
    obsidian: true,
    spreadsheet: 'partial',
  },
];

const CellIcon: React.FC<{ value: boolean | string }> = ({ value }) => {
  if (value === true) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
        }}
      >
        <Check size={14} color="#10b981" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
        }}
      >
        <X size={14} color="#ef4444" />
      </div>
    );
  }
  return (
    <span
      style={{
        fontSize: '0.72rem',
        fontWeight: 600,
        color: '#f59e0b',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      }}
    >
      {typeof value === 'string' ? value : ''}
    </span>
  );
};

export const ComparisonTable: React.FC = () => {
  return (
    <section style={{ padding: 'var(--section-padding, 120px) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Why AlgoVault</span>
          <h2 className="section-title">
            Built Different from{' '}
            <span className="text-gradient">Generic Tools</span>
          </h2>
          <p className="section-desc">
            There's a reason engineers switch from Notion docs and spreadsheets.
            Purpose-built tools outperform general-purpose ones.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          style={{
            borderRadius: '16px',
            border: '1px solid rgba(56, 189, 248, 0.1)',
            overflow: 'hidden',
            background: 'rgba(4, 6, 16, 0.5)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 120px 120px 120px 120px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 24px',
              gap: '8px',
            }}
          >
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#94a3b8',
              }}
            >
              Feature
            </div>
            {['AlgoVault', 'Notion', 'Obsidian', 'Spreadsheet'].map((tool) => (
              <div
                key={tool}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: tool === 'AlgoVault' ? '#00f0ff' : '#94a3b8',
                  letterSpacing: '0.02em',
                }}
              >
                {tool}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {COMPARISON_DATA.map((row, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 120px 120px 120px 120px',
                padding: '14px 24px',
                borderBottom:
                  index < COMPARISON_DATA.length - 1
                    ? '1px solid rgba(255, 255, 255, 0.03)'
                    : 'none',
                gap: '8px',
                alignItems: 'center',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div
                style={{
                  fontSize: '0.88rem',
                  color: '#e2e8f0',
                  fontWeight: 500,
                }}
              >
                {row.feature}
              </div>
              {[row.algovault, row.notion, row.obsidian, row.spreadsheet].map(
                (val, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <CellIcon value={val} />
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        {/* Mobile Overflow Notice */}
        <style>{`
          @media (max-width: 768px) {
            .container > div:has(> div[style*="grid-template-columns"]) {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
