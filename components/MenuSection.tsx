'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, Coffee, Utensils, Pizza } from 'lucide-react';

const paketCobek = [
  { id: 1, name: 'Paket Ber-2 (1)', price: '86K', desc: 'Ayam Goreng (1), Kulit, Nasi (2), Tahu/Tempe, Jukut, Sambal, Lalap' },
  { id: 2, name: 'Paket Ber-2 (2)', price: '80K', desc: 'Ayam Goreng (1), Bebek Goreng (1), Nasi (2), Tahu/Tempe, Sambal, Jukut, Lalap' },
  { id: 3, name: 'Paket Ber-4', price: '136K', desc: 'Ayam Goreng (2), Kulit (2), Nasi (4), Tahu/Tempe (4), Sambal (4), Jukut (4), Lalap' },
  { id: 4, name: 'Paket Ber-6', price: '212K', desc: 'Ayam (2), Nila (2), Kulit (2), Nasi (6), Tahu/Tempe (6), Sambal (6), Jukut (6), Lalap' },
];

const menuData = {
  utama: [
    { name: 'Ayam Goreng Selaras', price: '20K', best: true },
    { name: 'Ayam Bakar Sambal Kacang', price: '26K', best: false },
    { name: 'Nila Goreng', price: '20K', best: true },
    { name: 'Bebek Goreng', price: '34K', best: true },
    { name: 'Kulit Goreng', price: '10K', best: true },
    { name: 'Sop Iga Garang Asam', price: '40K', best: true },
    { name: 'Tumis Peda Pete Jagung', price: '20K', best: true },
  ],
  snack: [
    { name: 'Bakwan Jagung (2 pcs)', price: '10K', best: true },
    { name: 'Sosis Solo', price: '5K', best: false },
    { name: 'Tahu Bakso', price: '4K', best: false },
    { name: 'Tahu Isi', price: '3.5K', best: false },
    { name: 'Risol', price: '5K', best: false },
  ],
  kopitiam: [
    { name: 'Kopi Susu Butter', price: '17K', best: true },
    { name: 'Mie Chili Oil', price: '10K', best: true },
    { name: 'Es Kopi Gula Aren', price: '20K', best: false },
    { name: 'Dimsum Mix (3 pcs)', price: '18K', best: false },
    { name: 'Roti Kaya', price: '15K', best: false },
  ]
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'utama' | 'snack' | 'kopitiam'>('utama');

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Paket Cobek Header */}
        <div id="paket" className="text-center mb-10 md:mb-16">
          <span className="text-brand-red font-bold text-[10px] uppercase tracking-widest bg-brand-red/10 px-3 py-1 rounded-full mb-4 inline-block">Makan Hemat</span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mb-4">PAKET COBEK SELARAS</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Pilihan porsi hemat yang pas untuk berbagi kebahagiaan di setiap moment makan Anda.</p>
        </div>

        {/* Paket Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {paketCobek.map((paket) => (
            <motion.div
              key={paket.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-orange text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-orange/20">
                  <Utensils size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black mb-2 md:mb-3 text-brand-dark leading-tight">{paket.name.toUpperCase()}</h3>
                <p className="text-gray-400 text-[10px] md:text-xs mb-4 md:mb-6 leading-relaxed font-medium">{paket.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">Mulai Dari</span>
                  <span className="text-xl md:text-3xl font-black text-brand-red">Rp {paket.price}</span>
                </div>
                <button className="bg-brand-dark text-white p-2 md:p-3 rounded-xl md:rounded-2xl hover:bg-brand-red transition-all shadow-lg active:scale-95">
                  <ShoppingCart size={18} className="md:w-5 md:h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Menu Tabs */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-brand-dark/5 p-6 md:p-16 border border-gray-50">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-10 md:mb-16">
            {[
              { id: 'utama', label: 'MENU UTAMA', icon: Utensils },
              { id: 'snack', label: 'ANEKA GORENGAN', icon: Pizza },
              { id: 'kopitiam', label: 'SELARAS KOPITIAM', icon: Coffee },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs tracking-widest transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-red text-white shadow-xl shadow-brand-red/30 scale-105'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 active:scale-95'
                }`}
              >
                <tab.icon size={16} className="md:w-5 md:h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="col-span-full grid md:grid-cols-2 gap-x-12 lg:gap-x-20"
              >
                {menuData[activeTab].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end group py-3 md:py-4 border-b border-gray-100">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="font-display font-black text-base md:text-lg text-brand-dark group-hover:text-brand-red transition-colors tracking-tight">
                          {item.name}
                        </span>
                        {item.best && (
                          <span className="bg-brand-orange text-white text-[8px] md:text-[9px] font-black px-1.5 md:px-2 py-0.5 rounded-md uppercase tracking-widest leading-none">
                            Best
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg md:text-xl text-brand-dark">Rp {item.price}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 italic text-sm mb-6">
              * Harga belum termasuk PPN 10% | Gratis Nasi Putih & Lalapan Sepuasnya
            </p>
            <a
              href="https://wa.me/6285371334717"
              className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline"
            >
              Lihat Menu Selengkapnya
              <Star size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
