'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#0b0f1a] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center gap-12"
    >
      {/* Contenedor principal responsive */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Columna de texto */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Agencia joven que ofrece soluciones digitales personalizadas
          </h2>

          <ul className="space-y-4 mb-8 text-left">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Desarrollo de sistemas a medida con tecnologías modernas
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Diseño web profesional y experiencia de usuario optimizada
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg">
                Automatización de procesos y soluciones escalables
              </span>
            </li>
          </ul>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          QuadraCode es una empresa de desarrollo de software enfocada en impulsar el crecimiento digital de marcas y negocios.
           Diseñamos soluciones personalizadas, desde plataformas web y móviles hasta sistemas de gestión, trabajando de forma colaborativa
             con cada cliente para garantizar que cada proyecto refleje su identidad y cumpla sus objetivos comerciales.
          </p>
        </motion.div>

        {/* Columna de imagen */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/about-image.png"
            alt="Sobre nosotros"
            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
