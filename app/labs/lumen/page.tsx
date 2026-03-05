import ProjectPage from "@/components/ProjectPage";

export default function LumenPage() {
  return (
    <ProjectPage
      name="LUMEN"
      subtitle="Plataforma de acompañamiento emocional continuo asistida por Inteligencia Artificial."
      status={{ text: "Prototipo", color: "yellow" }}
      sections={[
        {
          title: "Qué es",
          content:
            "LUMEN es una plataforma de acompañamiento emocional continuo asistida por Inteligencia Artificial. Su arquitectura no está diseñada para curar ni ofrecer respuestas definitivas, sino para dotar al usuario de herramientas de alfabetización emocional que le permitan navegar su propia complejidad. Funciona sobre tres pilares: ordenar los pensamientos, reducir la carga mental y preparar información estructurada para profesionales de salud mental.",
        },
        {
          title: "Qué problema resuelve",
          content:
            "LUMEN nace para transformar lo que denominamos el \"silencio total\" — una condición donde el individuo se ve incapaz de conceptualizar su dolor. Las crisis emocionales no respetan horarios de oficina. El vacío entre sesiones, por la noche o durante la jornada laboral, es el terreno donde la vulnerabilidad es mayor. Tres factores críticos alimentan esta orfandad emocional: el estigma social que impide la expresión honesta, la falta de acceso oportuno a profesionales, y el \"dolor entre sesiones\" cuando no hay soporte disponible.",
        },
        {
          title: "Enfoque y visión",
          content:
            "LUMEN promete presencia suficiente, no soluciones mágicas. Acompaña sin juzgar. Lo entendemos como un \"puente\": una infraestructura que facilita la transición entre el malestar cotidiano y la ayuda profesional humana. La tecnología tiene un límite ético claro — su propósito es la presencia respetuosa, no la intervención invasiva ni la sustitución de la voluntad del usuario. Nunca se cobra por el hecho de ser escuchado: al desacoplar la escucha emocional de una transacción directa, eliminamos la barrera económica que suele silenciar a quienes más ayuda necesitan.",
        },
        {
          title: "Estado actual",
          content:
            "Prototipo — Se ha definido la arquitectura base, la distinción clara entre acompañamiento tecnológico e intervención clínica, los pilares éticos (primacía humana, no dependencia, control absoluto del usuario, transparencia funcional) y el modelo de interacción con IA. La simbología de la lámpara de cuidado nocturno guía la experiencia: una luz que ofrece claridad justa para ver el siguiente paso, sin cegar ni invadir.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "LUMEN es un proyecto de infraestructura emocional digital concebido internamente por DataDuck. Combina nuestra experiencia en arquitectura de sistemas con una visión de impacto social: que la tecnología, diseñada con propósito y límites éticos, no reemplace nuestra humanidad sino que la potencie. LUMEN es la lámpara que permanece encendida, asegurando que el camino hacia el bienestar nunca se recorra en total oscuridad.",
        },
      ]}
      ctaPrimary={{ label: "Conocer más", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
