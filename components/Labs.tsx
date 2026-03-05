"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "TuGuiaSV",
    description:
      "Infraestructura digital que centraliza y verifica datos de negocios, servicios y lugares de interés en El Salvador. Certeza informativa, no reseñas.",
    status: "En desarrollo",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    href: "/labs/tuguiasv",
  },
  {
    name: "LUMEN",
    description:
      "Plataforma de acompañamiento emocional continuo asistida por IA. Un puente entre el silencio cotidiano y la ayuda profesional humana.",
    status: "Prototipo",
    statusColor: "bg-amber-500/20 text-amber-400",
    href: "/labs/lumen",
  },
  {
    name: "FlowCore",
    description:
      "Sistema de medición de caudal industrial con software de bajo costo para plantas de tratamiento de agua en Latinoamérica.",
    status: "Investigación",
    statusColor: "bg-sky-500/20 text-sky-400",
    href: "/labs/flowcore",
  },
];

export default function Labs() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Lightbulb size={20} className="text-amber-400" />
            </div>
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Innovación
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            También construimos{" "}
            <span className="gradient-text">lo nuestro</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desarrollamos proyectos internos que demuestran nuestra capacidad
            técnica y amplían nuestra visión como empresa de tecnología.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={project.href}
                className="glass-card rounded-2xl p-7 flex flex-col h-full group hover:border-amber-500/20 transition-all duration-300 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">
                    {project.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-amber-400 text-sm font-medium group-hover:gap-3 transition-all">
                  Conocer más
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group"
          >
            Ver todos los proyectos
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
