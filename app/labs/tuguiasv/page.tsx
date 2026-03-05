import ProjectPage from "@/components/ProjectPage";

export default function TuGuiaSVPage() {
  return (
    <ProjectPage
      name="TuGuiaSV"
      subtitle="Plataforma digital de información y servicios para El Salvador."
      status={{ text: "En desarrollo", color: "green" }}
      sections={[
        {
          title: "Qué es",
          content:
            "TuGuiaSV es una plataforma digital que reúne información sobre negocios, servicios, rutas, trámites y recursos en El Salvador. Funciona como un directorio inteligente y actualizado, accesible desde cualquier dispositivo.",
        },
        {
          title: "Qué problema resuelve",
          content:
            "En El Salvador, encontrar información confiable sobre negocios locales, horarios, trámites gubernamentales o rutas de transporte requiere buscar en múltiples fuentes desactualizadas. TuGuiaSV centraliza esa información y la mantiene organizada y accesible.",
        },
        {
          title: "Enfoque y visión",
          content:
            "Convertirse en la referencia digital para cualquier persona que necesite encontrar un servicio, un negocio o realizar un trámite en El Salvador. La plataforma busca ser útil, rápida y confiable — no un directorio más.",
        },
        {
          title: "Estado actual",
          content:
            "En desarrollo — La estructura técnica y los primeros módulos están en construcción. Se trabaja en el motor de búsqueda, el sistema de categorías y la interfaz pública.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "TuGuiaSV es un proyecto concebido y desarrollado internamente por el equipo de DataDuck. Utiliza la misma arquitectura y estándares de calidad que aplicamos en los proyectos para clientes.",
        },
      ]}
      ctaPrimary={{ label: "Solicitar acceso anticipado", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
