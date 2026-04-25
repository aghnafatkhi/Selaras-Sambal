import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Selaras Sambal - Spesialis Sambal Dadakan',
  description: 'Nikmati aneka paket cobek, sambal dadakan, dan menu Kopitiam otentik di Selaras Sambal Kota Wisata Cibubur.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="bg-white font-sans text-[#313131]">
        {children}
      </body>
    </html>
  );
}
