"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const pains = [
  "Hojas de Excel como sistema de inventario",
  "WhatsApp como canal de soporte interno",
  "Software genérico que no se adapta a tu operación",
  "Datos dispersos entre 3, 4 o 5 herramientas distintas",
  'Dependencia de un "técnico" que nadie sabe cómo contactar',
];

const solutions = [
  "Un solo sistema diseñado para tu operación",
  "Control centralizado de ventas, inventario y personal",
  "Código fuente tuyo, desplegado en tu infraestructura",
  "Soporte técnico real con un equipo que conoce tu sistema",
  "Arquitectura pensada para crecer contigo",
];

export default function Problem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Tu negocio todavía{" "}
            <span className="gradient-text">depende de esto</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Si tu operación se sostiene con herramientas improvisadas, es
            momento de profesionalizarla.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pain column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 border-red-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X size={20} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-400">
                Cómo operan muchos negocios hoy
              </h3>
            </div>
            <div className="space-y-4">
              {pains.map((pain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5 shrink-0">
                    <X size={12} className="text-red-400" />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {pain}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 border-teal-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                <Check size={20} className="text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-teal-400">
                Cómo operan con DataDuck
              </h3>
            </div>
            <div className="space-y-4">
              {solutions.map((sol, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} className="text-teal-400" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {sol}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
