import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuSection from '@/components/MenuSection';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen relative bg-white">
        <Navbar />
        <Hero />
        <MenuSection />
        <Features />
        <LocationContact />
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285371334717"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-105 active:scale-95 group flex items-center justify-center min-w-[48px] min-h-[48px]"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle size={24} className="sm:w-7 sm:h-7" />
          <span className="absolute right-full mr-3 bg-white text-brand-dark px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none border border-gray-100 hidden sm:block">
            Butuh Bantuan? Chat Kami
          </span>
        </a>
      </main>
    </PageWrapper>
  );
}
