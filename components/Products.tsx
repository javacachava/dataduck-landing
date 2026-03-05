"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  BarChart3,
  Users2,
  Settings2,
  Database,
  Globe2,
} from "lucide-react";

const products = [
  {
    icon: CreditCard,
    name: "POS Cloud",
    description: "Sistema de punto de venta en la nube con sincronización multi-sucursal.",
    tags: ["SaaS", "Retail"],
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    icon: BarChart3,
    name: "Analytics Pro",
    description: "Plataforma de análisis con dashboards personalizables y alertas inteligentes.",
    tags: ["BI", "Data"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users2,
    name: "HR Suite",
    description: "Gestión completa de recursos humanos, nómina y evaluaciones.",
    tags: ["HR", "Admin"],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Settings2,
    name: "Admin Panel",
    description: "Panel de administración con control de accesos y auditoría completa.",
    tags: ["Admin", "Security"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Database,
    name: "DataSync",
    description: "Sincronización de datos en tiempo real entre múltiples plataformas y APIs.",
    tags: ["Integration", "API"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Globe2,
    name: "Web Portal",
    description: "Portales web corporativos con CMS integrado y optimización SEO.",
    tags: ["Web", "CMS"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
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

export default function Products() {
  return (
    <section id="productos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros{" "}
            <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Herramientas listas para potenciar cada área de tu empresa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 group hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${prod.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className={prod.color} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {prod.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {prod.description}
                </p>
                <div className="flex gap-2">
                  {prod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
