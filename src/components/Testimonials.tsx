import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-40 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-gray mb-16">Testimonials</h2>
          
          <div className="grid grid-cols-1 gap-20">
            {portfolioData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <p className="text-2xl md:text-4xl font-serif italic tracking-tight leading-tight mb-12">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-bold tracking-tight mb-1">{testimonial.author}</h4>
                  <p className="text-brand-gray text-sm font-medium uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
