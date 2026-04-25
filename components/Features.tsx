'use client';

import { motion } from 'motion/react';
import { Leaf, Flame, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'Sambal Dadakan',
    description: 'Dibuat langsung saat pesanan masuk untuk menjaga kesegaran dan cita rasa maksimal.',
    icon: Flame,
    color: 'bg-red-100 text-brand-red',
  },
  {
    title: 'Refill Nasi & Lalapan',
    description: 'Gratis tambah nasi putih dan lalapan sepuasnya untuk setiap pembelian menu nasi.',
    icon: Leaf,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Ramah Keluarga',
    description: 'Tempat duduk luas, casual, dan nyaman untuk berkumpul bersama keluarga atau grup.',
    icon: Users,
    color: 'bg-orange-100 text-brand-orange',
  },
  {
    title: 'Layanan Cepat',
    description: 'Menerima pesanan Nasi Box dan Catering untuk berbagai acara spesial Anda.',
    icon: Clock,
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle parallax background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <div className="grid grid-cols-4 gap-40 rotate-12 scale-150">
          {[...Array(16)].map((_, i) => (
            <Flame key={i} size={80} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-brand-red font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Values</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Menghadirkan <span className="text-brand-orange text-outline-dark">Keselarasan</span> Rasa</h2>
          <p className="text-gray-500 text-base md:text-lg font-medium italic">
            &ldquo;Kami percaya sambal terbaik adalah yang dibuat dengan cinta, dedikasi, dan bahan baku pilihan setiap harinya.&rdquo;
          </p>
        </motion.div>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 bg-white hover:border-brand-red/10 transition-all group shadow-sm hover:shadow-2xl hover:shadow-brand-red/10 cursor-default"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:rotate-6 transition-all shadow-md group-hover:shadow-lg`}>
                <feature.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-black mb-3 md:mb-4 text-brand-dark tracking-tight uppercase">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-xs md:text-sm font-bold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
