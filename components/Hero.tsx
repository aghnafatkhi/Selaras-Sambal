'use client';

import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-24 overflow-hidden bg-white min-h-[100dvh] flex items-center justify-center">
      {/* Background accents & Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-bg to-transparent -z-10 opacity-30" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full my-auto lg:mt-[-4%]">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="flex-1 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-2 sm:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0 w-full"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-brand-orange font-bold text-xs sm:text-sm uppercase tracking-[0.25em] md:tracking-[0.3em] mb-2.5 sm:mb-4 md:mb-5 block"
              >
                Official Outlet Kota Wisata
              </motion.span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-[1.05] sm:leading-[1] mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight">
                SPESIALIS <br className="hidden sm:block" />
                <span className="text-brand-red">SAMBAL</span> <br className="hidden sm:block" />
                DADAKAN
              </h1>

              {/* Mobile Quick Highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 sm:mb-6 md:hidden">
                <span className="bg-red-50 text-brand-red text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                  🔥 Fresh Saat Dipesan
                </span>
                <span className="bg-orange-50 text-brand-orange text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                  🍚 Free Refill Nasi
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-8 md:mb-10 w-full sm:w-auto justify-center lg:justify-start">
                <motion.a 
                  href="https://wa.me/6285371334717"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="min-h-[48px] h-12 sm:h-14 md:h-16 px-6 sm:px-8 rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-red-700 transition-colors flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98"
                >
                  Pesan via WhatsApp
                </motion.a>

                <motion.a 
                  href="#menu"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="min-h-[48px] h-12 sm:h-14 md:h-16 px-6 sm:px-8 rounded-full bg-white border-2 border-gray-200 text-brand-dark shadow-xs hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98"
                >
                  Lihat Menu
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-xs sm:text-sm font-medium"
              >
                <MapPin size={16} className="text-brand-red flex-shrink-0" />
                <span>Kota Wisata Cibubur – Samping Gerbang Utama</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Visual Teasers */}
          <div className="flex-1 w-full relative h-[300px] md:h-[600px] lg:h-[750px] py-10 mt-0 lg:mt-0 hidden md:block">
            {/* Background Texture Accents */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: -2,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { delay: 0.2, duration: 0.6 },
                scale: { delay: 0.2, duration: 0.6 },
                rotate: { delay: 0.2, duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                default: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="hidden md:flex absolute top-16 lg:top-24 right-0 md:right-10 lg:right-10 w-[220px] sm:w-[320px] bg-brand-orange rounded-[25px] md:rounded-[40px] p-5 md:p-8 text-white flex-col justify-between shadow-2xl z-20"
            >
              <div>
                <span className="text-[9px] md:text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest">Hot Seller</span>
                <h3 className="text-xl md:text-3xl font-black mt-3 md:mt-4 leading-tight">Paket Cobek <br /> 2 Orang</h3>
              </div>
              <div className="mt-6 md:mt-8">
                <p className="text-2xl md:text-4xl font-black">Rp 86K</p>
                <p className="text-[9px] md:text-xs opacity-80 mt-1 md:mt-2 font-medium">Ayam Goreng, Kulit, Tahu/Tempe, Jukut, Nasi (2x)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 2,
                y: [0, 15, 0]
              }}
              transition={{ 
                opacity: { delay: 0.4, duration: 0.6 },
                scale: { delay: 0.4, duration: 0.6 },
                rotate: { delay: 0.4, duration: 0.6 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                default: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="hidden md:flex absolute top-72 md:top-80 lg:top-96 left-0 lg:-left-10 w-[220px] sm:w-[320px] bg-brand-dark rounded-[25px] md:rounded-[40px] p-5 md:p-8 text-white flex-col justify-between shadow-2xl z-10"
            >
              <div>
                <span className="text-[9px] md:text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest">New Menu</span>
                <h3 className="text-xl md:text-3xl font-black mt-3 md:mt-4 leading-tight">SATE KULIT <br /> LADA GARAM</h3>
              </div>
              <div className="mt-6 md:mt-8">
                <p className="text-2xl md:text-4xl font-black text-brand-orange">Rp 25K</p>
                <p className="text-[9px] md:text-xs opacity-80 mt-1 md:mt-2 font-medium">Gurih, pedas, dan bikin nagih khas Selaras</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Connection Gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
