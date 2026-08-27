import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

interface FooterProps {
  hideCTA?: boolean;
}

export const Footer = ({ hideCTA }: FooterProps) => {
  return (
    <footer id="contact" className="mb-15 px-6 md:px-12 pt-20 md:pt-40 pb-12 bg-brand-black border-t">
      <div className="max-w-7xl mx-auto">
        {!hideCTA && (
          <div className="flex flex-col items-center text-center mb-20 md:mb-40">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
            >
              Let's work <br /> together<span className="text-brand-gray">.</span>
            </motion.h2>
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              href="mailto:prasanna@sibbc.org" 
              className="text-xl md:text-4xl font-medium hover:text-brand-gray transition-colors border-b-2 border-current hover:border-brand-gray pb-2 break-all"
            >
              prasanna@sibbc.org
            </motion.a>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {portfolioData.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="text-xs md:text-sm font-semibold uppercase tracking-widest hover:text-brand-gray transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-brand-gray text-[10px] md:text-sm font-medium">
            <p>© {new Date().getFullYear()} Prasanna S. All rights reserved.</p>
            {/* <p>Built with React & Motion</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
