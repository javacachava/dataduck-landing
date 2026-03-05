"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Store, Globe } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startups en crecimiento",
    description:
      "Necesitas infraestructura sólida desde el día uno sin gastar como una corporación.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "hover:border-teal-500/30",
  },
  {
    icon: Building2,
    title: "Empresas medianas",
    description:
      "Tu equipo crece rápido y necesitas sistemas que escalen sin romper procesos existentes.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
  },
  {
    icon: Store,
    title: "Retail y comercio",
    description:
      "Múltiples sucursales, inventario distribuido y punto de venta integrado en una sola plataforma.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/30",
  },
  {
    icon: Globe,
    title: "Empresas con operación digital",
    description:
      "Si tu negocio vive en la nube, necesitas backend robusto, APIs y automatización.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function TargetAudience() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Nuestros clientes ideales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Para quién es{" "}
            <span className="gradient-text">Databack</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Creamos soluciones para empresas que buscan crecer con tecnología
            confiable y profesional.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 text-center ${aud.border} transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${aud.bg} flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon size={28} className={aud.color} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {aud.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {aud.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
