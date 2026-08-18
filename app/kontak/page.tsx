import Navbar from '@/components/Navbar';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function KontakPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen relative pt-16 sm:pt-20 md:pt-24 bg-white">
        <Navbar />
        <LocationContact />
        <Footer />
      </main>
    </PageWrapper>
  );
}
