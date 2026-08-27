import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      // Target transition shutter columns
      const panels = gsap.utils.toArray<HTMLElement>('.gsap-transition-column');
      const lines = gsap.utils.toArray<HTMLElement>('.gsap-transition-accent');

      if (panels.length > 0) {
        // Reset starting position for columns
        gsap.set(panels, {
          scaleY: 1,
          transformOrigin: 'bottom',
        });
        if (lines.length > 0) {
          gsap.set(lines, { opacity: 1, scaleX: 1 });
        }

        // Animate panels collapsing smoothly towards top
        tl.to(panels, {
          scaleY: 0,
          duration: 0.85,
          stagger: {
            amount: 0.2,
            from: 'start',
            ease: 'power2.inOut',
          },
          ease: 'expo.inOut',
          transformOrigin: 'top',
        })
        .to(lines, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        }, '-=0.5');
      }

      // Content fade in with subtle upward slide
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          opacity: 0,
          y: 24,
          filter: 'blur(4px)',
        });

        tl.to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.65'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* Sleek GSAP Shutter Overlays */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 z-[99999] pointer-events-none flex"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="gsap-transition-column flex-1 h-full bg-[#0a0a0a] border-r border-brand-white/[0.07] last:border-r-0 relative"
          >
            <div className="gsap-transition-accent absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-white/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Page Content */}
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
};
