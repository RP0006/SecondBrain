import React from 'react';
import { Shield, Users, Database, Gift } from 'lucide-react';

interface TrustStats {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
}

const TRUST_STATS: TrustStats[] = [
  { label: 'Users', value: '2,500+', icon: Users },
  { label: 'Problems Logged', value: '150K+', icon: Database },
  { label: 'Retention Rate', value: '94%', icon: Shield },
  { label: 'Satisfaction', value: '4.9★', icon: Gift }
];

export const TrustBar: React.FC = () => {
  return (
    <section style={{ padding: '48px 0', position: 'relative' }}>
      <div className="container">
        {/* Metrics Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {TRUST_STATS.map((stat, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 20px',
                background: 'rgba(10, 15, 30, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.1)',
                borderRadius: '16px',
                minWidth: '180px',
                flex: '1',
                boxSizing: 'border-box'
              }}
            >
              <stat.icon
                size={20}
                color="#00f0ff"
                style={{ flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#94a3b8' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                opacity: 0.3,
                transition: 'opacity 0.3s ease',
                filter: 'grayscale(100%)'
              }}
            >
              {/* Placeholder for actual company logos */}
              <div
                style={{
                  width: '80px',
                  height: '32px',
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(37,99,235,0.15) 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#00f0ff'
                }}
              >
                Company
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};