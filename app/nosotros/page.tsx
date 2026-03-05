"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  HeadphonesIcon,
  Handshake,
  Eye,
  Shield,
  MapPin,
  Globe2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const values = [
  {
    icon: Eye,
    title: "Claridad sobre todo",
    description:
      "Hablamos directo. Sin tecnicismos innecesarios, sin promesas vacías.",
  },
  {
    icon: Code2,
    title: "Código propio",
    description:
      "Todo lo que entregamos es nuestro. Sin dependencias ocultas, sin cajas negras.",
  },
  {
    icon: Shield,
    title: "Compromiso técnico",
    description:
      "Cada sistema está pensado para funcionar hoy y escalar mañana.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte real",
    description:
      "No desaparecemos después de la entrega. El equipo que construyó tu sistema es el que lo mantiene.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Nosotros"
        title="Somos DataDuck"
        subtitle="Un equipo técnico que construye software empresarial, infraestructura digital y proyectos de innovación desde El Salvador."
        imageSrc="/image.jpg"
      />

      {/* Quiénes somos */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Más que una agencia.{" "}
              <span className="gradient-text">Una firma de tecnología.</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                DataDuck nació como un grupo de profesionales con habilidades
                complementarias y una convicción compartida: las empresas
                necesitan software que funcione de verdad, no soluciones
                genéricas.
              </p>
              <p>
                Hoy, somos un equipo de{" "}
                <span className="text-gray-200 font-medium">
                  10 personas
                </span>{" "}
                con experiencia en desarrollo de software, arquitectura de
                sistemas, contaduría, marketing y asesoría legal. Esa
                combinación nos permite abordar proyectos de forma integral:
                desde el diagnóstico operativo hasta el despliegue técnico y el
                soporte continuo.
              </p>
              <p>
                No subcontratamos. No usamos plantillas. Cada sistema que
                entregamos se diseña, construye y mantiene internamente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dos columnas: Clientes vs Proyectos */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                <Server size={24} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Software empresarial a medida
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Diseñamos y construimos sistemas internos para negocios: POS,
                administración, inventarios, gestión de personal y más. El
                cliente recibe el código fuente completo y soporte técnico
                directo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                <Code2 size={24} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Innovación desde adentro
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Además del trabajo con clientes, dedicamos parte de nuestro
                tiempo a proyectos internos como TuGuiaSV, LUMEN y FlowCore.
                Estos proyectos nos permiten explorar, aprender y construir
                tecnología propia.
              </p>
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium hover:gap-3 transition-all"
              >
                Ver proyectos
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Cómo trabajamos
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {val.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3">
              Desde Santa Ana para toda la región
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Nuestro equipo trabaja desde Santa Ana, El Salvador. Atendemos
              empresas en todo el país y en la región centroamericana.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-teal-400" />
                Santa Ana, El Salvador
              </span>
              <span className="flex items-center gap-2">
                <Globe2 size={14} className="text-teal-400" />
                El Salvador y Centroamérica
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={14} className="text-teal-400" />
                Español
              </span>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres saber cómo podemos{" "}
              <span className="gradient-text">ayudarte</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Agenda una llamada con nuestro equipo. Hablamos de tu operación y
              te decimos exactamente qué podemos construir.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contacto"
                className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                Agendar llamada
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/503XXXXXXXX"
                className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
