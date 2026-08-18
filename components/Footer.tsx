'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-8 sm:py-12 md:py-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-10 md:mb-12">
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6 md:mb-8 group">
              <div className="h-8 sm:h-10 md:h-12 flex items-center">
                <img 
                  src="https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png" 
                  alt="Selaras Sambal Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-display text-lg sm:text-2xl font-black uppercase tracking-tighter">
                SELARAS <span className="text-brand-red">SAMBAL</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium text-xs sm:text-sm">
              Spesialis Sambal Dadakan di Kota Wisata Cibubur. Sambal fresh dibuat saat dipesan, bahan pilihan berkualitas, dan harga ramah di kantong.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-4 items-center text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-wider bg-white/5 w-fit px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl border border-white/10">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span> DINE-IN
              </span>
              <span className="opacity-40">•</span>
              <span className="opacity-70">TAKEAWAY</span>
              <span className="opacity-40">•</span>
              <span className="opacity-70">CATERING</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2.5 sm:mb-4 md:mb-6 text-brand-orange">
              Navigasi
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <li><Link href="/" className="hover:text-brand-red transition-colors inline-block py-0.5 sm:py-1">Home</Link></li>
              <li><Link href="/#menu" className="hover:text-brand-red transition-colors inline-block py-0.5 sm:py-1">Menu</Link></li>
              <li><Link href="/#fasilitas" className="hover:text-brand-red transition-colors inline-block py-0.5 sm:py-1">Fasilitas</Link></li>
              <li><Link href="/#kontak" className="hover:text-brand-red transition-colors inline-block py-0.5 sm:py-1">Lokasi & Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2.5 sm:mb-4 md:mb-6 text-brand-orange">
              Informasi
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-gray-400 text-xs sm:text-sm font-medium">
              <li><a href="https://wa.me/6285371334717" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors inline-block py-0.5 sm:py-1">Customer Care WhatsApp</a></li>
              <li><span className="hover:text-brand-red cursor-default inline-block py-0.5 sm:py-1">Kota Wisata Cibubur</span></li>
              <li><span className="hover:text-brand-red cursor-default inline-block py-0.5 sm:py-1">08:00 - 21:00 WIB</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Selaras Sambal. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-500 text-[11px] sm:text-xs">
            <span>Powered by Selaras Group</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
