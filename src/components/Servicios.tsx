'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🍽️',
    title: 'Cocina Tradicional',
    desc: 'Platos elaborados con ingredientes de calidad local. Un homenaje a la gastronomía de siempre con un toque actual.',
  },
  {
    icon: '🍷',
    title: 'Bar y Vinos',
    desc: 'Selección de vinos y bebidas perfectas para el aperitivo o sobremesa. El ambiente ideal para desconectar.',
  },
  {
    icon: '🎉',
    title: 'Eventos y Reservas',
    desc: 'Espacio acogedor ideal para celebraciones y reuniones familiares. Reservamos tu mesa para que no te preocupes.',
  },
  {
    icon: '☕',
    title: 'Desayunos y Almuerzos',
    desc: 'Comienza el día con energía con nuestros desayunos variados. La mejor parada en tu rutina diaria.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#d4a853]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">Qué ofrecemos</p>
          <h2 className="text-3xl sm:text-5xl font-bold">Nuestros Servicios</h2>
          <div className="w-16 h-0.5 bg-[#d4a853] mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#d4a853]/30 transition-all duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">{service.desc}</p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4a853]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
