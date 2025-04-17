import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

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
    icon: "/favicon.ico", // o "/favicon.png" si subiste como .png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
