'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Carlos Ruiz',
    rating: 5,
    text: 'La comida es excelente y el trato siempre es muy cercano. Sin duda mi sitio favorito en Ayora.',
    initial: 'C',
  },
  {
    name: 'Elena García',
    rating: 5,
    text: 'Un lugar con mucho encanto. Ideal para ir con amigos y disfrutar de buena gastronomía.',
    initial: 'E',
  },
  {
    name: 'Javier M.',
    rating: 4,
    text: 'Buen ambiente y servicio rápido. Calidad-precio muy recomendable.',
    initial: 'J',
  },
  {
    name: 'María López',
    rating: 5,
    text: 'El mejor lugar para desayunar en Ayora. Productos frescos y atención inmejorable.',
    initial: 'M',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a853]/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">Testimonios</p>
          <h2 className="text-3xl sm:text-5xl font-bold">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-0.5 bg-[#d4a853] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#d4a853]/20 transition-all duration-300"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? 'text-[#d4a853]' : 'text-[#333]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4a853]/20 flex items-center justify-center text-[#d4a853] font-bold text-sm">
                  {t.initial}
                </div>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
