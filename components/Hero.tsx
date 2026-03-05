"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  Settings,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden hero-gradient"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>Software empresarial · El Salvador</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
        >
          Construimos los sistemas
          <br />
          que tu negocio necesita para
          <br />
          <span className="gradient-text">operar de verdad</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Diseñamos, desarrollamos y mantenemos software a medida: puntos de
          venta, administración, inventarios, gestión de personal y más.{" "}
          <span className="text-gray-300">
            Tú recibes el código fuente, nosotros nos encargamos de que
            funcione.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contacto"
            className="group px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-black hover:from-teal-400 hover:to-emerald-400 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/25"
          >
            Agendar una llamada
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#soluciones"
            className="px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            <ChevronDown size={18} />
            Ver soluciones
          </a>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="dashboard-glow rounded-2xl overflow-hidden">
            <div className="bg-[#111827] rounded-2xl p-1">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-4 py-1.5 text-xs text-gray-500 max-w-xs mx-auto">
                    sistema.dataduck.dev/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 hidden md:block space-y-2">
                  <div className="flex items-center gap-2 text-teal-400 text-sm font-medium mb-3">
                    <BarChart3 size={16} />
                    Dashboard
                  </div>
                  {[
                    { label: "Ventas", icon: ShoppingCart, active: true },
                    { label: "Inventario", icon: Package, active: false },
                    { label: "Personal", icon: Users, active: false },
                    { label: "Reportes", icon: BarChart3, active: false },
                    { label: "Config", icon: Settings, active: false },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`text-sm px-3 py-2 rounded-lg flex items-center gap-2 ${
                          item.active
                            ? "bg-teal-500/10 text-teal-400"
                            : "text-gray-500"
                        }`}
                      >
                        <Icon size={14} />
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                {/* Main content */}
                <div className="col-span-12 md:col-span-9 space-y-4">
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Ventas hoy",
                        value: "$2,847",
                        change: "+12.5%",
                        color: "text-teal-400",
                      },
                      {
                        label: "Productos",
                        value: "1,284",
                        change: "Activos",
                        color: "text-emerald-400",
                      },
                      {
                        label: "Empleados",
                        value: "34",
                        change: "En turno",
                        color: "text-cyan-400",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-xl p-4 border border-white/5"
                      >
                        <p className="text-xs text-gray-500 mb-1">
                          {stat.label}
                        </p>
                        <p className={`text-lg font-bold ${stat.color}`}>
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-40 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/60 to-emerald-400/30"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
