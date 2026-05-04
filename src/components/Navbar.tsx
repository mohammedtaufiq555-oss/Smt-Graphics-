import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#080808]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-10 h-20 flex items-center justify-between">
          <a href="#" className="flex-shrink-0 group flex items-center gap-2">
            <div className="w-10 h-10 bg-[#CCFF00] flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl font-sans">S.</span>
            </div>
            <span className="font-sans font-black text-2xl tracking-tighter uppercase transition-colors group-hover:text-accent">
              STM GRAPHICS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#CCFF00] transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ink p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 flex flex-col gap-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-5xl uppercase hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-8 border-t border-ink/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-bg font-display text-3xl uppercase w-full text-center py-4 flex justify-center items-center gap-2 hover:bg-ink hover:text-bg transition-colors"
              >
                Let's Build It
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
