import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './assets/css/globals.css';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Fulvio - Frontend Developer',
  description:
    "I'm a software engineer passionated about frontend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="home">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
