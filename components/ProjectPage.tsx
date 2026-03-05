"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

interface ProjectSection {
  title: string;
  content: string;
}

interface ProjectPageProps {
  name: string;
  subtitle: string;
  status: {
    text: string;
    color: "green" | "yellow" | "blue" | "gray";
  };
  sections: ProjectSection[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export default function ProjectPage({
  name,
  subtitle,
  status,
  sections,
  ctaPrimary,
  ctaSecondary,
}: ProjectPageProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="DataDuck Labs"
        title={name}
        subtitle={subtitle}
        statusBadge={status}
      />

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/labs"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
        >
          <ArrowLeft size={14} />
          Volver a Labs
        </Link>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 text-sm font-bold">
                {i + 1}
              </span>
              {section.title}
            </h2>
            <p className="text-gray-400 leading-relaxed pl-11">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">
              ¿Te interesa{" "}
              <span className="gradient-text">{name}</span>?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ctaPrimary.href}
                className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                {ctaPrimary.label}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
