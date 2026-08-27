import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const IntroLoader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasCompleted, setHasCompleted] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        return sessionStorage.getItem('Prasanna_intro_seen') === 'true';
      }
    } catch {
      return false;
    }
    return false;
  });

  useEffect(() => {
    if (hasCompleted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHasCompleted(true);
          try {
            sessionStorage.setItem('Prasanna_intro_seen', 'true');
          } catch {
            // Ignore storage errors on local or restricted environments
          }
        },
      });

      // Animated counter from 0 to 100
      const counterObj = { val: 0 };
      
      tl.to(counterObj, {
        val: 100,
        duration: 1.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = String(Math.floor(counterObj.val)).padStart(2, '0');
          }
        },
      })
      .to('.intro-text-line', {
        yPercent: -100,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.in',
      }, '-=0.2')
      .to('.intro-blade', {
        yPercent: -100,
        duration: 1.0,
        stagger: {
          each: 0.07,
          from: 'start',
        },
        ease: 'expo.inOut',
      }, '-=0.1')
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
      }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, [hasCompleted]);

  if (hasCompleted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] pointer-events-auto flex flex-col justify-between overflow-hidden"
    >
      {/* 5 Column Shutter Blades */}
      <div className="absolute inset-0 flex z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="intro-blade flex-1 h-full bg-[#0a0a0a] border-r border-brand-white/[0.06] last:border-r-0"
          />
        ))}
      </div>

      {/* Intro Text & Counter Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-8 md:p-14 text-brand-white select-none pointer-events-none">
        <div className="flex items-center justify-between font-mono text-xs tracking-widest text-brand-gray uppercase overflow-hidden">
          <div className="intro-text-line flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PORTFOLIO ARCHIVE // 2026</span>
          </div>
          <div className="intro-text-line hidden sm:block">
            [ Prasanna S — CREATIVE TECHNOLOGIST ]
          </div>
        </div>

        <div className="flex flex-col items-start my-auto">
          <div className="overflow-hidden mb-2">
            <h2 className="intro-text-line text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter uppercase">
              Prasanna<span className="text-brand-gray">.</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="intro-text-line font-serif italic text-xl sm:text-2xl md:text-3xl text-brand-white/80">
              creative technologist & elevated identity
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-brand-white/10 pt-6 overflow-hidden">
          <div className="intro-text-line font-mono text-xs text-brand-gray">
            INITIALIZING ASSETS & MOTION
          </div>
          <div className="intro-text-line flex items-baseline gap-1 font-mono text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums">
            <span ref={counterRef}>00</span>
            <span className="text-brand-gray text-base sm:text-lg">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
