import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Caesar_Dressing, Roboto, Montserrat, Rajdhani } from 'next/font/google';

// FONTS IMPORT
const caesar = Caesar_Dressing({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caesar',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Porfolio Guinel Charly",
  description: "Découvrez le portfolio de Charly Guinel, développeur web front-end et back-end basé à Nantes.",
  keywords: "portfolio, SEO, développeur web, front-end, back-end, Nantes, Guinel Charly",
  authors: [{ name: "Charly Guinel", url: "https://www.tonsite.com" }],
  openGraph: {
    title: "Porfolio Guinel Charly",
    description: "Découvrez le portfolio de Charly Guinel, développeur web basé à Nantes.",
    url: "https://www.tonsite.com",
    siteName: "Guinel Charly",
    images: [
      {
        url: "https://www.tonsite.com/mon-image.jpg",
        width: 800,
        height: 600,
        alt: "Logo GC",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Injections des fonts
    <html lang="fr" className={`${caesar.variable} ${roboto.variable} ${montserrat.variable} ${rajdhani.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Charly Guinel" />
        <meta
          name="description"
          content="Découvrez le portfolio de Charly Guinel, développeur web passionné basé à Nantes. Retrouvez ses compétences en développement front-end et back-end, ses projets professionnels et son parcours de reconversion dans le monde du web."
        />
        <meta name="keywords" content="portfolio, SEO, développeur web, front-end, back-end, Nantes, Guinel Charly" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap"
          rel="stylesheet"
        />     
      </Head>
      <body>
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
