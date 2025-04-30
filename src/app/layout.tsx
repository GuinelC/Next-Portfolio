import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Charly Guinel" />
        <meta
          name="description"
          content="Découvrez le portfolio de Charly Guinel, développeur web passionné basé à Nantes. Retrouvez ses compétences en développement front-end et back-end, ses projets professionnels et son parcours de reconversion dans le monde du web."
        />
        <meta name="keywords" content="portfolio, SEO, développeur web, front-end, back-end, Nantes, Guinel Charly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
