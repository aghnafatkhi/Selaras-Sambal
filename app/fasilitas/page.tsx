import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function FasilitasPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen relative pt-24 bg-white">
        <Navbar />
        <Features />
        <Footer />
      </main>
    </PageWrapper>
  );
}
