"use client";

import { motion } from "framer-motion";

const industries = [
  "Puntos de venta",
  "Clínicas",
  "Gimnasios",
  "Retail",
  "Administración",
  "Inventarios",
  "Back office",
  "Integraciones",
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          <span className="text-gray-500 text-sm font-medium whitespace-nowrap tracking-wide uppercase">
            Sistemas entregados en
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 text-sm text-gray-400 rounded-full border border-white/5 bg-white/[0.02] hover:border-teal-500/20 hover:text-gray-300 transition-all duration-200"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
