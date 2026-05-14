'use client';

import { motion } from 'framer-motion';

export default function SobreNosotros() {
  return (
    <section className="py-24 sm:py-32 bg-[#111] relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#d4a853]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - decorative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 sm:p-12 border border-white/5">
              <div className="text-8xl font-bold text-[#d4a853]/10 leading-none select-none absolute top-4 right-6">
                &ldquo;
              </div>
              <p className="text-lg sm:text-xl text-[#a0a0a0] leading-relaxed italic mb-8">
                En La Clave, somos apasionados por crear un punto de encuentro en Ayora.
                Nuestro compromiso es ofrecer un servicio cercano y una cocina honesta
                que invite a volver.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a853]/20 flex items-center justify-center text-[#d4a853] font-bold text-xl">
                  LC
                </div>
                <div>
                  <p className="font-semibold">La Clave</p>
                  <p className="text-sm text-[#a0a0a0]">Desde siempre en Ayora</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d4a853]/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">Conócenos</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Mucho más que un <span className="text-[#d4a853]">restaurante</span>
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8 text-lg">
              Contamos con años de experiencia cuidando cada detalle para que cada visita sea
              especial. Ya sea para un almuerzo rápido o una cena con amigos, aquí encontrarás
              siempre las puertas abiertas.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '4.3', label: 'Valoración' },
                { number: '126+', label: 'Reseñas' },
                { number: '15+', label: 'Años' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#d4a853]">{stat.number}</p>
                  <p className="text-sm text-[#a0a0a0] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
