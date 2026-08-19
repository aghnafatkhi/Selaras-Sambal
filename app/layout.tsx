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
  title: 'Selaras Sambal - Spesialis Sambal Dadakan & Kuliner Kota Wisata Cibubur',
  description: 'Nikmati aneka paket cobek, sambal dadakan fresh, dan menu Kopitiam otentik di Selaras Sambal Kota Wisata Cibubur. Free refill nasi dan lalapan sepuasnya!',
  keywords: [
    'Selaras Sambal',
    'Sambal Dadakan Cibubur',
    'Restoran Cibubur',
    'Kuliner Kota Wisata',
    'Rumah Makan Cibubur',
    'Paket Cobek Cibubur',
    'Ayam Goreng Sambal Dadakan',
    'Kopitiam Kota Wisata',
    'Tempat Makan Keluarga Cibubur'
  ],
  openGraph: {
    title: 'Selaras Sambal - Spesialis Sambal Dadakan Kota Wisata Cibubur',
    description: 'Spesialis sambal dadakan fresh diulek saat dipesan. Nikmati paket cobek hemat, free refill nasi & lalapan di Cibubur.',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png',
        width: 800,
        height: 800,
        alt: 'Selaras Sambal Kota Wisata Cibubur',
      },
    ],
  },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://selarassambal.com/#restaurant',
  name: 'Selaras Sambal Kota Wisata Cibubur',
  alternateName: ['Selaras Sambal', 'Sambal Dadakan Selaras', 'Selaras Sambal Cibubur'],
  description: 'Spesialis Sambal Dadakan segar di Kota Wisata Cibubur. Menyajikan aneka paket cobek hemat, menu masakan nusantara fresh saat dipesan, dan menu Kopitiam otentik dengan promo free refill nasi putih dan lalapan.',
  image: [
    'https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png',
    'https://images.unsplash.com/photo-1612803875323-96b01b6357cf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-811676e5300a?q=80&w=800&auto=format&fit=crop'
  ],
  logo: 'https://i.postimg.cc/Bv04nzNq/Logo-Sambal-Selaras-Transparent.png',
  telephone: '+6285371334717',
  servesCuisine: ['Indonesian', 'Sundanese', 'Sambal Dadakan', 'Kopitiam'],
  priceRange: 'Rp 10.000 - Rp 220.000',
  currenciesAccepted: 'IDR',
  paymentAccepted: 'Cash, QRIS, Debit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Wisata Utama (Samping Gerbang Utama Kota Wisata Cibubur), Ciangsana',
    addressLocality: 'Kecamatan Gunung Putri, Kabupaten Bogor',
    addressRegion: 'Jawa Barat',
    postalCode: '16968',
    addressCountry: 'ID'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.3752,
    longitude: 106.9621
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '21:00'
    }
  ],
  hasMenu: 'https://selarassambal.com/#menu',
  menu: 'https://selarassambal.com/#menu',
  acceptsReservations: 'True',
  publicAccess: true,
  smokingAllowed: false,
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Free Refill Nasi & Lalapan',
      value: true
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Area Parkir Luas',
      value: true
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Dine-in & Takeaway',
      value: true
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Catering & Nasi Box',
      value: true
    }
  ],
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wa.me/6285371334717?text=Halo%20Selaras%20Sambal%2C%20saya%20ingin%20pesan',
      inLanguage: 'id-ID',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform'
      ]
    },
    deliveryMethod: [
      'http://purl.org/goodrelations/v1#DeliveryModePickUp',
      'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet'
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white font-sans text-[#313131]">
        {children}
      </body>
    </html>
  );
}
