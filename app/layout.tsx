import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { CartProvider } from '@/components/providers/CartProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Royalwood - Premium Handcrafted Furniture',
  description: 'Discover exquisite handcrafted furniture made from the finest woods. Premium quality, timeless design, and exceptional craftsmanship.',
  keywords: ['furniture', 'handcrafted', 'premium', 'wood', 'luxury', 'interior design'],
  authors: [{ name: 'Royalwood' }],
  openGraph: {
    title: 'Royalwood - Premium Handcrafted Furniture',
    description: 'Discover exquisite handcrafted furniture made from the finest woods.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Royalwood',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royalwood - Premium Handcrafted Furniture',
    description: 'Discover exquisite handcrafted furniture made from the finest woods.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}