"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance. Después de una llamada inicial definimos requerimientos y entregamos una cotización detallada sin compromiso. No hay precios genéricos porque cada sistema es diferente.",
  },
  {
    question: "¿Cuánto tiempo toma el desarrollo?",
    answer:
      "Un sistema base puede estar listo en 4 a 8 semanas. Proyectos más complejos toman entre 3 y 5 meses. Entregamos avances cada semana para que nunca pierdas visibilidad.",
  },
  {
    question: "¿El código fuente es mío?",
    answer:
      "Sí. Al finalizar el proyecto, recibes el código fuente completo. El sistema es tuyo y no dependes de nosotros para seguir usándolo.",
  },
  {
    question: "¿Ofrecen mantenimiento después de la entrega?",
    answer:
      "Sí. Ofrecemos planes de soporte y mantenimiento que incluyen correcciones, actualizaciones y atención técnica directa.",
  },
  {
    question:
      "¿Pueden integrar el sistema con hardware como biométricos o impresoras?",
    answer:
      "Sí. Tenemos experiencia en integración con lectores biométricos, impresoras térmicas, básculas y otros dispositivos.",
  },
  {
    question: "¿Trabajan solo en El Salvador?",
    answer:
      "Nuestro equipo está en Santa Ana, El Salvador, pero trabajamos con clientes en toda la región centroamericana y también de forma remota.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Dudas comunes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Preguntas{" "}
            <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Lo que nuestros clientes preguntan antes de trabajar con nosotros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-teal-500/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`font-semibold pr-4 transition-colors ${
                      isOpen ? "text-teal-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-teal-500/20" : "bg-white/5"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} className="text-teal-400" />
                    ) : (
                      <Plus size={16} className="text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
