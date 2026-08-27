import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrasannaImg from '../assets/prasanna.png';

const LiveClock = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-xs tracking-wider text-brand-white/80 tabular-nums">
      {timeString || '12:00:00'} <span className="text-brand-gray text-[10px]">IST (UTC+5:30)</span>
    </span>
  );
};

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headlineItemVariants = {
  hidden: { opacity: 0, y: 35, skewY: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const bentoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.45,
    },
  },
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse motion values for smooth hardware-accelerated 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const imageTiltX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const imageTiltY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const imageMoveX = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const imageMoveY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const textShiftX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-80, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const bottomItems = [
    { id: '01', title: 'Creative Direction', desc: 'Ideas, identities & visual experiences' },
    { id: '02', title: 'Design Engineering', desc: 'Digital products, interfaces & technology' },
    { id: '03', title: 'Growth & Strategy', desc: 'Marketing, SEO & customer experiences' },
    { id: '04', title: 'Community & Execution', desc: 'Events, partnerships & bringing ideas to life' },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-brand-black pt-28 md:pt-36 pb-12 selection:bg-brand-white selection:text-brand-black"
    >
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] rounded-full bg-gradient-to-tr from-brand-white/[0.04] via-brand-white/[0.02] to-transparent blur-[140px] pointer-events-none z-0"
      />

      {/* Subtle Noise / Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Top Architectural Metabar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-full bg-brand-white/[0.03] border border-brand-white/10 backdrop-blur-md text-xs"
        >
          {/* Availability Status */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-brand-white/90 tracking-wide">
              OPEN FOR COLLABORATIONS <span className="text-brand-gray hidden sm:inline">- 2026/2027</span>
            </span>
          </div>

          {/* Location & Live Clock */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-brand-gray">
              <Compass size={13} className="text-brand-white/60 animate-spin-slow" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Prasanna, TN</span>
            </div>
            <span className="text-brand-white/20">/</span>
            <LiveClock />
          </div>
        </motion.div>
      </div>

      {/* Main Content Layout with Staggered Framer Motion Reveal */}
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative my-auto py-6">

          {/* Left Hero Text Column */}
          <motion.div
            style={{ x: textShiftX }}
            className="lg:col-span-6 z-20 flex flex-col justify-center"
          >
            {/* Staggered Eyebrow Badge */}
            <motion.div
              variants={headlineItemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <span className="px-3 py-1 rounded-full bg-brand-white/10 text-brand-white text-[11px] font-mono uppercase tracking-widest border border-brand-white/15">
                Creative Technologist
              </span>
              <span className="text-brand-gray text-xs tracking-wider uppercase font-mono">

              </span>
            </motion.div>

            {/* Staggered Main Headline */}
            <motion.div
              variants={headlineItemVariants}
              className="overflow-hidden"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.88] uppercase mb-8 select-none">
                <span className="inline-block">IDEAS</span>
                <br />
                <span className="font-serif italic font-normal tracking-tight lowercase text-brand-white/90 inline-block">
                  into impact
                </span>
                <span className="text-brand-gray text-5xl md:text-7xl font-sans">.</span>
              </h1>
            </motion.div>

            {/* Staggered Lead Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-brand-white/70 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-lg mb-8"
            >
              I design and build distinctive digital experiences where strategy, design, and technology come together.
            </motion.p>

            {/* Staggered CTA Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-7 py-3.5 rounded-full bg-brand-white text-brand-black font-semibold text-sm flex items-center gap-2 hover:bg-brand-white/90 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Explore Selected Works</span>
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-brand-white/5 border border-brand-white/15 text-brand-white font-medium text-sm hover:bg-brand-white/10 hover:border-brand-white/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Initiate Project</span>
                <ArrowUpRight size={15} className="text-brand-gray" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Central / Right Interactive Visual */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[580px]"
          >
            {/* Architectural Frame Markers */}
            <div className="absolute top-4 left-4 text-brand-white/20 font-mono text-[10px] tracking-widest hidden sm:block">
              [ 13.0827° N, 80.2707° E ]
            </div>
            <div className="absolute bottom-4 right-4 text-brand-white/20 font-mono text-[10px] tracking-widest hidden sm:block">
              [ CRAFT & CRAFTSMANSHIP ]
            </div>

            {/* 3D Tilted Centerpiece Portrait Container */}
            <motion.div
              style={{
                rotateX: imageTiltX,
                rotateY: imageTiltY,
                x: imageMoveX,
                y: imageMoveY,
                transformPerspective: 1200,
              }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-brand-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] group bg-brand-white/[0.02]"
            >
              <img
                src={PrasannaImg}
                alt="Creative Director Portrait"
                className="w-full h-full object-cover grayscale brightness-95 contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/20 opacity-80" />

              {/* Floating Floating Pill in portrait */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-black/80 backdrop-blur-xl border border-brand-white/15 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-brand-white tracking-tight text-sm">Prasanna S</div>
                  <div className="text-brand-gray text-[11px]">Independent Creative Direction</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-white/10 border border-brand-white/10 text-[10px] font-mono text-brand-white">
                  <Sparkles size={11} className="text-brand-white" />
                  <span>5+ YRS</span>
                </div>
              </div>
            </motion.div>

            {/* Background Accent Rings */}
            <div className="absolute -inset-4 border border-brand-white/[0.04] rounded-full pointer-events-none scale-90 -z-10" />
            <div className="absolute -inset-16 border border-brand-white/[0.02] rounded-full pointer-events-none scale-90 -z-10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Capabilities Bento Row with Staggered Entrance */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-6 md:mt-10">
        <motion.div
          variants={bentoContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-6 border-t border-brand-white/10"
        >
          {bottomItems.map((item) => (
            <motion.div
              key={item.id}
              variants={bentoItemVariants}
              className="group p-4 rounded-2xl bg-brand-white/[0.02] hover:bg-brand-white/[0.05] border border-transparent hover:border-brand-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-bold text-brand-white/40 group-hover:text-brand-white transition-colors">
                  #{item.id}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-white/20 group-hover:bg-brand-white transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

