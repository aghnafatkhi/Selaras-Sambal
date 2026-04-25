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
        <Features />
        <MenuSection />
        <LocationContact />
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285371334717"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none border border-gray-100">
            Butuh Bantuan? Chat Kami
          </span>
        </a>
      </main>
    </PageWrapper>
  );
}
