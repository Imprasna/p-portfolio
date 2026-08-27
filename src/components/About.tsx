import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Sparkles, Compass, CheckCircle2, Building2, ArrowRight, Eye } from 'lucide-react';
import PrasannaImg from '../assets/prasanna.png';

export const About: React.FC = () => {
  const story = portfolioData.aboutStory;

  const intersections = story?.intersections || [
    'Design',
    'Technology',
    'Creativity',
    'Business'
  ];

  const industries = story?.industries || [
    'Finance',
    'Healthcare',
    'Wellness',
    'Fashion',
    'Technology',
    'Digital Marketing'
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-12 md:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
        
        {/* Main Hero Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Visual Portrait */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-brand-white/10 shadow-2xl group">
              <img 
                src={PrasannaImg} 
                alt="Prasanna Portrait" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-white/20 text-xs font-mono text-brand-white mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-white animate-pulse" />
                  <span>Multidisciplinary Builder</span>
                </div>
                <p className="text-sm text-brand-white/90 font-medium">
                  Lisbon & Porto, Portugal • Available Worldwide
                </p>
              </div>
            </div>

            {/* 4 Convergence Anchors */}
            <div className="p-6 rounded-3xl bg-brand-white/[0.02] border border-brand-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-brand-gray/70">
                <span className="flex items-center gap-2">
                  <Compass size={14} className="text-brand-white" />
                  <span>Core Convergence</span>
                </span>
                <span>4 Pillars</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {intersections.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-2xl bg-brand-white/[0.03] border border-brand-white/5 flex items-center gap-2 text-xs font-medium text-brand-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-white/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-white/[0.02] border border-brand-white/5">
                <div className="text-brand-gray text-[10px] font-mono uppercase mb-1">Experience</div>
                <div className="text-lg font-bold text-brand-white">5+ Yrs</div>
              </div>
              <div className="p-4 rounded-2xl bg-brand-white/[0.02] border border-brand-white/5">
                <div className="text-brand-gray text-[10px] font-mono uppercase mb-1">Global Clients</div>
                <div className="text-lg font-bold text-brand-white">50+</div>
              </div>
              <div className="p-4 rounded-2xl bg-brand-white/[0.02] border border-brand-white/5">
                <div className="text-brand-gray text-[10px] font-mono uppercase mb-1">Disciplines</div>
                <div className="text-lg font-bold text-brand-white">4 Fields</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-10"
          >
            {/* Header / Main Statement */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-xs font-mono uppercase tracking-widest text-brand-gray">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-white" />
                <span>Biography & Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-white leading-[1.08]">
                I’m a Creative Who Likes to Build Things.
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-brand-white/90 font-medium font-serif italic tracking-tight pt-2">
                "I’ve never been someone who wanted to stay inside just one box."
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-brand-gray text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I’m fascinated by the space where <strong className="text-brand-white font-medium">design, technology, creativity, and business</strong> come together. That curiosity has taken me from designing brands and visual identities to building websites, creating digital experiences, developing marketing campaigns, and figuring out how to turn an idea into something people can actually see, use, and connect with.
              </p>

              {/* Callout Transition Banner */}
              <div className="my-8 p-6 md:p-8 rounded-3xl bg-brand-white/[0.03] border-l-2 border-brand-white border-y border-r border-brand-white/10 relative overflow-hidden">
                <div className="text-brand-white text-lg sm:text-xl font-medium tracking-tight">
                  What started with a love for design gradually became something much bigger.
                </div>
              </div>

              <p>
                Today, I approach every project with both a <strong className="text-brand-white font-medium">creative eye</strong> and a <strong className="text-brand-white font-medium">problem-solving mindset</strong>. I care about how something looks, but I care just as much about why it exists, who it is for, how it works, and what it is meant to achieve.
              </p>

              <p>
                Over the years, I’ve had the opportunity to work across different spaces — from finance and healthcare to wellness, fashion, technology, and digital marketing. Working across such different industries has taught me to adapt, think differently, and understand that every project has its own story to tell.
              </p>
            </div>

            {/* Dual Mindset Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#111111] border border-brand-white/10 space-y-2">
                <div className="flex items-center gap-2 text-brand-white font-bold text-sm">
                  <Eye size={16} className="text-brand-white" />
                  <span>The Creative Eye</span>
                </div>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Refined visual harmony, bespoke typography, high-contrast aesthetics, and memorable emotional connection.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#111111] border border-brand-white/10 space-y-2">
                <div className="flex items-center gap-2 text-brand-white font-bold text-sm">
                  <CheckCircle2 size={16} className="text-brand-white" />
                  <span>The Problem-Solving Mindset</span>
                </div>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Clear purpose, user empathy, robust technology, seamless usability, and measurable business outcomes.
                </p>
              </div>
            </div>

            {/* Industry Spaces Cross-Section */}
            <div className="pt-6 border-t border-brand-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gray/80">
                <Building2 size={13} className="text-brand-white" />
                <span>Industry Experience Across Diverse Sectors</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-xs font-medium text-brand-white/90 hover:bg-brand-white/10 transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
