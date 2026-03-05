"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Settings,
  Users,
  Heart,
  Dumbbell,
  Plug,
} from "lucide-react";

const solutions = [
  {
    icon: ShoppingCart,
    title: "Punto de Venta",
    description:
      "Control de ventas, inventario en tiempo real, facturación y reportes. Para comercios con una o múltiples sucursales.",
    color: "text-teal-400",
    iconBg: "bg-teal-500/10",
    border: "hover:border-teal-500/30",
    accent: "from-teal-500 to-emerald-400",
  },
  {
    icon: Settings,
    title: "Sistemas Administrativos",
    description:
      "Back office, control de accesos, gestión documental, auditoría y paneles de decisión para la dirección.",
    color: "text-purple-400",
    iconBg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
    accent: "from-purple-500 to-violet-400",
  },
  {
    icon: Users,
    title: "Gestión de Personal",
    description:
      "Asistencia, nómina, evaluaciones, horarios y comunicación interna en una sola plataforma.",
    color: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
    accent: "from-cyan-500 to-sky-400",
  },
  {
    icon: Heart,
    title: "Sistemas para Clínicas",
    description:
      "Expedientes, citas, historial médico, facturación y control de insumos adaptado a centros de salud.",
    color: "text-pink-400",
    iconBg: "bg-pink-500/10",
    border: "hover:border-pink-500/30",
    accent: "from-pink-500 to-rose-400",
  },
  {
    icon: Dumbbell,
    title: "Sistemas para Gimnasios",
    description:
      "Membresías, control de acceso biométrico, pagos, rutinas y seguimiento de clientes.",
    color: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
    accent: "from-amber-500 to-orange-400",
  },
  {
    icon: Plug,
    title: "Integraciones y Automatización",
    description:
      "Conexión con dispositivos biométricos, pasarelas de pago, facturación electrónica y APIs de terceros.",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
    accent: "from-emerald-500 to-green-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 relative">
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
            Soluciones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Software que se adapta a tu{" "}
            <span className="gradient-text">operación</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada sistema que entregamos está diseñado según las necesidades
            específicas de tu negocio. No vendemos plantillas.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-7 group cursor-pointer ${sol.border} transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${sol.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className={sol.color} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {sol.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {sol.description}
                </p>
                <div
                  className={`mt-5 h-0.5 w-10 rounded-full bg-gradient-to-r ${sol.accent} group-hover:w-16 transition-all duration-300`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
