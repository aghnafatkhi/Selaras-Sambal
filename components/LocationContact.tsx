'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Star } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="lokasi" className="py-24 bg-white relative overflow-hidden">
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

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Official Outlet</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-brand-dark mb-8 md:mb-10 tracking-tighter uppercase leading-tight">KUNJUNGI KAMI <br />DI <span className="text-brand-red">CIBUBUR</span></h2>
            
            <div className="space-y-6 md:space-y-8">
              <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.2 }} className="flex gap-4 md:gap-6 group cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-brand-red rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-brand-red group-hover:text-white group-hover:shadow-lg">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-lg md:text-xl mb-1 uppercase tracking-tight">Alamat Lengkap</h4>
                  <p className="text-gray-500 leading-relaxed font-bold text-xs md:text-base">
                    Jl. Wisata Utama, Ciangsana, Kec. Gn. Putri, Kabupaten Bogor, <br />
                    Jawa Barat 16968 (Samping Kota Wisata Cibubur)
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.2 }} className="flex gap-4 md:gap-6 group cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 text-brand-orange rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-lg">
                  <Clock size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-lg md:text-xl mb-1 uppercase tracking-tight">Jam Layanan</h4>
                  <p className="text-gray-500 leading-relaxed font-bold text-xs md:text-base">
                    Buka Setiap Hari: 08:00 - 21:00 WIB <br />
                    <span className="text-brand-orange text-[10px] md:text-sm font-black italic">Menerima Reservasi Makan Siang & Malam</span>
                  </p>
                </div>
              </motion.div>

              <div className="bg-brand-dark rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform hidden sm:block">
                  <MessageCircle size={100} className="md:w-[120px] md:h-[120px]" />
                </div>
                <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 relative z-10">RESERVASI & CATERING</h4>
                <p className="text-white/60 mb-6 md:mb-8 max-w-xs relative z-10 text-xs md:text-sm font-bold">Butuh Nasi Box dalam jumlah besar? Hubungi kami sekarang melalui WhatsApp official kami.</p>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  href="https://wa.me/6285371334717"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:bg-green-600 transition-all relative z-10 shadow-lg text-[10px] md:text-sm"
                >
                  <MessageCircle size={18} className="md:w-5 md:h-5" />
                  Hubungi Kota Wisata
                </motion.a>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <span className="font-black text-xs uppercase tracking-widest text-gray-400">Social Media :</span>
              <div className="flex gap-4">
                <motion.a whileHover={{ y: -5, color: '#FF0000' }} href="https://www.instagram.com/selarassambal/" target="_blank" className="w-12 h-12 bg-white border border-gray-100 text-brand-dark rounded-2xl flex items-center justify-center shadow-sm transition-all hover:shadow-xl">
                  <Instagram size={24} />
                </motion.a>
                <motion.a whileHover={{ y: -5, color: '#FF0000' }} href="https://www.tiktok.com/@selarasambal" target="_blank" className="w-12 h-12 bg-white border border-gray-100 text-brand-dark rounded-2xl flex items-center justify-center shadow-sm transition-all hover:shadow-xl">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v10.3c.02 2.37-1.12 4.74-3.13 6.01-2.01 1.27-4.63 1.34-6.72.19-2.09-1.15-3.32-3.48-3.04-5.83.28-2.35 1.88-4.4 4.09-5.18v4.27c-.67.24-1.29.68-1.52 1.34-.17.6-.08 1.25.26 1.76.35.5.94.8 1.54.76.66-.02 1.23-.46 1.41-1.09.09-.34.1-.69.1-1.04V.02z"/></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 md:border-8 border-white group"
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
