import ProjectPage from "@/components/ProjectPage";

export default function FlowCorePage() {
  return (
    <ProjectPage
      name="FlowCore"
      subtitle="Automatización de procesos empresariales."
      status={{ text: "Concepto", color: "blue" }}
      sections={[
        {
          title: "Qué es",
          content:
            "FlowCore es un motor de automatización que permite definir reglas, disparadores y flujos para procesos empresariales repetitivos. Está diseñado para ser configurado sin necesidad de programar, con una interfaz visual y lógica de negocio clara.",
        },
        {
          title: "Qué problema resuelve",
          content:
            "Muchas empresas repiten los mismos procesos manuales cada día: aprobar solicitudes, enviar notificaciones, actualizar inventarios, generar reportes. FlowCore permite automatizar esos flujos con reglas simples.",
        },
        {
          title: "Enfoque y visión",
          content:
            "Ofrecer a empresas medianas una forma práctica de automatizar procesos internos sin depender de un equipo de desarrollo dedicado. No es un ERP, no es un CRM — es el motor que conecta y ejecuta las reglas que ya existen en la operación.",
        },
        {
          title: "Estado actual",
          content:
            "Concepto — Se ha definido la visión del producto, los casos de uso base y la arquitectura preliminar. El desarrollo formal aún no ha comenzado.",
        },
        {
          title: "Rol de DataDuck",
          content:
            "FlowCore es una apuesta a mediano plazo del equipo. Combina nuestra experiencia en sistemas administrativos con la necesidad de automatización que vemos en los clientes que atendemos.",
        },
      ]}
      ctaPrimary={{ label: "Conocer más", href: "#" }}
      ctaSecondary={{ label: "Hablar con el equipo", href: "https://wa.me/503XXXXXXXX" }}
    />
  );
}
