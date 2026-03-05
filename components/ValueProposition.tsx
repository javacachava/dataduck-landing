"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "15+",
    label: "Empresas confían en nosotros",
    description: "Clientes activos utilizando nuestras soluciones diariamente",
  },
  {
    icon: Clock,
    value: "99.8%",
    label: "Disponibilidad garantizada",
    description: "Uptime promedio en todos nuestros servicios desplegados",
  },
  {
    icon: CheckCircle,
    value: "50+",
    label: "Proyectos entregados",
    description: "Sistemas implementados y en producción exitosamente",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValueProposition() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Propuesta de <span className="gradient-text">Valor</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Entregamos resultados medibles con tecnología de punta y un equipo
            comprometido con tu éxito empresarial.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 text-center group hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <Icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold gradient-text-teal mb-2">
                  {stat.value}
                </h3>
                <p className="text-white font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
