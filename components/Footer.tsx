'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <img 
                src="https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png" 
                alt="Selaras Sambal Logo" 
                className="h-12 w-auto object-contain bg-white rounded-xl flex-shrink-0 p-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }} 
              />
              <div className="hidden w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-brand-red/20">
                S
              </div>
              <span className="font-display text-2xl font-black uppercase tracking-tighter">SELARAS <span className="text-brand-red">SAMBAL</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-medium">
              Spesialis Sambal Dadakan di Cibubur. Sambal fresh yang dibuat saat dipesan, bahan berkualitas, dan harga tetap ramah di kantong.
            </p>
            <div className="flex gap-6 items-center text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 w-fit px-6 py-3 rounded-2xl border border-white/10">
              <span className="flex items-center gap-2 text-white"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> DINE-IN</span>
              <span className="opacity-40">TAKEAWAY</span>
              <span className="opacity-40">CATERING</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-brand-orange">Navigasi</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-brand-red transition-colors">Menu</Link></li>
              <li><Link href="/fasilitas" className="hover:text-brand-red transition-colors">Fasilitas</Link></li>
              <li><Link href="/kontak" className="hover:text-brand-red transition-colors">Lokasi & Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><span className="hover:text-brand-red">Syarat & Ketentuan</span></li>
              <li><span className="hover:text-brand-red">Kebijakan Privasi</span></li>
              <li><span className="hover:text-brand-red">Kontak Kami</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Selaras Sambal. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <span>Powered by Selaras Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
