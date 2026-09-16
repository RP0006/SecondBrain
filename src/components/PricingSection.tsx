import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';
import { APP_CONFIG, PricingPlan } from '../data/config';
import { CheckoutModal } from './CheckoutModal';
import { Link } from 'react-router-dom';

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<{
    id: 'pro_lifetime' | 'pro_annual';
    name: string;
    amountInr: number;
  } | null>(null);

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.id === 'free_trial') {
      window.location.href = '#download';
      return;
    }
    setSelectedPlanForCheckout({
      id: plan.id,
      name: plan.name,
      amountInr: plan.priceInr,
    });
  };

  return (
    <section id="pricing" style={{ padding: 'var(--section-padding, 120px) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-up visible">
          <span className="section-tag">Straightforward Pricing</span>
          <h2 className="section-title">
            Invest Once in Your <span className="text-gradient">Career Vault</span>
          </h2>
          <p className="section-desc">
            No recurring subscription traps. Your notes, invariants, and problem diffs
            stored offline on your workstation forever.
          </p>

          {/* Currency Toggle Component */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              padding: '6px',
              marginTop: '32px',
            }}
          >
            <button
              onClick={() => setCurrency('INR')}
              style={{
                padding: '8px 24px',
                borderRadius: '9999px',
                border: 'none',
                background: currency === 'INR' ? '#fff' : 'transparent',
                color: currency === 'INR' ? '#030508' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '8px 24px',
                borderRadius: '9999px',
                border: 'none',
                background: currency === 'USD' ? '#fff' : 'transparent',
                color: currency === 'USD' ? '#030508' : '#94a3b8',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - Minimalist approach */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center', // Center vertically so middle card pops
            marginBottom: '64px',
            maxWidth: '1000px',
            margin: '0 auto 64px auto',
          }}
        >
          {APP_CONFIG.pricing.map((plan) => {
            const isPopular = plan.popular;
            const priceDisplay = currency === 'INR' ? `₹${plan.priceInr.toLocaleString()}` : `$${plan.priceUsd}`;

            // Generate a fake original price for urgency on the popular plan
            const originalPriceDisplay = currency === 'INR'
              ? `₹${(plan.priceInr * 2).toLocaleString()}`
              : `$${(plan.priceUsd * 2)}`;

            return (
              <div
                key={plan.id}
                className="glass-card fade-in-up visible"
                style={{
                  position: 'relative',
                  padding: isPopular ? '48px 32px' : '40px 32px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isPopular ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  boxShadow: isPopular
                    ? '0 24px 48px -12px rgba(0, 0, 0, 0.8), 0 0 32px -8px rgba(0, 240, 255, 0.15)'
                    : 'var(--shadow-card)',
                  background: isPopular
                    ? 'linear-gradient(180deg, rgba(8, 12, 24, 0.95) 0%, rgba(4, 6, 12, 0.95) 100%)'
                    : 'rgba(4, 6, 12, 0.6)',
                  zIndex: isPopular ? 2 : 1,
                  transform: isPopular ? 'scale(1.03)' : 'none',
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#00f0ff',
                      color: '#030508',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '6px 16px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 16px rgba(0, 240, 255, 0.4)',
                    }}
                  >
                    Best Value
                  </div>
                )}

                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', minHeight: '44px', marginBottom: '32px', lineHeight: 1.6 }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '32px' }}>
                    {isPopular && (
                      <div style={{ fontSize: '0.9rem', color: '#64748b', textDecoration: 'line-through', marginBottom: '4px' }}>
                        {originalPriceDisplay}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '3.2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        {priceDisplay}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#00f0ff', fontWeight: 600, marginTop: '8px' }}>
                      {plan.billingPeriod}
                    </div>
                  </div>

                  {/* Bullet Points - Limited to top 5 for clean look */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                    {plan.features.slice(0, 5).map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        <Check size={18} color={isPopular ? "#00f0ff" : "#64748b"} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ lineHeight: 1.5 }}>{feat}</span>
                      </li>
                    ))}
                    {plan.features.length > 5 && (
                      <li style={{ fontSize: '0.8rem', color: '#64748b', paddingLeft: '30px', fontStyle: 'italic' }}>
                        + {plan.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={isPopular ? 'btn-primary' : 'btn-secondary'}
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1rem',
                    }}
                  >
                    {isPopular && <Sparkles size={18} />}
                    <span>{plan.ctaLabel}</span>
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.74rem', color: '#64748b', marginTop: '12px', fontWeight: 500 }}>
                    {plan.ctaSubtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Trust Banner - Ultra Minimal */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '24px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ShieldCheck size={24} color="#10b981" style={{ opacity: 0.8 }} />
          <div>
            <span style={{ color: '#fff', fontWeight: 600, marginRight: '8px' }}>
              30-Day Money-Back Guarantee.
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Instant refund if you're not satisfied. <Link to="/refund" style={{ color: '#00f0ff', textDecoration: 'none' }}>Learn more</Link>.
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          isOpen={Boolean(selectedPlanForCheckout)}
          onClose={() => setSelectedPlanForCheckout(null)}
          planId={selectedPlanForCheckout.id}
          planName={selectedPlanForCheckout.name}
          amountInr={selectedPlanForCheckout.amountInr}
        />
      )}
    </section>
  );
};
