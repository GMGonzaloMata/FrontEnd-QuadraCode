import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuadraCode",
  description: "Empresa de desarrollo de software en Corrientes, Argentina. Somos QuadraCode, estudiantes apasionados por crear soluciones digitales.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "PTDRhprIFCybxdgER8ZouaaO1E0hZYltrymAPgXlfi0",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
    <Head>
    <link rel="icon" href="/logo.png" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "QuadraCode",
            "url": "https://quadracode.vercel.app",
            "logo": "https://quadracode.vercel.app/logo.png"
       }),
      }}
    />
    </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
