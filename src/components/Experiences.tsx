import { motion } from 'motion/react';
import { useState } from 'react';
import { DetailsModal } from './DetailsModal';
import ApexImg from "../assets/apexx.png";
import flowstateImg from "../assets/flowstate.png";

const experiences = [
  {
    title: "Pickleball Academy",
    role: "Founder & Coach",
    description: "Building a premier training facility focusing on skill development and community growth in the sport. We've established a hub for enthusiasts to hone their skills and connect with like-minded individuals, fostering a vibrant local sports community.",
    year: "2025 — Present",
    category: "Sports & Management",
    image: ApexImg,
  },
  {
    title: "Chennai Community",
    role: "Community Head",
    description: "The \"flow state\" is a psychological state of deep focus that enables peak performance. Flow State Training Solutions in Chennai applies this concept to corporate development, offering outbound leadership programs, team simulations, and behavioral workshops to help organizational teams achieve optimal performance.",
    year: "2026 — Present",
    category: "Community Building",
    image: flowstateImg,
  }
];

export const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  return (
    <section className="px-6 md:px-12 py-20 md:py-40 bg-brand-black border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gray font-bold mb-6">Beyond Code</p>
              <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight leading-tight mb-8">
                Ventures & <br />Communities
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
                When I'm not building digital products, I'm passionate about sports and bringing people together.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  onClick={() => setSelectedExp(exp)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group p-8 md:p-12 bg-brand-white/[0.02] border rounded-[2rem] hover:bg-brand-white/[0.04] transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gray/40 font-bold">{exp.year}</span>
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gray mb-4 font-bold">{exp.category}</p>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">{exp.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    {exp.description}
                  </p>
                  <p className="text-xs font-bold text-brand-white/40">{exp.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DetailsModal 
        item={selectedExp} 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)} 
      />
    </section>
  );
};
