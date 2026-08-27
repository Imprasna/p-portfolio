import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Sparkles, Layers, Code, Zap, Target, Server, Palette, TrendingUp, Briefcase, Users } from 'lucide-react';

interface SkillsSectionProps {
  showTitle?: boolean;
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  showTitle = true,
  className = "" 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return <Code size={14} />;
      case 'Web & Backend':
        return <Server size={14} />;
      case 'Design & Creative':
        return <Palette size={14} />;
      case 'Digital & Growth':
        return <TrendingUp size={14} />;
      case 'Operations & Management':
        return <Briefcase size={14} />;
      case 'Community & Events':
        return <Users size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  const allSkills = portfolioData.skillCategories.flatMap(category => 
    category.skills.map(s => ({ ...s, categoryName: category.category }))
  );

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.categoryName === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {showTitle && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray">Stack & Mastery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Skills & Tech Stack<span className="text-brand-gray">.</span>
            </h2>
          </div>
          <p className="text-brand-gray text-sm md:text-base max-w-md">
            Hover over any pill to inspect focus depth and active tool specialization.
          </p>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 md:gap-1 mb-8 p-1.5 rounded-2xl bg-brand-white/[0.03] border border-brand-white/10 backdrop-blur-md w-fit">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer select-none ${
                isActive
                  ? 'text-brand-black font-semibold'
                  : 'text-brand-white/60 hover:text-brand-white hover:bg-brand-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-brand-white rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                  transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {getCategoryIcon(cat)}
                <span>{cat}</span>
                {cat === 'All' && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-brand-black/15 text-brand-black font-bold' : 'bg-brand-white/10 text-brand-white/60'
                  }`}>
                    {allSkills.length}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Skills Pills Cloud */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 md:gap-3.5"
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isDimmed = hoveredSkill !== null && !isHovered;

            return (
              <motion.div
                key={skill.name}
                layout
                variants={itemVariants}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                className={`relative group rounded-full border transition-all duration-300 select-none cursor-pointer ${
                  isHovered
                    ? 'bg-brand-white text-brand-black border-brand-white shadow-[0_8px_30px_rgba(255,255,255,0.25)] scale-105 z-20'
                    : isDimmed
                    ? 'bg-brand-white/[0.02] text-brand-white/30 border-brand-white/5 opacity-35 scale-[0.98]'
                    : 'bg-brand-white/[0.04] text-brand-white/90 border-brand-white/10 hover:border-brand-white/30 hover:bg-brand-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-medium">
                  {/* Category Accent Dot */}
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isHovered
                      ? 'bg-brand-black'
                      : skill.hot
                      ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                      : 'bg-brand-white/30 group-hover:bg-brand-white'
                  }`} />

                  {/* Skill Name */}
                  <span className="tracking-tight whitespace-nowrap font-medium">
                    {skill.name}
                  </span>

                  {/* Micro Badge / Tag */}
                  {skill.tag && (
                    <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full uppercase transition-colors whitespace-nowrap ${
                      isHovered
                        ? 'bg-brand-black/10 text-brand-black font-semibold'
                        : 'bg-brand-white/10 text-brand-white/60 group-hover:text-brand-white group-hover:bg-brand-white/15'
                    }`}>
                      {skill.tag}
                    </span>
                  )}

                  {/* Level Pill for Active State */}
                  {isHovered && (
                    <span className="text-[10px] font-mono tracking-wider uppercase bg-brand-black text-brand-white px-2 py-0.5 rounded-full">
                      {skill.level}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Helper Banner */}
      <div className="mt-8 pt-6 border-t border-brand-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-gray font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span>Key Specialization</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-white/40 inline-block" />
            <span>Core Tooling</span>
          </div>
        </div>
        <div>
          Showing {filteredSkills.length} competencies across {activeCategory === 'All' ? `${portfolioData.skillCategories.length} disciplines` : activeCategory}
        </div>
      </div>
    </div>
  );
};
