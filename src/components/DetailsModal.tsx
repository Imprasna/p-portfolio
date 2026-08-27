import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Calendar, User, Layers } from 'lucide-react';
import { Project } from '../data/portfolio';


interface DetailsModalProps {
  item: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({ item, isOpen, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && item && (
        <div 
          id="project-details-modal-root"
          className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
        >
          {/* Backdrop with High-End Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0c0c0c] border border-brand-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col md:flex-row my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-brand-black/70 border border-brand-white/20 text-brand-white hover:bg-brand-white hover:text-brand-black flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-lg"
            >
              <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Left Column: Visual Showcase */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-brand-white/5 relative overflow-hidden flex-shrink-0 group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent md:hidden" />
              
              {/* Year & Category Badge Overlay */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md text-[11px] font-mono text-brand-white border border-brand-white/20">
                  {item.year}
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md text-[11px] font-medium text-brand-white/80 border border-brand-white/20">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Right Column: Case Study Details (Scrollable) */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[85vh]">
              <div>
                {/* Discipline Category Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand-white" />
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gray">
                    {item.category}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-white mb-4">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description || 'A comprehensive creative and technical execution crafted with precision, refined typography, and high-performance standards.'}
                </p>

                {/* Project Metadata Grid */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-white/10 mb-6 text-xs">
                  {item.client && (
                    <div>
                      <div className="flex items-center gap-1.5 text-brand-gray/60 mb-1 font-mono uppercase">
                        <User size={12} />
                        <span>Client</span>
                      </div>
                      <div className="font-semibold text-brand-white">{item.client}</div>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-1.5 text-brand-gray/60 mb-1 font-mono uppercase">
                      <Calendar size={12} />
                      <span>Timeline</span>
                    </div>
                    <div className="font-semibold text-brand-white">{item.year}</div>
                  </div>
                </div>

                {/* Services / Deliverables Tags */}
                {item.services && item.services.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-brand-gray/60 mb-2">
                      <Layers size={12} />
                      <span>Disciplines & Scope</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.services.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-brand-white/5 border border-brand-white/10 text-xs text-brand-white/80 font-medium"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenge & Solution Blocks */}
                {(item.challenge || item.solution) && (
                  <div className="space-y-4 mb-8 bg-brand-white/[0.02] p-4 rounded-2xl border border-brand-white/5">
                    {item.challenge && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-brand-white/70 mb-1 flex items-center gap-1.5">
                          <Sparkles size={12} className="text-brand-gray" />
                          <span>The Challenge</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                    )}
                    {item.solution && (
                      <div className="pt-3 border-t border-brand-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-brand-white/70 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 size={12} className="text-brand-white" />
                          <span>The Solution</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-brand-white/10 flex flex-wrap items-center justify-between gap-3 mt-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-brand-gray hover:text-brand-white transition-colors cursor-pointer"
                >
                  Close Window
                </button>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-white text-brand-black font-semibold text-xs transition-all duration-200 hover:bg-brand-white/90 hover:scale-105 active:scale-95 group shadow-md"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
