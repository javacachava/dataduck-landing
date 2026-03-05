"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "TuGuiaSV",
    description: "Plataforma digital para El Salvador.",
  },
  {
    name: "LUMEN",
    description: "Herramienta de productividad interna.",
  },
  {
    name: "FlowCore",
    description: "Motor de automatización de procesos.",
  },
];

export default function Labs() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Lightbulb size={20} className="text-amber-400" />
                </div>
                <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                  Innovación
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                También construimos lo nuestro
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Además del trabajo con clientes, nuestro equipo desarrolla
                proyectos propios que nos permiten experimentar, aprender y
                mejorar constantemente.
              </p>
            </div>

            {/* Right: project pills */}
            <div className="flex flex-col gap-3 md:min-w-[260px]">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 transition-all group cursor-pointer"
                >
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {project.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 group-hover:text-amber-400 transition-colors shrink-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
