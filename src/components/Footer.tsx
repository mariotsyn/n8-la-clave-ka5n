'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-[#d4a853]">LA</span> CLAVE
            </h3>
            <p className="text-sm text-[#a0a0a0]">
              La esencia de la buena mesa en Ayora.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Enlaces</h4>
            <div className="space-y-2 text-sm text-[#a0a0a0]">
              {['Inicio', 'Servicios', 'Galería', 'Contacto'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block hover:text-[#d4a853] transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Horario</h4>
            <div className="text-sm text-[#a0a0a0] space-y-1">
              <p>Lunes a Domingo</p>
              <p>Consultar horario</p>
              <a href="tel:+34962191552" className="block mt-3 text-[#d4a853] hover:underline">
                +34 962 19 15 52
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 text-center text-sm text-[#555]"
        >
          <p>© {new Date().getFullYear()} La Clave — Ayora, Valencia</p>
        </motion.div>
      </div>
    </footer>
  );
}
