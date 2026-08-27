import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export const ContactPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Initiate Project & Contact | Prasanna S"
        description="Get in touch with Prasanna S for new commissions, brand strategy, design systems, or creative direction engagements."
        keywords={['Contact Prasanna', 'Hire Creative Director', 'Design Commissions', 'Lisbon Design Studio']}
        url="https://Prasanna.design/contact"
      />
      <div className="pt-32 pb-20">

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            Get in Touch<span className="text-brand-gray">.</span>
          </motion.h1>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-16 py-20 border-t">
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
              >
                Let's work <br /> together<span className="text-brand-gray">.</span>
              </motion.h2>
              <p className="text-brand-gray text-lg md:text-xl font-medium mb-12">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you have a specific project in mind or just want to say hi, I'd love to hear from you.
              </p>
              
              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                href="mailto:prasanna@sibbc.org" 
                className="inline-block text-2xl md:text-4xl font-medium hover:text-brand-gray transition-colors border-b-2 border-current hover:border-brand-gray pb-2 break-all"
              >
                prasanna@sibbc.org
              </motion.a>
            </div>

            <div className="w-full md:w-auto space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4">Socials</h3>
                <div className="flex flex-col gap-4">
                  {portfolioData.socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      className="text-lg font-medium hover:text-brand-gray transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4">Location</h3>
                <p className="text-lg font-medium">Remote / Worldwide</p>
                <p className="text-brand-gray">Based in Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
