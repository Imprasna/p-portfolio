import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';
import { Sun, Moon, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3 md:px-6 py-2.5 md:py-4 pointer-events-auto bg-brand-black/80 backdrop-blur-3xl border rounded-full flex items-center gap-3 md:gap-12 w-[90vw] sm:w-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-brand-white"
      >
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="text-sm md:text-lg font-bold tracking-tighter hover:scale-105 active:scale-95 transition-transform whitespace-nowrap shrink-0 ml-1 text-brand-white"
        >
          Prasanna<span className="text-brand-gray/40">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-xs md:text-sm font-medium transition-all hover:scale-110 active:scale-90",
                location.pathname === link.href ? "text-brand-white" : "text-brand-gray hover:text-brand-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Spacer */}
        <div className="flex-1 sm:hidden" />

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full bg-brand-white/5 hover:bg-brand-white/10 transition-colors shrink-0 text-brand-white"
        >
          {isOpen ? <X size={14} /> : <Menu size={14} />}
        </button>

        <div className="h-4 w-[1px] bg-brand-white/20 shrink-0" />

        <button 
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-white/10 hover:bg-brand-white/20 transition-all active:scale-90 group overflow-hidden shrink-0 mr-1"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              {theme === 'dark' ? (
                <Sun size={14} className="text-brand-white" />
              ) : (
                <Moon size={14} className="text-brand-white" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md sm:hidden"
            />
            <motion.div 
              initial={{ y: 20, opacity: 0, scale: 0.95, x: '-50%' }}
              animate={{ y: 0, opacity: 1, scale: 1, x: '-50%' }}
              exit={{ y: 20, opacity: 0, scale: 0.95, x: '-50%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-24 left-1/2 z-50 w-[min(90vw,400px)] bg-brand-black/95 backdrop-blur-3xl border rounded-[2rem] p-8 sm:hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link 
                      to={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "text-3xl font-bold tracking-tighter flex items-center justify-between transition-colors",
                        location.pathname === link.href ? "text-brand-white" : "text-brand-white/30 hover:text-brand-white"
                      )}
                    >
                      {link.name}
                      {location.pathname === link.href && (
                        <motion.div 
                          layoutId="mobile-indicator" 
                          className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center"
              >
                <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Navigation</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">© 2026</div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
