import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const isHoveredRef = useRef(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring configuration (ultra-smooth, reactive, zero overshoot lag)
  const springConfig = { damping: 28, stiffness: 320, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktops/laptops)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );

      if (isHoveredRef.current !== isInteractive) {
        isHoveredRef.current = isInteractive;
        setIsHovered(isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden hidden md:block">
      {/* Outer Smooth Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/40 pointer-events-none mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
          willChange: 'transform',
        }}
        animate={{
          scale: isPressed ? 0.85 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{
          duration: 0.18,
          ease: 'easeOut',
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

