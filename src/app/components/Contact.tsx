"use client";

import React, { useRef, useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    compania: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, compania, email, telefono, mensaje } = formData;
    if (!nombre || !compania || !email || !telefono || !mensaje) {
      setIsSuccess(false);
      setStatusMessage("Debes llenar todos los campos.");
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
        nombre,
        compania,
        email,
        telefono,
        mensaje,
      });
      setIsSuccess(true);
      setStatusMessage("Mensaje enviado correctamente.");
      setFormData({
        nombre: "",
        compania: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setStatusMessage(
        "Error al enviar el mensaje. Intenta nuevamente más tarde."
      );
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center px-6 pt-36 pb-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source
          src="https://res.cloudinary.com/dhignxely/video/upload/v1745112382/3249940-uhd_3840_2160_25fps_pylrcx.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/20 z-0" />

      <div
        ref={formTopRef}
        className="relative z-10 w-full max-w-3xl bg-[#070a13] backdrop-blur-md rounded-xl p-8 md:p-12 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          ¿Listo para trabajar con nosotros?
        </h2>

        {statusMessage && (
          <div
            className={`mb-6 text-center font-medium ${
              isSuccess ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="compania"
            placeholder="Nombre de la Compañía"
            value={formData.compania}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows={5}
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative inline-block px-6 py-3 font-semibold text-white bg-[#7b1cd9] rounded-md cursor-pointer
                shadow-[0_0_15px_4px_rgba(123,28,217,0.4)] transition-all duration-300 ease-in-out
                hover:bg-white hover:text-[#6f3dcf] hover:scale-105 hover:shadow-[0_0_20px_6px_rgba(123,28,217,0.5)]"
            >
              <span className="relative z-10">Enviar mensaje</span>
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/20" />
            <span className="mx-4 text-white/60 italic">o</span>
            <div className="flex-grow border-t border-white/20" />
          </div>

          <div className="flex justify-center">
            <a
              href="https://wa.me/5493795066042"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-6 py-3 font-medium text-white bg-white/10 hover:bg-white/20 rounded-md transition cursor-pointer hover:scale-105 hover:shadow-[0_0_12px_3px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Comunicarse vía WhatsApp</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
