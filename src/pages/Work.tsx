import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { DetailsModal } from '../components/DetailsModal';
import { portfolioData, Project } from '../data/portfolio';
import { 
  LayoutGrid, 
  List, 
  Search, 
  X, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Calendar, 
  Briefcase,
  SlidersHorizontal 
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Graphic Design',
  'Social Media',
  'Web Development',
  'Events & Sports'
];

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      // Category check
      const matchesCategory =
        activeCategory === 'All' ||
        project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (activeCategory === 'Events & Sports' && 
          (project.category.toLowerCase().includes('event') || 
           project.category.toLowerCase().includes('sport') ||
           project.services?.some(s => s.toLowerCase().includes('event') || s.toLowerCase().includes('sport')))) ||
        (project.services && project.services.some(s => s.toLowerCase().includes(activeCategory.toLowerCase())));

      // Search query check
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.client && project.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.services && project.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Compute category count helper
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return portfolioData.projects.length;
    return portfolioData.projects.filter((p) => {
      if (cat === 'Events & Sports') {
        return (
          p.category.toLowerCase().includes('event') ||
          p.category.toLowerCase().includes('sport') ||
          p.services?.some(s => s.toLowerCase().includes('event') || s.toLowerCase().includes('sport'))
        );
      }
      return (
        p.category.toLowerCase().includes(cat.toLowerCase()) ||
        p.services?.some(s => s.toLowerCase().includes(cat.toLowerCase()))
      );
    }).length;
  };

  return (
    <PageTransition>
      <SEO 
        title="Selected Works & Case Studies | Prasanna S"
        description="Explore the complete archive of digital flagship products, brand transformations, graphic designs, and sporting events crafted by Prasanna S."
        keywords={['Portfolio Projects', 'Case Studies', 'UI UX Design', 'Brand Identity', 'Creative Direction', 'Graphic Design', 'Sports Management']}
        url="https://Prasanna.design/work"
      />

      <div className="pt-28 md:pt-36 pb-28 md:pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-[11px] font-mono tracking-widest text-brand-gray uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-white" />
            <span>Archive // 2021 — Present</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter"
            >
              Selected Works<span className="text-brand-gray">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-gray text-sm md:text-base max-w-md font-normal leading-relaxed"
            >
              A curated archive of brand systems, full-stack digital platforms, social growth campaigns, and athletic event productions.
            </motion.p>
          </div>

          {/* Minimalist Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-brand-white/10"
          >
            <div className="flex flex-col">
              <span className="text-brand-gray/60 font-mono text-[10px] uppercase">Archive Volume</span>
              <span className="text-brand-white font-mono text-sm md:text-base font-semibold">{portfolioData.projects.length} Works Catalogued</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gray/60 font-mono text-[10px] uppercase">Core Disciplines</span>
              <span className="text-brand-white font-mono text-sm md:text-base font-semibold">4 Specialized Fields</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gray/60 font-mono text-[10px] uppercase">Delivery Standard</span>
              <span className="text-brand-white font-mono text-sm md:text-base font-semibold">100% Production Grade</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gray/60 font-mono text-[10px] uppercase">Reach & Location</span>
              <span className="text-brand-white font-mono text-sm md:text-base font-semibold">Prasanna // Gmail // Global</span>
            </div>
          </motion.div>
        </div>

        {/* Filter & View Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-brand-white/[0.03] border border-brand-white/10 backdrop-blur-md overflow-x-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'text-brand-black font-semibold'
                      : 'text-brand-white/60 hover:text-brand-white hover:bg-brand-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-work-filter"
                      className="absolute inset-0 bg-brand-white rounded-xl shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                      transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-brand-black/15 text-brand-black font-bold' : 'bg-brand-white/10 text-brand-white/50'
                    }`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Layout Toggle Controls */}
          <div className="flex items-center gap-3">
            {/* Instant Search Bar */}
            <div className="relative flex-1 sm:w-64">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gray/50 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-brand-white/[0.03] border border-brand-white/10 rounded-xl text-xs text-brand-white placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-white/30 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-gray/60 hover:text-brand-white p-0.5 cursor-pointer"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* View Switcher: Grid vs List */}
            <div className="flex items-center p-1 rounded-xl bg-brand-white/[0.03] border border-brand-white/10">
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Switch to Grid View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-brand-white text-brand-black shadow-sm' 
                    : 'text-brand-gray hover:text-brand-white'
                }`}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="Switch to List View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' 
                    ? 'bg-brand-white text-brand-black shadow-sm' 
                    : 'text-brand-gray hover:text-brand-white'
                }`}
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Project Display */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center flex flex-col items-center justify-center bg-brand-white/[0.01] border border-dashed border-brand-white/10 rounded-3xl p-8"
            >
              <div className="w-12 h-12 rounded-full bg-brand-white/5 border border-brand-white/10 flex items-center justify-center text-brand-gray mb-4">
                <SlidersHorizontal size={20} />
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-2">No projects matched your criteria</h3>
              <p className="text-brand-gray text-sm max-w-sm mb-6">
                Try clearing the search query or switching to another category.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-brand-white text-brand-black text-xs font-semibold hover:bg-brand-white/90 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            /* Visual Grid View */
            <motion.div
              key={`grid-${activeCategory}-${searchQuery}`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.97 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                    },
                  }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View project details for ${project.title}`}
                  className="group flex flex-col bg-[#0f0f0f] border border-brand-white/10 hover:border-brand-white/30 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-white/50"
                >
                  {/* Image Canvas with Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-brand-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />

                    {/* Year & Category Floating Tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-brand-black/75 backdrop-blur-md text-[10px] font-mono text-brand-white border border-brand-white/15">
                        {project.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-brand-black/75 backdrop-blur-md text-[10px] font-medium text-brand-white/80 border border-brand-white/15">
                        {project.client || 'Featured'}
                      </span>
                    </div>

                    {/* Hover Trigger Circle */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-white text-brand-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-lg">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Information Body */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-brand-gray/60 mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-brand-white group-hover:text-brand-gray transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-brand-gray text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Services Chips */}
                    {project.services && project.services.length > 0 && (
                      <div className="pt-4 border-t border-brand-white/10 flex flex-wrap gap-1.5 mt-auto">
                        {project.services.slice(0, 3).map((srv, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-brand-white/[0.04] border border-brand-white/10 text-[10px] text-brand-white/70 font-medium"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Editorial List / Archive View */
            <motion.div
              key={`list-${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border border-brand-white/10 rounded-3xl overflow-hidden bg-[#0c0c0c] divide-y divide-brand-white/10"
            >
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-12 px-6 py-3.5 bg-brand-white/[0.02] text-[10px] font-mono uppercase tracking-widest text-brand-gray/60">
                <div className="col-span-1">No.</div>
                <div className="col-span-4">Project & Client</div>
                <div className="col-span-4">Discipline & Scope</div>
                <div className="col-span-2">Timeline</div>
                <div className="col-span-1 text-right">Action</div>
              </div>

              {/* Rows */}
              {filteredProjects.map((project, idx) => {
                const rowNum = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View project details for ${project.title}`}
                    className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 hover:bg-brand-white/[0.04] transition-colors items-center gap-4 cursor-pointer group outline-none focus-visible:bg-brand-white/[0.08]"
                  >
                    {/* Index */}
                    <div className="hidden md:block col-span-1 font-mono text-xs text-brand-gray/50 group-hover:text-brand-white transition-colors">
                      {rowNum}
                    </div>

                    {/* Project Title & Client */}
                    <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-brand-white/5 flex-shrink-0 border border-brand-white/10">
                        <img 
                          src={project.image} 
                          alt="" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-brand-white group-hover:text-brand-gray transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-xs text-brand-gray/60 font-mono">
                          {project.client || project.category}
                        </div>
                      </div>
                    </div>

                    {/* Discipline & Scope Tags */}
                    <div className="col-span-1 md:col-span-4 flex flex-wrap gap-1.5">
                      {project.services ? (
                        project.services.slice(0, 3).map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-brand-white/5 border border-brand-white/10 text-[10px] text-brand-white/70"
                          >
                            {srv}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-brand-gray">{project.category}</span>
                      )}
                    </div>

                    {/* Timeline / Year */}
                    <div className="col-span-1 md:col-span-2 font-mono text-xs text-brand-gray">
                      {project.year}
                    </div>

                    {/* Action Arrow */}
                    <div className="col-span-1 md:col-span-1 flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-brand-white/5 group-hover:bg-brand-white group-hover:text-brand-black border border-brand-white/10 flex items-center justify-center text-brand-gray transition-all">
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Details Modal */}
      <DetailsModal 
        item={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </PageTransition>
  );
};
