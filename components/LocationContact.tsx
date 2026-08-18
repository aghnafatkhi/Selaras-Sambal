'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Star } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="kontak" className="py-10 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" 
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand-orange font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-1.5 sm:mb-3 md:mb-4 block">
              Official Outlet
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-6xl font-black text-brand-dark mb-4 sm:mb-6 md:mb-10 tracking-tight uppercase leading-tight">
              KUNJUNGI KAMI <br />DI <span className="text-brand-red">CIBUBUR</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-5 md:space-y-8">
              <a 
                href="https://maps.google.com/?q=Selaras+Sambal+Kota+Wisata+Cibubur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-100 hover:border-brand-red/20 transition-all hover:bg-gray-50/50 group"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-red-50 text-brand-red rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-brand-red group-hover:text-white group-hover:shadow-xs">
                  <MapPin size={18} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="font-black text-brand-dark text-sm sm:text-lg md:text-xl uppercase tracking-tight">
                      Alamat Lengkap
                    </h4>
                    <span className="text-[9px] sm:text-[10px] font-bold text-brand-red bg-red-50 px-1.5 py-0.5 rounded-full hidden sm:inline-block">
                      Petunjuk Arah
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed font-medium text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">
                    Jl. Wisata Utama, Ciangsana, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16968 (Samping Gerbang Utama Kota Wisata Cibubur)
                  </p>
                </div>
              </a>

              <div className="flex gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-100">
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange-50 text-brand-orange rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-sm sm:text-lg md:text-xl uppercase tracking-tight">
                    Jam Layanan
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">
                    Buka Setiap Hari: <span className="font-bold text-brand-dark">08:00 - 21:00 WIB</span> <br />
                    <span className="text-brand-orange text-[10px] sm:text-sm font-bold italic">
                      Menerima Reservasi Makan Siang & Malam
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-brand-dark rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-4 sm:p-7 md:p-10 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform hidden sm:block">
                  <MessageCircle size={90} className="md:w-[120px] md:h-[120px]" />
                </div>
                <h4 className="text-base sm:text-xl md:text-2xl font-black mb-1.5 sm:mb-2 md:mb-3 relative z-10">
                  RESERVASI & CATERING
                </h4>
                <p className="text-white/70 mb-3.5 sm:mb-6 md:mb-8 max-w-xs relative z-10 text-xs sm:text-sm font-medium leading-relaxed">
                  Butuh Nasi Box dalam jumlah besar? Hubungi kami sekarang melalui WhatsApp official kami.
                </p>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/6285371334717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-wider hover:bg-green-600 transition-all relative z-10 shadow-md text-xs sm:text-sm min-h-[44px] sm:min-h-[48px] w-full sm:w-auto"
                >
                  <MessageCircle size={17} className="flex-shrink-0" />
                  <span>Reservasi via WhatsApp</span>
                </motion.a>
              </div>
            </div>

            <div className="mt-5 sm:mt-8 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-6">
              <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-gray-400">
                Sosial Media:
              </span>
              <div className="flex gap-2.5 sm:gap-3">
                <motion.a 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/selarassambal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram Selaras Sambal"
                  className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-white border border-gray-200 text-brand-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xs transition-all hover:text-brand-red hover:border-brand-red/30"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.tiktok.com/@selarasambal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok Selaras Sambal"
                  className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-white border border-gray-200 text-brand-dark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xs transition-all hover:text-brand-red hover:border-brand-red/30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v10.3c.02 2.37-1.12 4.74-3.13 6.01-2.01 1.27-4.63 1.34-6.72.19-2.09-1.15-3.32-3.48-3.04-5.83.28-2.35 1.88-4.4 4.09-5.18v4.27c-.67.24-1.29.68-1.52 1.34-.17.6-.08 1.25.26 1.76.35.5.94.8 1.54.76.66-.02 1.23-.46 1.41-1.09.09-.34.1-.69.1-1.04V.02z"/></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-[220px] sm:h-[340px] md:h-[550px] lg:h-[600px] rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-lg relative border-2 sm:border-4 md:border-8 border-white group"
          >
            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-all duration-500 pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.844358821955!2d106.94056250000001!3d-6.366718749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69926d21f8a8bb%3A0xe5f87b89796695b3!2sSelaras%20Sambal%20Kota%20Wisata%20Cibubur!5e0!3m2!1sid!2sid!4v1714052000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
