"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  statusBadge?: {
    text: string;
    color: "green" | "yellow" | "blue" | "gray";
  };
}

const statusColors = {
  green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  yellow: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  blue: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  gray: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function PageHero({
  label,
  title,
  subtitle,
  imageSrc,
  statusBadge,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0e1a]/80" />
        </div>
      )}

      {/* Gradient fallback */}
      {!imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1221] to-[#0a0e1a]" />
      )}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-5 tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {statusBadge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 inline-flex"
          >
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-medium border ${statusColors[statusBadge.color]}`}
            >
              {statusBadge.text}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
