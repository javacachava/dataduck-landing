"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const projects = [
  {
    name: "TuGuiaSV",
    description:
      "Infraestructura digital nacional que centraliza, verifica y mantiene vivos los datos de negocios, servicios, lugares de interés y eventos locales en El Salvador.",
    problem:
      "Información desactualizada, negocios cerrados que siguen en línea, coordenadas ficticias — una asimetría de datos que frena la movilidad y el comercio local.",
    status: "En desarrollo",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    href: "/labs/tuguiasv",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "LUMEN",
    description:
      "Plataforma de acompañamiento emocional continuo asistida por Inteligencia Artificial. Un puente entre el silencio cotidiano y la ayuda profesional humana.",
    problem:
      "El estigma social, la falta de acceso oportuno y el dolor entre sesiones dejan a las personas sin soporte emocional cuando más lo necesitan.",
    status: "Prototipo",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    href: "/labs/lumen",
    accent: "from-amber-500 to-orange-500",
  },
  {
    name: "FlowCore",
    description:
      "Sistema de medición de caudal industrial con software de bajo costo para plantas de tratamiento de agua potable y residual en Latinoamérica.",
    problem:
      "El software SCADA, las tarjetas propietarias y las licencias elevan los costos de instrumentación hasta hacer inviable el monitoreo en plantas con presupuestos limitados.",
    status: "Investigación",
    statusColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    href: "/labs/flowcore",
    accent: "from-sky-500 to-blue-500",
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="DataDuck Labs"
        title="Construimos tecnología propia"
        subtitle="Además de los proyectos que entregamos a clientes, nuestro equipo desarrolla productos internos que reflejan nuestra capacidad técnica y visión a largo plazo."
      />

      {/* Explanation */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">¿Qué es DataDuck Labs?</h2>
            <p className="text-gray-400 leading-relaxed">
              DataDuck Labs es el espacio donde nuestro equipo experimenta,
              investiga y construye proyectos propios. No son ejercicios
              académicos ni prototipos de hackathon — son productos con visión de
              negocio, respaldados por el mismo equipo que construye software
              empresarial para clientes reales. Cada proyecto nace de una
              necesidad que identificamos en nuestro entorno: desde la falta de
              información verificada en El Salvador, hasta brechas en
              acompañamiento emocional y costos prohibitivos en instrumentación
              industrial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={project.href}
                className="glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 group hover:border-white/10 transition-all duration-300 block"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <span className="text-white font-extrabold text-xl">
                    {project.name[0]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    <span className="text-gray-400 font-medium">
                      Problema:
                    </span>{" "}
                    {project.problem}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={20}
                  className="text-gray-600 group-hover:text-white transition-colors shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            Trabajo comercial vs. innovación
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 font-medium py-3 pr-4"></th>
                  <th className="text-left text-teal-400 font-semibold py-3 px-4">
                    Proyectos para clientes
                  </th>
                  <th className="text-left text-amber-400 font-semibold py-3 px-4">
                    Proyectos Labs
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {[
                  ["Objetivo", "Resolver necesidades operativas del cliente", "Explorar oportunidades propias"],
                  ["Propiedad", "El cliente recibe el código fuente", "DataDuck retiene la propiedad"],
                  ["Timeline", "Definido por contrato", "Iteración continua"],
                  ["Financiamiento", "Pagado por el cliente", "Inversión interna del equipo"],
                ].map(([label, col1, col2]) => (
                  <tr key={label} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-gray-500 font-medium">{label}</td>
                    <td className="py-3 px-4">{col1}</td>
                    <td className="py-3 px-4">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              ¿Te interesa <span className="gradient-text">colaborar</span>?
            </h2>
            <p className="text-gray-400 mb-8">
              Si quieres participar, invertir o simplemente conocer más, habla
              con nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contacto"
                className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                Hablar con el equipo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                Volver a la home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
