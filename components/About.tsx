"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  HeadphonesIcon,
  Handshake,
  MapPin,
  Globe2,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    text: "Código fuente completo — el sistema es tuyo",
  },
  {
    icon: Server,
    text: "Implementación en tu infraestructura — VPS, servidores locales o nube",
  },
  {
    icon: HeadphonesIcon,
    text: "Soporte técnico continuo — mantenimiento real, no tickets genéricos",
  },
  {
    icon: Handshake,
    text: "Un equipo que entiende tu negocio — no solo la tecnología",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un equipo técnico completo,{" "}
              <span className="gradient-text">no una agencia</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                DataDuck es una firma de{" "}
                <span className="text-gray-200">10 profesionales</span> con
                capacidades complementarias: desarrollo de software,
                arquitectura de sistemas, contaduría, marketing y asesoría
                legal.
              </p>
              <p>
                No somos freelancers sueltos ni una agencia de páginas web.
                Somos un equipo integrado que diseña, construye, despliega y
                mantiene{" "}
                <span className="text-gray-200">
                  software empresarial
                </span>
                .
              </p>
            </div>

            {/* What you get */}
            <div className="mt-8 space-y-4">
              <p className="text-sm font-medium text-white mb-4">
                Cuando trabajas con DataDuck, recibes:
              </p>
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Icon size={18} className="text-purple-400" />
                    </div>
                    <span className="text-gray-400 text-sm">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Location card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Team card */}
            <div className="glass-card rounded-2xl p-8 glow-purple">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
                  <span className="text-white font-extrabold text-2xl">D</span>
                </div>
                <h3 className="text-xl font-bold text-white">DataDuck</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Software empresarial
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: "10", label: "Profesionales" },
                  { value: "5", label: "Disciplinas" },
                  { value: "100%", label: "Código propio" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold gradient-text-teal">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-5 space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-purple-400 shrink-0" />
                  <span>Santa Ana, El Salvador</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Globe2 size={16} className="text-purple-400 shrink-0" />
                  <span>
                    Empresas en El Salvador y Centroamérica
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
