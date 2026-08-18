import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function MenuPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen relative pt-16 sm:pt-20 md:pt-24 bg-white">
        <Navbar />
        <div>
          <MenuSection />
        </div>
        <Footer />
      </main>
    </PageWrapper>
  );
}
