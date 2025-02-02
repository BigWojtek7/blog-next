import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

import { ThemeProvider } from '@/app/ui/theme-provider';

import Navbar from './ui/navbar/Navbar';
import Footer from './ui/footer/Footer';
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
    <html suppressHydrationWarning lang="en">
      <body className={`${roboto.className} antialiased`}>
        {' '}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
