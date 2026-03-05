import ProjectPage from "@/components/ProjectPage";

export default function LumenPage() {
  return (
    <ProjectPage
      name="LUMEN"
      subtitle="Gestión y productividad para equipos técnicos."
      status={{ text: "Prototipo", color: "yellow" }}
      sections={[
        {
          title: "Qué es",
          content:
            "LUMEN es una herramienta de gestión interna diseñada para equipos de desarrollo y operaciones. Permite organizar tareas, documentar decisiones, rastrear avances y mantener visibilidad sin depender de herramientas sobredimensionadas.",
        },
        {
          title: "Qué problema resuelve",
          content:
            "Las herramientas de gestión de proyectos más populares (Jira, Monday, Asana) están diseñadas para organizaciones grandes. Equipos de 5 a 15 personas necesitan algo más ligero pero no menos serio. LUMEN ocupa ese espacio intermedio.",
        },
        {
          title: "Enfoque y visión",
          content:
            "Crear una herramienta que un equipo técnico adopte porque le funciona, no porque lo obligaron. Sin curva de aprendizaje innecesaria, sin funciones que nadie usa, sin dashboards vacíos.",
        },
        {
          title: "Estado actual",
          content:
            "Prototipo — Se ha definido la arquitectura base, las interfaces principales y los flujos de trabajo core. La primera versión interna está en validación con el propio equipo de DataDuck.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "LUMEN nació de una necesidad interna del equipo. Lo construimos porque ninguna herramienta existente se adaptaba a cómo trabajamos. Si funciona para nosotros, puede funcionar para otros equipos similares.",
        },
      ]}
      ctaPrimary={{ label: "Ver avance", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
