import ProjectPage from "@/components/ProjectPage";

export default function TuGuiaSVPage() {
  return (
    <ProjectPage
      name="TuGuiaSV"
      subtitle="Infraestructura digital nacional que centraliza, verifica y mantiene vivos los datos de negocios, servicios y lugares de interés en El Salvador."
      status={{ text: "En desarrollo", color: "green" }}
      sections={[
        {
          title: "Qué es",
          content:
            "TuGuiaSV es una infraestructura digital que centraliza, verifica y mantiene actualizados los datos de negocios, servicios, lugares de interés y eventos locales en El Salvador. No es una red social ni un directorio de reseñas — es un sistema de certeza informativa donde la visibilidad de un negocio es consecuencia de su existencia verificada, no de su inversión publicitaria.",
        },
        {
          title: "Qué problema resuelve",
          content:
            "En El Salvador existe una asimetría de datos crítica: información desactualizada, negocios que cerraron pero siguen apareciendo en línea, coordenadas ficticias y una oferta de servicios fragmentada. Esta entropía informativa no es solo un inconveniente — es un obstáculo para la movilidad, el comercio local y el desarrollo económico. TuGuiaSV erradica tres fallos sistémicos: información incorrecta, negocios cerrados que siguen activos en la web, y lugares inexistentes que erosionan la confianza del usuario.",
        },
        {
          title: "Enfoque y visión",
          content:
            "TuGuiaSV opera bajo un modelo de Certeza Informativa: la confianza no depende de likes o reseñas subjetivas, sino de datos validados por verificadores y administradores con roles claros. No es Google Maps (no usa algoritmos comerciales), no es TripAdvisor (no tiene rankings subjetivos), no es una red social (no hay métricas de vanidad). La ausencia de publicidad es un requisito arquitectónico — ningún pago altera el posicionamiento de un dato. El éxito se mide en la eficacia de los desplazamientos y transacciones que facilita, no en minutos de permanencia.",
        },
        {
          title: "Estado actual",
          content:
            "En desarrollo — La arquitectura de datos, el sistema de verificación jerárquica, el motor de búsqueda por certeza institucional y la interfaz de Entidades Geográficas Temporales (eventos con ciclo de vida finito y georreferenciación exacta) están en construcción. Se trabaja en la exploración unificada que integra mapas y listas, fichas técnicas con estado de verificación, y la vinculación dinámica de eventos cercanos a la posición del usuario.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "TuGuiaSV es un proyecto concebido y desarrollado internamente por el equipo de DataDuck. Utiliza la misma arquitectura y estándares de calidad que aplicamos en sistemas empresariales para clientes. La visión es construir una infraestructura donde la presencia digital de un comercio o servicio local sea un reflejo exacto y confiable de su realidad física. Como definimos internamente: \"TuGuiaSV no ayuda a destacar, ayuda a existir correctamente.\"",
        },
      ]}
      ctaPrimary={{ label: "Solicitar acceso anticipado", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
