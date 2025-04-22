'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 text-white shadow-sm transition-colors duration-300 ${
        isScrolled ? 'bg-[#070a13]/60 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-2">
        <Image
            src="/logo.png"
            alt="Logo QuadraCode"
            width={56}   // Aproximadamente h-14 (14 * 4px = 56px)
            height={56}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold tracking-wide">QuadraCode</span>
        </Link>

        {/* Botón hamburguesa en móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 transition"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en desktop */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li>
            <Link
              href="/#nosotros"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/#video-nosotros"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200"
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-[#070a13]/80 backdrop-blur-md"
        >
          <li>
            <Link
              href="/#nosotros"
              onClick={() => setIsMenuOpen(false)}
              className="block py-4 text-lg font-medium text-white hover:text-purple-400 transition"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/#video-nosotros"
              onClick={() => setIsMenuOpen(false)}
              className="block py-1 text-lg font-medium text-white hover:text-purple-400 transition"
            >
              Nosotros
            </Link>
          </li>
        </motion.ul>        
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
