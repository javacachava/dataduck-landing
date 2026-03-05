import ProjectPage from "@/components/ProjectPage";

export default function FlowCorePage() {
  return (
    <ProjectPage
      name="FlowCore"
      subtitle="Sistema de medición de caudal industrial con software de bajo costo para plantas de tratamiento de agua en Latinoamérica."
      status={{ text: "Investigación", color: "blue" }}
      sections={[
        {
          title: "Qué es",
          content:
            "FlowCore es un sistema integral de medición de caudal industrial diseñado para plantas de tratamiento de agua potable (PTAP) y agua residual (PTAR) en Latinoamérica. No es solo un sensor — es medición + telemetría + datos + visualización: un sistema completo que combina hardware de campo, gateway edge para historización local y dashboard, y una plataforma central opcional para multi-planta y analítica. Todo con protocolos abiertos (4–20 mA, Modbus RTU/TCP) y software sin licencias.", 
        },
        {
          title: "Qué problema resuelve",
          content:
            "En Latinoamérica, solo el 30–40% del agua residual recolectada se trata, y se pierde aproximadamente el 45% del agua antes de llegar al cliente. El costo de medir y monitorear caudal a nivel industrial no se limita al sensor: incluye electrónica propietaria, módulos de E/S (tarjetas), infraestructura de comunicaciones y licencias SCADA/HMI que pueden arrancar en $1,850–$3,280 USD solo por software. Esto crea dependencia del proveedor y eleva los costos hasta hacer inviable la instrumentación en plantas con presupuestos limitados.",
        },
        {
          title: "Enfoque y visión",
          content:
            "FlowCore ataca primero el costo de software y supervisión: un gateway que se conecta a caudalímetros existentes vía 4–20 mA o Modbus, eliminando la necesidad de licencias SCADA costosas. Después, evoluciona gradualmente hacia hardware de medición propio (transmisor + sensor electromagnético o ultrasónico). La diferenciación es clara: costo total reducido, protocolos abiertos sin vendor lock-in, y una UX mínima enfocada en lo que una planta realmente necesita — dashboard de caudal, totalizadores, alarmas, reportes y exportación.",
        },
        {
          title: "Estado actual",
          content:
            "Investigación — Se ha completado el análisis técnico de tecnologías de medición (electromagnético, ultrasónico, Doppler, presión diferencial), la arquitectura de tres planos (campo, edge, central), el diseño electrónico modular (MCU con RTOS, ADC de 24 bits, RS-485 aislado), y la evaluación de stack open-source para la plataforma (Node-RED, MQTT, InfluxDB, Grafana). El roadmap contempla MVP del gateway en 2026 Q2, piloto en planta en Q2-Q3, y versión 1.0 comercial en Q4.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "FlowCore representa la apuesta más ambiciosa de DataDuck: un producto de hardware + software industrial con potencial de mercado real en infraestructura hídrica latinoamericana. Combina nuestra experiencia en desarrollo de software con investigación en automatización industrial, validada por entrevistas exploratorias con ingenieros y directores de planta que confirmaron el dolor de costos. El equipo asume el reto técnico completo: desde el diseño electrónico (aislamiento, EMC, protección IP) hasta la certificación industrial (IEC 61010-1, IEC 61326-1).",
        },
      ]}
      ctaPrimary={{ label: "Solicitar colaboración", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
