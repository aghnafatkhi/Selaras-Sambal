'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, Coffee, Utensils, Pizza, ChevronRight } from 'lucide-react';

const paketCobek = [
  { 
    id: 1, 
    name: 'Paket 2 Orang (A)', 
    price: '86K', 
    desc: 'Ayam Goreng, Kulit Krispi, Nasi (2x), Tahu & Tempe, Jukut, Sambal Dadakan',
    image: 'https://images.unsplash.com/photo-1612803875323-96b01b6357cf?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Paket 2 Orang (B)', 
    price: '80K', 
    desc: 'Ayam Goreng, Bebek Goreng, Nasi (2x), Tahu & Tempe, Jukut, Sambal Dadakan',
    image: 'https://images.unsplash.com/photo-1544025162-811676e5300a?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Paket 4 Orang', 
    price: '136K', 
    desc: 'Ayam Goreng (2x), Kulit (2x), Nasi (4x), Tahu/Tempe (4x), Sambal, Jukut, Lalap',
    image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Paket 6 Orang', 
    price: '212K', 
    desc: 'Ayam (2x), Nila (2x), Kulit (2x), Nasi (6x), Tahu/Tempe (6x), Pas untuk kumpul besar',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop'
  },
];

const menuData = {
  utama: [
    { name: 'Ayam Goreng Selaras', price: '20K', best: true, image: 'https://images.unsplash.com/photo-1621510456681-23a242c75a9e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Ayam Bakar Sambal Kacang', price: '26K', best: false, image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=200&auto=format&fit=crop' },
    { name: 'Nila Goreng', price: '20K', best: true, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200&auto=format&fit=crop' },
    { name: 'Bebek Goreng', price: '34K', best: true, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Kulit Goreng', price: '10K', best: true, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sop Iga Garang Asam', price: '40K', best: true, image: 'https://images.unsplash.com/photo-1548943487-a2e4142f4fd4?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tumis Peda Pete Jagung', price: '20K', best: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop' },
  ],
  snack: [
    { name: 'Bakwan Jagung (2 pcs)', price: '10K', best: true, image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sosis Solo', price: '5K', best: false, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tahu Bakso', price: '4K', best: false, image: 'https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tahu Isi', price: '3.5K', best: false, image: 'https://images.unsplash.com/photo-1606149059549-6042add7c0f1?q=80&w=200&auto=format&fit=crop' },
    { name: 'Risol', price: '5K', best: false, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop' },
  ],
  kopitiam: [
    { name: 'Kopi Susu Butter', price: '17K', best: true, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aef11?q=80&w=200&auto=format&fit=crop' },
    { name: 'Mie Chili Oil', price: '10K', best: true, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200&auto=format&fit=crop' },
    { name: 'Es Kopi Gula Aren', price: '20K', best: false, image: 'https://images.unsplash.com/photo-1557142046-c704a3adf817?q=80&w=200&auto=format&fit=crop' },
    { name: 'Dimsum Mix (3 pcs)', price: '18K', best: false, image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Roti Kaya', price: '15K', best: false, image: 'https://images.unsplash.com/photo-1509440159596-f28841a18206?q=80&w=200&auto=format&fit=crop' },
  ]
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'utama' | 'snack' | 'kopitiam'>('utama');

  return (
    <section id="menu" className="py-10 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Paket Cobek Header */}
        <motion.div 
          id="paket" 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 sm:mb-10 md:mb-16"
        >
          <span className="text-brand-red font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-brand-red/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-2 sm:mb-3 inline-block">
            Makan Hemat & Puas
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-2 sm:mb-3 md:mb-4 uppercase tracking-tight">
            PILIHAN PAKET COBEK
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Porsi pas buat sharing bareng teman atau keluarga. Lebih hemat untuk makan bareng.
          </p>
        </motion.div>

        {/* Paket Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8 mb-8 sm:mb-14 md:mb-24">
          {paketCobek.map((paket, index) => (
            <motion.div
              key={paket.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-36 sm:h-44 md:h-56 overflow-hidden">
                <img 
                  src={paket.image} 
                  alt={paket.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2.5 left-3.5 sm:bottom-4 sm:left-6">
                  <span className="text-[9px] sm:text-[10px] font-black text-white/90 uppercase tracking-wider bg-brand-orange px-2 py-0.5 rounded-full shadow-xs">
                    Best Seller
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-8 flex-1 flex flex-col">
                <h3 className="font-display text-base sm:text-xl md:text-2xl font-black mb-1 sm:mb-2 text-brand-dark leading-tight">
                  {paket.name.toUpperCase()}
                </h3>
                <p className="text-gray-400 text-[11px] sm:text-xs mb-3 sm:mb-5 leading-relaxed font-bold opacity-80">
                  {paket.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 md:pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[9px] font-black text-gray-400 uppercase tracking-widest">
                      Mulai Dari
                    </span>
                    <span className="text-base sm:text-xl md:text-2xl font-black text-brand-red">
                      Rp {paket.price}
                    </span>
                  </div>
                  <a 
                    href="https://wa.me/6285371334717"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan ${paket.name} via WhatsApp`}
                    className="min-w-[42px] min-h-[42px] w-10 h-10 sm:w-12 sm:h-12 bg-brand-dark text-white rounded-xl sm:rounded-2xl hover:bg-brand-red flex items-center justify-center transition-all active:scale-90 shadow-xs"
                  >
                    <ShoppingCart size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Menu Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-lg shadow-brand-dark/5 p-3.5 sm:p-6 md:p-14 border border-gray-100/60"
        >
          {/* Scrollable Tab Container on Mobile */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 justify-start sm:justify-center gap-1.5 sm:gap-3 md:gap-4 mb-5 sm:mb-8 md:mb-16 -mx-1 px-1 no-scrollbar">
            {[
              { id: 'utama', label: 'MENU UTAMA', icon: Utensils },
              { id: 'snack', label: 'ANEKA GORENGAN', icon: Pizza },
              { id: 'kopitiam', label: 'SELARAS KOPITIAM', icon: Coffee },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-6 md:px-10 py-2 sm:py-3.5 md:py-4 rounded-full font-black text-[10px] sm:text-xs tracking-wider transition-all relative overflow-hidden flex-shrink-0 min-h-[40px] sm:min-h-[44px] ${
                  activeTab === tab.id
                    ? 'text-white shadow-md shadow-brand-red/20 bg-brand-red md:bg-transparent'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-brand-red z-0 hidden md:block"
                    transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
                  />
                )}
                <tab.icon size={14} className="relative z-10" />
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0.5">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="col-span-full grid md:grid-cols-2 gap-x-8 lg:gap-x-16"
            >
              {menuData[activeTab].map((item, idx) => (
                  <div key={idx} className="flex items-center group py-2 sm:py-3 md:py-4 border-b border-gray-100 gap-2.5 sm:gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl object-cover shadow-2xs bg-gray-100 flex-shrink-0" 
                    />
                    <div className="flex flex-col gap-0.5 sm:gap-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-display font-black text-xs sm:text-base md:text-lg text-brand-dark group-hover:text-brand-orange transition-colors tracking-tight leading-tight">
                          {item.name}
                        </span>
                        {item.best && (
                          <span className="bg-brand-red text-white text-[7px] sm:text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider whitespace-nowrap">
                            Favorite
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="font-black text-xs sm:text-lg md:text-xl text-brand-red whitespace-nowrap">
                        Rp {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
          </div>

          <div className="mt-6 sm:mt-10 md:mt-14 text-center">
            <p className="text-gray-400 italic text-[11px] sm:text-xs md:text-sm mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto leading-relaxed">
              * Harga belum termasuk PPN 10% | <span className="text-brand-orange font-bold">Gratis Nasi Putih & Lalapan Sepuasnya</span> untuk setiap pembelian Menu Utama
            </p>
            <motion.a
              href="https://wa.me/6285371334717"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-brand-dark text-white px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-brand-dark/15 hover:bg-brand-red transition-colors group w-full sm:w-auto min-h-[44px] sm:min-h-[48px]"
            >
              <span>Download Full Menu PDF</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <ChevronRight size={14} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
