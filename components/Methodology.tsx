"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu operación, identificamos los procesos críticos y definimos qué necesita tu sistema.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Diseño y Arquitectura",
    description:
      "Diseñamos la estructura técnica, los flujos de usuario y la base de datos antes de escribir una línea de código.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollo e Iteración",
    description:
      "Construimos en ciclos cortos con entregas parciales para que veas avance real cada semana.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Despliegue y Soporte",
    description:
      "Instalamos el sistema en tu infraestructura, capacitamos a tu equipo y quedamos disponibles para soporte continuo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Methodology() {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            De la idea al sistema{" "}
            <span className="gradient-text">funcionando</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un proceso claro y transparente para que siempre sepas en qué va tu
            proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="glass-card rounded-2xl p-7 group hover:border-teal-500/20 transition-all duration-300 relative"
              >
                {/* Step number watermark */}
                <span className="absolute top-4 right-5 text-7xl font-black text-white/[0.03] select-none leading-none">
                  {step.step}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors">
                    <Icon size={24} className="text-teal-400" />
                  </div>
                  <div className="text-teal-400/60 text-xs font-bold uppercase tracking-wider mb-2">
                    Paso {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
