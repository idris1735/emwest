import type { Metadata } from 'next';
import { Inter, DM_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ThemeProvider from '@/components/ThemeProvider';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'EMWA 2027 — Equipment & Manufacturing West Africa | Lagos, Nigeria',
    template: '%s — EMWA 2027',
  },
  description:
    "Nigeria's premier international trade exhibition for industrial products, manufacturing equipment & machinery. 25–27 May 2027, Landmark Centre, Lagos. 3,700+ buyers, 47+ global brands.",
  keywords: [
    'EMWA', 'Equipment Manufacturing West Africa', 'Nigeria trade show',
    'industrial exhibition Lagos', 'manufacturing expo 2027', 'industrial trade fair',
    'manufacturing conference Nigeria', 'West Africa manufacturing', 'Zenith Exhibitions',
    'Lagos trade exhibition', 'industrial machinery expo',
  ],
  authors: [{ name: 'Zenith Exhibitions' }],
  creator: 'Zenith Exhibitions',
  publisher: 'Zenith Exhibitions',
  robots: { index: true, follow: true, 'max-image-preview': 'large' as const },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'EMWA 2027',
    title: 'EMWA 2027 — Equipment & Manufacturing West Africa',
    description:
      "Nigeria's premier industrial trade exhibition. 3,700+ buyers, 47+ brands, 3 days. Landmark Centre, Lagos. 25–27 May 2027.",
    url: 'https://emwestafrica.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EMWA 2027 — Equipment & Manufacturing West Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMWA 2027 — Equipment & Manufacturing West Africa',
    description:
      "Nigeria's premier industrial trade exhibition. 25–27 May 2027, Lagos.",
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  metadataBase: new URL('https://emwestafrica.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('emwa-theme');if(!t){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        {/* JSON-LD Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'EMWA 2027 — Equipment & Manufacturing West Africa',
              description:
                "Nigeria's premier international trade exhibition for industrial products, manufacturing equipment & machinery.",
              startDate: '2027-05-25T10:00:00+01:00',
              endDate: '2027-05-27T15:30:00+01:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Landmark Centre',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Plot 2 & 3, Water Corporation Drive, Victoria Island, Annex',
                  addressLocality: 'Lagos',
                  addressCountry: 'NG',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'Zenith Exhibitions',
                url: 'https://emwestafrica.com',
                email: 'info@zenithexhibitions.com',
                telephone: '+234 703 362 3685',
              },
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Exhibitor Stand',
                  url: 'https://emwestafrica.com/exhibitors#book',
                },
                {
                  '@type': 'Offer',
                  name: 'Visitor Registration',
                  url: 'https://emwestafrica.com/visitors#register',
                  price: '0',
                  priceCurrency: 'NGN',
                },
              ],
              image: 'https://emwestafrica.com/images/og-image.jpg',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-deep-navy text-white transition-colors duration-300">
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
