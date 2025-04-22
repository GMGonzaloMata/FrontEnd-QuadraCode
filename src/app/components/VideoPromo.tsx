'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, PauseCircle, Volume2, VolumeX, X } from 'lucide-react';
import Image from 'next/image';


export default function VideoPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleClose = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="video-nosotros" className="bg-[#0b0f1a] py-10">
        <div className="w-full px-4 sm:px-6 md:pl-20 md:pr-0">
        <motion.div
          onClick={() => setIsOpen(true)}
          className="group flex w-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.5)] rounded-l-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }} // sin delay
          viewport={{ once: true }}
        >
          <div className="relative w-32 h-20 md:w-40 md:h-24 flex-shrink-0 rounded-l-md overflow-hidden">
          <Image
            src="/miniatura.jpg"
            alt="Miniatura"
            width={160} // Ajustá estos valores si sabés los exactos (por ejemplo: 160x120px)
            height={120}
            className="w-full h-full object-cover transition duration-300 group-hover:brightness-75 rounded-l-md"
            priority
          />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-transparent text-white p-4 flex flex-col justify-center w-full rounded-r-md">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              Conozca Nuestra Historia
            </h3>
            <span className="text-xs text-white/80">1 MINUTO</span>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition text-3xl cursor-pointer"
              >
                <X size={32} />
              </button>

              <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/dhignxely/video/upload/v1745111832/video_1_shfyvr.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={false}
                  playsInline
                />

                {/* Controles personalizados */}
                <div className="absolute bottom-4 left-4 flex gap-4">
                  <button onClick={togglePlay} className="text-white hover:scale-110 transition cursor-pointer">
                    {isPlaying ? <PauseCircle size={36} /> : <PlayCircle size={36} />}
                  </button>

                  <button onClick={toggleMute} className="text-white hover:scale-110 transition cursor-pointer">
                    {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}