"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  Soluciones: [
    "Punto de Venta",
    "Administración",
    "Personal",
    "Clínicas",
    "Gimnasios",
    "Integraciones",
  ],
  Empresa: ["Nosotros", "Proceso", "Blog"],
  Soporte: ["Contacto", "WhatsApp"],
};

export default function Footer() {
  return (
    <footer id="contacto" className="relative">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,212,191,0.1) 0%, rgba(16,185,129,0.08) 50%, rgba(167,139,250,0.05) 100%)",
          }}
        >
          <div className="absolute inset-0 border border-white/5 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tu negocio necesita un sistema.{" "}
              <span className="gradient-text">Hablemos.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Agenda una llamada con nuestro equipo. Sin compromiso, sin
              presentaciones genéricas. Hablamos de tu operación y te decimos
              exactamente cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                Agendar llamada
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/503XXXXXXXX"
                className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm">D</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Data<span className="text-teal-400">Duck</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Software empresarial desde Santa Ana, El Salvador.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={14} className="shrink-0" />
                  <span>Santa Ana, El Salvador</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Phone size={14} className="shrink-0" />
                  <span>+503 XXXX XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Mail size={14} className="shrink-0" />
                  <span>hola@dataduck.dev</span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 DataDuck. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              {["LinkedIn", "GitHub", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
