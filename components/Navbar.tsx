'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Instagram, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Fasilitas', href: '/#fasilitas' },
    { name: 'Kontak', href: '/#kontak' },
  ];

  return (
    <motion.nav
      animate={{ 
        paddingTop: scrolled ? 6 : (isMobile ? 8 : 16), 
        paddingBottom: scrolled ? 6 : (isMobile ? 8 : 16),
        backgroundColor: (scrolled || mobileMenuOpen) ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.05)',
        boxShadow: (scrolled || mobileMenuOpen) ? '0 10px 40px rgba(0, 0, 0, 0.04)' : 'none'
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${mobileMenuOpen ? 'border-brand-red/5' : 'border-white/10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95 py-0.5">
            <div className="h-8 sm:h-10 md:h-14 flex items-center">
              <img 
                src="https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png" 
                alt="Selaras Sambal Logo" 
                className="h-full w-auto object-contain transition-transform group-hover:rotate-1"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-medium text-[10px] uppercase tracking-widest items-center">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-red text-gray-500 font-bold relative group py-1 whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              ))}
            </div>
            
            <motion.div layout className="flex items-center gap-4">
              <AnimatePresence initial={false}>
                {scrolled && (
                  <motion.div 
                    key="star-review"
                    initial={{ opacity: 0, scale: 0.5, x: 20, width: 0 }}
                    animate={{ opacity: 1, scale: 1, x: 0, width: "auto" }}
                    exit={{ opacity: 0, scale: 0.5, x: 20, width: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                    className="flex-shrink-0"
                  >
                    <div className="flex items-center gap-1.5 bg-brand-orange px-3 py-1.5 rounded-full text-white text-[10px] font-black shadow-lg shadow-brand-orange/20 whitespace-nowrap overflow-hidden">
                      <Star size={12} fill="currentColor" />
                      <span>4.5</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div layout className="flex-shrink-0">
                  <a
                    href="https://wa.me/6285371334717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-xl shadow-brand-red/30 hover:bg-brand-crimson transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap block"
                  >
                    RESERVASI VIA WHATSAPP
                  </a>
              </motion.div>
            </motion.div>
          </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden min-w-[44px] min-h-[44px] w-10 h-10 flex items-center justify-center relative text-brand-dark focus:outline-none z-50 p-2 rounded-xl active:bg-gray-100/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-5 h-4">
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 7 : 0,
                backgroundColor: mobileMenuOpen ? '#EF4444' : '#1A1A1A'
              }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 left-0 w-full h-0.5 rounded-full block origin-center"
            />
            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                scaleX: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-[7px] left-0 w-full h-0.5 bg-brand-dark rounded-full block"
            />
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -7 : 0,
                backgroundColor: mobileMenuOpen ? '#EF4444' : '#1A1A1A'
              }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-0 left-0 w-full h-0.5 rounded-full block origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden bg-white/98 backdrop-blur-3xl border-t border-gray-100 overflow-hidden shadow-2xl rounded-b-2xl"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-0.5">
              <div className="flex items-center justify-between pb-2 mb-1 border-b border-gray-100">
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kota Wisata Cibubur</span>
                <div className="flex items-center gap-1 bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black">
                  <Star size={10} fill="currentColor" />
                  <span>4.5 Rating</span>
                </div>
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 + 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="text-brand-dark text-sm sm:text-base font-bold hover:text-brand-red flex items-center justify-between py-2.5 sm:py-3 border-b border-gray-100/60 uppercase tracking-tight active:text-brand-red min-h-[44px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={15} className="text-brand-red/40" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3"
              >
                <a
                  href="https://wa.me/6285371334717"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 bg-brand-red text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-brand-red/20 active:scale-98 transition-transform min-h-[44px]"
                >
                  <Phone size={15} />
                  <span>Reservasi via WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
