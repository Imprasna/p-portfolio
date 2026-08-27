import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { 
  Palette, 
  Share2, 
  Code2, 
  CalendarDays, 
  Trophy, 
  ArrowUpRight 
} from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'graphic-design':
        return <Palette className="w-5 h-5" />;
      case 'social-media':
        return <Share2 className="w-5 h-5" />;
      case 'web-development':
        return <Code2 className="w-5 h-5" />;
      case 'organising-events':
        return <CalendarDays className="w-5 h-5" />;
      case 'sports':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="relative px-6 md:px-12 py-24 md:py-32 bg-brand-black border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Minimalist Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block mb-3">
              Capabilities & Focus
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-white">
              Expertise<span className="text-brand-gray">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-gray text-base md:text-lg font-normal max-w-md leading-relaxed"
          >
            A focused set of creative, digital, and operational disciplines delivered with clarity, precision, and passion.
          </motion.p>
        </div>

        {/* Clean, Minimalist Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl bg-brand-white/[0.02] border border-brand-white/10 hover:border-brand-white/30 p-8 transition-all duration-300 flex flex-col justify-between hover:bg-brand-white/[0.04] ${
                index === 3 || index === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-brand-gray/80 tracking-widest">
                    {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center text-brand-white group-hover:scale-105 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-300">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-brand-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Clean Minimalist Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-brand-white/5 text-brand-white/70 border border-brand-white/5 group-hover:border-brand-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal Inquire Link */}
              <div className="pt-4 border-t border-brand-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-gray/60 uppercase tracking-wider">
                  Discipline
                </span>
                <Link
                  to={`/contact?discipline=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-white hover:text-brand-gray transition-colors group/link"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
