'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#d4a853]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="text-2xl sm:text-3xl font-bold tracking-wider">
            <span className="text-[#d4a853]">LA</span>{' '}
            <span className="text-white">CLAVE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.2em] text-[#a0a0a0] hover:text-[#d4a853] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#d4a853] text-black text-sm font-semibold rounded-full hover:bg-[#b8912e] transition-all duration-300 shadow-lg shadow-[#d4a853]/20"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
