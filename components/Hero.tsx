'use client';

import { motion } from 'motion/react';
import { ChevronRight, CheckCircle, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Background accents & Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-bg to-transparent -z-10 opacity-30" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="flex-1 space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-brand-orange font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block"
              >
                Official Outlet Kota Wisata
              </motion.span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-[0.9] mb-6 md:mb-8">
                SPESIALIS <br />
                <span className="text-brand-red">SAMBAL</span> <br />
                DADAKAN
              </h1>
              
              <div className="flex items-start gap-4 mb-8 md:mb-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ rotate: 15 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                  className="p-3 bg-red-50 rounded-2xl flex-shrink-0"
                >
                  <CheckCircle className="text-brand-red w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
                <div>
                  <p className="font-bold text-lg md:text-xl text-brand-dark">Gratis Nasi & Lalapan</p>
                  <p className="text-gray-500 max-w-sm text-sm md:text-base">Nikmati sepuasnya setiap pembelian menu nasi di outlet Kota Wisata Cibubur.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-2">Big Order / Catering</p>
                  <p className="text-base md:text-lg font-black text-brand-dark">0853-7133-4717</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-2">Jam Operasional</p>
                  <p className="text-base md:text-lg font-black text-brand-dark underline decoration-brand-red decoration-2">Setiap Hari: 08:00 - 21:00</p>
                </motion.div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ zIndex: 10, scale: 1.15, y: -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden cursor-pointer"
                    >
                      <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="User feedback" />
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-brand-dark text-white text-[10px] font-bold">
                    500+
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium italic">Favorit Keluarga di Kota Wisata Cibubur</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Teasers */}
          <div className="flex-1 w-full relative h-[500px] sm:h-[650px] lg:h-[750px] py-10 mt-12 md:mt-0">
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
              className="absolute top-0 right-0 md:right-0 lg:right-10 w-[240px] sm:w-[320px] bg-brand-orange rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-white flex flex-col justify-between shadow-2xl z-20"
            >
              <div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest">Hot Seller</span>
                <h3 className="text-2xl md:text-3xl font-black mt-4 leading-tight">PAKET COBEK <br /> BER-2</h3>
              </div>
              <div className="mt-8">
                <p className="text-3xl md:text-4xl font-black">Rp 86K</p>
                <p className="text-[10px] md:text-xs opacity-80 mt-2 font-medium">Ayam, Kulit, Tahu/Tempe, Jukut, Nasi (2x)</p>
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
              className="absolute top-24 md:top-48 left-0 lg:-left-10 w-[240px] sm:w-[320px] bg-brand-dark rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-white flex flex-col justify-between shadow-2xl z-10"
            >
              <div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-widest">New Menu</span>
                <h3 className="text-2xl md:text-3xl font-black mt-4 leading-tight">SATE KULIT <br /> LADA GARAM</h3>
              </div>
              <div className="mt-8">
                <p className="text-3xl md:text-4xl font-black text-brand-orange">Rp 25K</p>
                <p className="text-[10px] md:text-xs opacity-80 mt-2 font-medium">Citarasa gurih & pedas khas Selaras</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: [0, 5, 0]
              }}
              transition={{ 
                opacity: { delay: 0.6, duration: 0.6 },
                y: { delay: 0.6, duration: 0.6 },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="absolute bottom-4 md:bottom-20 right-0 left-0 lg:left-24 bg-white/80 backdrop-blur-md border border-white/50 rounded-[25px] md:rounded-[32px] p-5 md:p-8 flex items-center gap-4 md:gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-30 transition-all cursor-default"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-red rounded-3xl flex-shrink-0 flex items-center justify-center text-white flex-col gap-1 shadow-lg shadow-brand-red/20">
                <MapPin size={28} className="md:w-10 md:h-10" />
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em]">Cibubur</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pusat Utama</span>
                </div>
                <h4 className="font-display font-black text-gray-800 text-lg md:text-2xl leading-tight">Ciangsana, <span className="text-brand-red">Kota Wisata</span></h4>
                <p className="text-[11px] md:text-sm text-gray-500 leading-snug mt-2 font-bold opacity-70 italic">Samping Gerbang Utama Kota Wisata Cibubur</p>
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
