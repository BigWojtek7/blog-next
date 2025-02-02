import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
