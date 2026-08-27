import { motion } from 'motion/react';

export const FreelanceIndicator = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] flex justify-center pointer-events-none pt-6">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 px-4 py-2 bg-brand-white/5 backdrop-blur-md border rounded-full pointer-events-auto"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white/80">
          Available for Freelance
        </span>
      </motion.div>
    </div>
  );
};
