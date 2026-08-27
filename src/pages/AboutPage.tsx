import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { PageTransition } from '../components/PageTransition';
import { SkillsSection } from '../components/SkillsSection';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="About & Biography | Prasanna"
        description="I’m a creative who likes to build things. Discover my background, design philosophy, cross-industry experience, and specialized skills."
        keywords={['About Prasanna', 'Biography', 'Creative Director', 'Builder', 'Experience', 'Tech Stack', 'Design & Technology']}
        url="https://prasanna.design/about"
      />
      <div className="pt-28 md:pt-36 pb-20">

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-[11px] font-mono uppercase tracking-widest text-brand-gray mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-white" />
              <span>Personal Narrative & Practice</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter">
              About Me<span className="text-brand-gray">.</span>
            </h1>
          </motion.div>
        </div>
        
        <About />

        {/* Professional Experience Section */}
        <section className="px-6 md:px-12 py-20 bg-brand-black border-t border-brand-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-xs font-mono uppercase tracking-widest text-brand-gray">
                <Briefcase size={13} className="text-brand-white" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-white">Professional Experience</h2>
              <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
                A timeline spanning software engineering, product architecture, operations management, and community building across high-growth startups and tech teams.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-10">
              {portfolioData.experience?.map((exp, i) => (
                <div key={i} className="group border-b border-brand-white/10 pb-8 last:border-0 last:pb-0 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-brand-white group-hover:text-brand-gray transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-brand-gray font-mono text-xs whitespace-nowrap bg-brand-white/[0.03] px-2.5 py-1 rounded-full border border-brand-white/5">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-brand-white/90 font-medium text-sm mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-white/60" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="px-6 md:px-12 py-20 bg-brand-black border-t border-brand-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white/[0.04] border border-brand-white/10 text-xs font-mono uppercase tracking-widest text-brand-gray">
                <GraduationCap size={13} className="text-brand-white" />
                <span>Qualifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-white">Education & Certifications</h2>
              <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
                Computer Science engineering foundation complemented by continuous specialized certifications in modern web engineering and development workflows.
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-10">
              {/* Education Degree */}
              <div className="p-6 md:p-8 rounded-3xl bg-brand-white/[0.02] border border-brand-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-white/10 flex items-center justify-center text-brand-white">
                      <GraduationCap size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-white">
                      {portfolioData.education[0]?.degree}
                    </h3>
                  </div>
                  <span className="text-brand-gray font-mono text-xs px-2.5 py-1 rounded-full bg-brand-white/5 border border-brand-white/5 w-fit">
                    {portfolioData.education[0]?.period}
                  </span>
                </div>
                <p className="text-brand-gray text-sm pl-0 sm:pl-10">
                  {portfolioData.education[0]?.institution}
                </p>
              </div>

              {/* Certificates Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gray">
                  <Award size={13} className="text-brand-white" />
                  <span>Verified Certifications</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {portfolioData.certificates?.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-brand-white/[0.02] border border-brand-white/10 hover:border-brand-white/20 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-brand-gray/60 mb-2">
                          <CheckCircle2 size={12} className="text-brand-white/80" />
                          <span>{cert.issuer}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-brand-white leading-snug">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tech Stack Section */}
        <section className="px-6 md:px-12 py-20 bg-brand-black border-t border-brand-white/10">
          <div className="max-w-7xl mx-auto">
            <SkillsSection showTitle={true} />
          </div>
        </section>

        <Testimonials />
      </div>
    </PageTransition>
  );
};
