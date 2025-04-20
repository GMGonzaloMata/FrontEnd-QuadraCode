'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-start text-left text-white overflow-hidden px-4 sm:px-6">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dhignxely/video/upload/v1745112261/video2_tkifrc.mp4" type="video/mp4" />
      </video>

      {/* Degradado lateral sobre el video */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b0f1a] to-transparent" />

      {/* Contenido sobre el degradado */}
      <div className="z-10 w-full max-w-5xl md:pl-16 lg:pl-32">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformamos ideas en <br className="hidden sm:block" /> soluciones digitales
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 text-white/90 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Innovación, tecnología y soluciones personalizadas para tu negocio.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
        >
        <Link
            href="/contact"
            className="relative inline-block px-6 py-3 font-semibold text-white bg-[#7b1cd9] rounded-md 
            shadow-[0_0_15px_4px_rgba(123,28,217,0.4)] transition-all duration-300 ease-in-out 
            hover:bg-white hover:text-[#6f3dcf] hover:scale-105 hover:shadow-[0_0_20px_6px_rgba(123,28,217,0.5)]"
        >
            <span className="relative z-10">Contáctanos</span>
        </Link>
        </motion.div>
      </div>
    </section>
  );
}
