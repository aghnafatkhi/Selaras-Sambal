import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function MenuPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen relative pt-24 bg-white">
        <Navbar />
        <div className="py-12">
          <MenuSection />
        </div>
        <Footer />
      </main>
    </PageWrapper>
  );
}
