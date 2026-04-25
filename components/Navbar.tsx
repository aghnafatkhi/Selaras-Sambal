'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Instagram, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Fasilitas', href: '/fasilitas' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100 ${
        scrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <motion.div layout className="container mx-auto px-6 flex justify-between items-center">
        <motion.div layout>
          <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
            <img 
              src="https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png" 
              alt="Selaras Sambal Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:rotate-6"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} 
            />
            <div className="hidden w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-red/20 text-center">
              S
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
          <motion.div layout className="hidden md:flex items-center gap-8">
            <motion.div layout className="flex gap-6 font-medium text-[10px] uppercase tracking-widest items-center">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name} 
                  layout 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-red text-gray-500 font-bold relative group py-1 whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div layout className="flex items-center gap-4">
              <AnimatePresence>
                {scrolled && (
                  <motion.div 
                    key="star-review"
                    initial={{ opacity: 0, width: 0, x: 20 }}
                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                    exit={{ opacity: 0, width: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-1.5 bg-brand-orange px-3 py-1.5 rounded-full text-white text-[10px] font-black shadow-lg shadow-brand-orange/20 whitespace-nowrap">
                      <Star size={12} fill="currentColor" />
                      <span>4.5</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div layout>
                <a
                  href="https://wa.me/6285371334717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-xl shadow-brand-red/30 hover:bg-brand-crimson transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap"
                >
                  RESERVASI
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} className="text-brand-dark" />
          ) : (
            <Menu size={28} className="text-brand-dark" />
          )}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-brand-dark text-xl font-black hover:text-brand-red flex items-center justify-between py-3 border-b border-gray-50 uppercase tracking-tighter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-gray-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6"
              >
                <a
                  href="https://wa.me/6285371334717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-red text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-red/30"
                >
                  <Phone size={20} />
                  <span>RESERVASI SEKARANG</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
