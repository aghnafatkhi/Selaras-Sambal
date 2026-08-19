'use client';

import { motion } from 'motion/react';
import { Leaf, Flame, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'Selalu Fresh',
    description: 'Bukan stok lama. Setiap sambal dibuat saat Anda pesan, jadi rasanya lebih segar.',
    icon: Flame,
    color: 'bg-red-100 text-brand-red',
  },
  {
    title: 'Free Refill Nasi',
    description: 'Gratis tambah nasi putih dan lalapan sepuasnya.',
    icon: Leaf,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Tempat Nyaman',
    description: 'Tempat luas dan nyaman untuk makan bareng keluarga atau teman.',
    icon: Users,
    color: 'bg-orange-100 text-brand-orange',
  },
  {
    title: 'Pesan Antar',
    description: 'Tersedia layanan Nasi Box dan Catering untuk event atau selamatan Anda.',
    icon: Clock,
    color: 'bg-blue-100 text-blue-600',
  },
];

export function FeaturesSkeleton() {
  return (
    <section className="py-10 sm:py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-20 flex flex-col items-center">
          <div className="h-3.5 w-28 bg-gray-200 rounded-full animate-pulse mb-3" />
          <div className="h-8 sm:h-12 w-3/4 sm:w-1/2 bg-gray-200 rounded-xl animate-pulse mb-4" />
          <div className="h-4 w-5/6 sm:w-2/3 bg-gray-100 rounded-lg animate-pulse" />
        </div>

        {/* Feature Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-gray-100 bg-white shadow-xs flex flex-col items-start"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gray-200 animate-pulse mb-3 sm:mb-4 md:mb-8" />
              <div className="h-5 sm:h-6 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-2.5 sm:mb-3" />
              <div className="space-y-2 w-full">
                <div className="h-3.5 w-full bg-gray-100 rounded animate-pulse" />
                <div className="h-3.5 w-4/5 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Features({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return <FeaturesSkeleton />;
  }

  return (
    <section id="fasilitas" className="py-10 sm:py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle parallax background icons */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <div className="grid grid-cols-4 gap-40 rotate-12 scale-150">
          {[...Array(16)].map((_, i) => (
            <Flame key={i} size={80} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-20"
        >
          <span className="text-brand-red font-black text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-1.5 sm:mb-3 block">
            Keunggulan Kami
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4 md:mb-6 uppercase tracking-tight">
            Kenapa Harus <span className="text-brand-orange">Sambal</span> Selaras?
          </h2>
          <p className="text-gray-500 text-xs sm:text-base md:text-lg font-medium italic">
            &ldquo;Pedasnya pas, selalu fresh, dan harga tetap masuk akal di setiap porsi.&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-gray-100 bg-white hover:border-brand-red/20 transition-all group shadow-xs hover:shadow-lg hover:shadow-brand-red/5 cursor-default flex flex-col items-start"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2.5 sm:mb-4 md:mb-8 group-hover:rotate-6 transition-all shadow-2xs`}>
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-display text-base sm:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 text-brand-dark tracking-tight uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
