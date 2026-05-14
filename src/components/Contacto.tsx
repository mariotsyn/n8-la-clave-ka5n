'use client';

import { motion } from 'framer-motion';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-[#111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">Contacto</p>
          <h2 className="text-3xl sm:text-5xl font-bold">Reserva tu mesa hoy mismo</h2>
          <p className="text-[#a0a0a0] mt-4 max-w-xl mx-auto">
            Estamos deseando atenderte. Llámanos o ven a visitarnos en el centro de Ayora.
          </p>
          <div className="w-16 h-0.5 bg-[#d4a853] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Dirección',
                  value: 'C. Empedra, 5, 46620 Ayora, Valencia',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Teléfono',
                  value: '+34 962 19 15 52',
                  href: 'tel:+34962191552',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Horario',
                  value: 'Lunes a Domingo — Consultar horario',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4a853]/10 flex items-center justify-center text-[#d4a853] shrink-0 group-hover:bg-[#d4a853]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-semibold hover:text-[#d4a853] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.1!2d-1.056832!3d39.0590623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAzJzMyLjYiTiAxwrAwMycyNC42Ilc!5e0!3m2!1ses!2ses!4v1!4m5!1m4!2s39.0590623%2C-1.056832!4m1!2i1!5m1!1e1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) brightness(0.5)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación La Clave"
              />
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              action={`https://formsubmit.co/lima.alejandro.xd@gmail.com`}
              method="POST"
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 space-y-6"
            >
              <input type="hidden" name="_subject" value="Nueva reserva - La Clave Web" />
              <input type="hidden" name="_next" value="https://n8-la-clave-ka5n-production.up.railway.app" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors placeholder:text-[#555]"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors placeholder:text-[#555]"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#a0a0a0] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors placeholder:text-[#555]"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-2">Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a0a0a0] mb-2">Hora</label>
                  <input
                    type="time"
                    name="hora"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#a0a0a0] mb-2">Personas</label>
                <select
                  name="personas"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-[#111]">{n} {n === 1 ? 'persona' : 'personas'}</option>
                  ))}
                  <option value="8+" className="bg-[#111]">Más de 8</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#a0a0a0] mb-2">Comentarios</label>
                <textarea
                  name="comentarios"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853] transition-colors placeholder:text-[#555] resize-none"
                  placeholder="Alergias, celebraciones, peticiones especiales..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-[#d4a853] text-black font-semibold rounded-xl text-lg hover:bg-[#b8912e] transition-colors shadow-lg shadow-[#d4a853]/20"
              >
                Solicitar Reserva
              </motion.button>

              <p className="text-xs text-center text-[#555]">
                Te confirmaremos la reserva por teléfono o email
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
