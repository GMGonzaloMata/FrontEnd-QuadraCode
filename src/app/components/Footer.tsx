'use client';

import { Instagram, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-white py-12 px-6 md:px-16">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#8c88f9]">4</span>QuadraCode - Software a Medida
        </h2>
      </div>

      {/* Separador */}
      <div className="my-10 border-t border-white/10" />

      {/* Fila inferior */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Columna 1 */}
        <div className="text-sm text-white/80 text-center md:text-left">
          &copy; {new Date().getFullYear()}, QuadraCode. Todos los derechos reservados.
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Corrientes, Argentina</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:4quadracode@gmail.com">4quadracode@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={16} />
            <a
              href="https://www.instagram.com/quadracode4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @quadracode4
            </a>
          </div>
        </div>

        {/* Columna 3 */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-white/80 hover:text-white transition">
            Política de privacidad
          </a>
          <a
            href="https://github.com/GMGonzaloMata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition"
          >
            <FaGithub size={22} />
          </a>
          <Image src="/logo.png" alt="Logo QuadraCode" width={30} height={30} className="rounded-full" />
        </div>
      </div>
    </footer>
  );
}
