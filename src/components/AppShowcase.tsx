import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { APP_CONFIG } from '../data/config';

interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: 'pattern-taxonomy',
    title: 'Organize by 24+ DSA Patterns',
    description: 'Map problems to core algorithmic invariants instead of random LeetCode numbers.',
    imagePlaceholder: 'taxanomy-demo',
  },
  {
    id: 'spaced-repetition',
    title: 'SM-2 Spaced Repetition Engine',
    description: 'Review problems right before you forget them with science-backed revision intervals.',
    imagePlaceholder: 'srs-demo',
  },
  {
    id: 'code-editor',
    title: 'Native Code with Syntax Highlighting',
    description: 'Store your intuition, pitfalls, and optimal code in beautifully rendered Markdown.',
    imagePlaceholder: 'editor-demo',
  },
  {
    id: 'analytics',
    title: 'Visual Progress Heatmaps',
    description: 'Track your pattern mastery and interview readiness with detailed analytics.',
    imagePlaceholder: 'analytics-demo',
  },
];

export const AppShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsPlaying(false);
  };

  return (
    <section id="showcase" style={{ padding: '40px 0 100px', position: 'relative' }}>
      <div className="container">
        {/* Carousel Container */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            padding: '8px',
            background: 'rgba(4, 6, 12, 0.85)',
          }}
        >
          {/* Main Visual Asset Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, rgba(8, 12, 24, 1) 0%, rgba(4, 6, 12, 1) 100%)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            {/* Play Video Overlay Button */}
            <a
              href={APP_CONFIG.demoVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                color: '#fff',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.15)';
              }}
            >
              <Play size={32} fill="rgba(0, 240, 255, 0.8)" style={{ marginLeft: '4px' }} />
            </a>

            {/* Placeholder Content for Current Slide */}
            <div
              key={currentSlide}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: 0.6,
              }}
            >
              {/* NOTE: Replace this placeholder block with actual <img> or <video> tags
                  when you have the real app screenshots/GIFs.
                  Make sure they fill the container (width: 100%, height: 100%, object-fit: cover) */}

              <div style={{
                padding: '24px 32px',
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px dashed rgba(0, 240, 255, 0.3)',
                borderRadius: '16px',
                textAlign: 'center',
                maxWidth: '80%',
              }}>
                <div style={{ color: '#00f0ff', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                  [{SLIDES[currentSlide].imagePlaceholder}.mp4]
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                  {SLIDES[currentSlide].title}
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  {SLIDES[currentSlide].description}
                </p>
                <div style={{ marginTop: '24px', fontSize: '0.8rem', color: '#64748b' }}>
                  User: Replace this placeholder container with actual GIF/Video in src/components/AppShowcase.tsx
                </div>
              </div>
            </div>

            {/* Navigation Controls Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                display: 'flex',
                gap: '8px',
                zIndex: 10,
              }}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(4, 6, 12, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={handlePrev}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(4, 6, 12, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(4, 6, 12, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Indicator Strip */}
          <div
            style={{
              display: 'flex',
              padding: '16px',
              gap: '12px',
            }}
          >
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPlaying(false);
                }}
                style={{
                  flex: '1',
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: '12px',
                  borderRadius: '12px',
                  transition: 'background 0.3s ease',
                  backgroundColor: currentSlide === idx ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                }}
              >
                <div
                  style={{
                    height: '2px',
                    width: '100%',
                    background: currentSlide === idx ? '#00f0ff' : 'rgba(255, 255, 255, 0.1)',
                    marginBottom: '12px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Progress bar animation when playing */}
                  {currentSlide === idx && isPlaying && (
                    <div
                      style={{
                        height: '100%',
                        background: '#fff',
                        width: '100%',
                        animation: 'progress 5s linear',
                        transformOrigin: 'left',
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: currentSlide === idx ? '#fff' : '#94a3b8',
                    marginBottom: '4px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {slide.title}
                </div>
                {/* Optional: Show description only on active slide on desktop */}
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#64748b',
                    display: 'none',
                    /* You can toggle this based on breakpoints if desired */
                  }}
                >
                  {slide.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};
