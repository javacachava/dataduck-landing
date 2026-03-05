"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const team = [
  {
    name: "Nombre Apellido",
    role: "Director de Tecnología",
    bio: "Lidera la arquitectura técnica y las decisiones de infraestructura del equipo.",
    specialty: "Backend · Arquitectura de sistemas",
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Nombre Apellido",
    role: "Desarrollador Full Stack",
    bio: "Construye interfaces y APIs con foco en rendimiento y experiencia de usuario.",
    specialty: "React · Node.js · APIs REST",
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Nombre Apellido",
    role: "Desarrollador Backend",
    bio: "Diseña bases de datos, servicios y lógica de negocio para sistemas empresariales.",
    specialty: "PostgreSQL · TypeScript · Auth",
    color: "from-cyan-500 to-sky-500",
  },
  {
    name: "Nombre Apellido",
    role: "Desarrollador Frontend",
    bio: "Implementa interfaces responsivas, accesibles y alineadas al diseño de cada proyecto.",
    specialty: "Next.js · Tailwind · Framer Motion",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Nombre Apellido",
    role: "Desarrolladora Mobile",
    bio: "Desarrolla aplicaciones móviles nativas e híbridas para Android e iOS.",
    specialty: "React Native · Flutter",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Nombre Apellido",
    role: "Diseñador UX/UI",
    bio: "Define flujos de usuario, wireframes y sistemas de diseño para cada producto.",
    specialty: "Figma · Design Systems",
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Nombre Apellido",
    role: "Ingeniero DevOps",
    bio: "Gestiona despliegues, servidores, monitoreo y automatización de infraestructura.",
    specialty: "Linux · Docker · VPS · CI/CD",
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Nombre Apellido",
    role: "Contador / Administración",
    bio: "Supervisa la facturación, la contabilidad interna y los procesos administrativos.",
    specialty: "Facturación electrónica · ERP",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Nombre Apellido",
    role: "Marketing Digital",
    bio: "Diseña estrategias de posicionamiento, contenido y generación de leads.",
    specialty: "SEO · Contenido · Analytics",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "Nombre Apellido",
    role: "Asesoría Legal",
    bio: "Revisa contratos, licencias de software y cumplimiento regulatorio.",
    specialty: "Contratos SaaS · Propiedad intelectual",
    color: "from-orange-500 to-amber-500",
  },
];

const capabilities = [
  { count: "5", label: "Desarrolladores", detail: "Full stack, backend, frontend, mobile" },
  { count: "1", label: "Diseñador UX/UI", detail: "Flujos, interfaces, sistemas de diseño" },
  { count: "1", label: "Ingeniero DevOps", detail: "Servidores, despliegues, CI/CD" },
  { count: "1", label: "Administración", detail: "Contabilidad, facturación" },
  { count: "1", label: "Marketing", detail: "SEO, contenido, leads" },
  { count: "1", label: "Asesoría Legal", detail: "Contratos, propiedad intelectual" },
];

export default function EquipoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Equipo"
        title="El equipo detrás del código"
        subtitle="10 profesionales con especialidades complementarias. Sin outsourcing, sin intermediarios."
      />

      {/* Team grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 group hover:border-white/10 transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <span className="text-white font-bold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <h3 className="text-white font-bold mb-0.5">{member.name}</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialty.split(" · ").map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-gray-500 rounded-md bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
          >
            Capacidades del equipo
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="text-center"
              >
                <p className="text-3xl font-bold gradient-text-teal mb-1">
                  {cap.count}
                </p>
                <p className="text-white font-semibold text-sm">{cap.label}</p>
                <p className="text-gray-500 text-xs mt-1">{cap.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres trabajar{" "}
              <span className="gradient-text">con nosotros</span>?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/#contacto"
                className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                Agendar llamada
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#soluciones"
                className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                Ver soluciones
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
