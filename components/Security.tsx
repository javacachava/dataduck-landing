"use client";

import { motion } from "framer-motion";
import {
  Server,
  HardDrive,
  Activity,
  Shield,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Despliegue en VPS o servidores propios",
    description: "Tu sistema corre donde tú decides.",
  },
  {
    icon: HardDrive,
    title: "Backups automatizados",
    description: "Respaldos regulares sin intervención manual.",
  },
  {
    icon: Activity,
    title: "Monitoreo y mantenimiento",
    description: "Supervisión técnica para prevenir problemas.",
  },
  {
    icon: Shield,
    title: "Control de accesos",
    description: "Roles de usuario granulares para cada área.",
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones sin sorpresas",
    description: "Cambios planificados y documentados.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Infrastructure() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.03] via-transparent to-purple-500/[0.03]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Infraestructura
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu sistema, tu servidor,{" "}
              <span className="gradient-text">tu control</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No dependes de plataformas de terceros. Desplegamos en la
              infraestructura que mejor se adapte a tu negocio.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-5"
            >
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                      <Icon size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Server visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 glow-teal">
              <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
                {/* Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-teal-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-dashed border-emerald-500/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border border-dashed border-cyan-500/20"
                />
                {/* Center */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <Server size={48} className="text-white" />
                </div>
                {/* Nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={deg}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                    className="absolute w-3 h-3 rounded-full bg-teal-400/60"
                    style={{
                      top: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
                      left: `${50 + 42 * Math.cos((deg * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
