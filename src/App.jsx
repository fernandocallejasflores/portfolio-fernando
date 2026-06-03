function App() {
  const skills = [
    
  {
    titulo: "ERP Vender",
    descripcion: "Soporte funcional y atención a usuarios."
  },
  {
    titulo: "ServiceNow",
    descripcion: "Gestión y seguimiento de tickets."
  },
  {
    titulo: "SQL Básico",
    descripcion: "Consultas y análisis de información."
  },
  {
    titulo: "Troubleshooting",
    descripcion: "Resolución y diagnóstico de incidencias."
  }
  
]
  const proyectos = [
  {
    titulo: "Portfolio Profesional",
    descripcion: "Portfolio desarrollado con React, Vite y Tailwind CSS."
  },
  {
    titulo: "SQL Básico",
    descripcion: "Consultas SQL para análisis y extracción de información."
  },
  {
    titulo: "Soporte ERP",
    descripcion: "Experiencia en resolución de incidencias y atención a usuarios."
  }
]
    return (
    <div className="bg-gray-950 text-white min-h-screen">

      <nav className="max-w-5xl mx-auto px-6 py-6 flex gap-6 text-gray-300">

        <a href="#" className="hover:text-blue-400">
          Inicio
        </a>

        <a href="#sobre-mi" className="hover:text-blue-400">
          Sobre mí
        </a>

        <a href="#skills" className="hover:text-blue-400">
          Skills
        </a>

        <a href="#experiencia" className="hover:text-blue-400">
          Experiencia
        </a>

        <a href="#proyectos" className="hover:text-blue-400">
          Proyectos
        </a>

        <a href="#contacto" className="hover:text-blue-400">
          Contacto
        </a>

      </nav>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Fernando Callejas Flores
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
          Soporte ERP | SQL Básico | ServiceNow | Trabajo Remoto
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl">
          Profesional de Soporte N1 con experiencia en ERP Vender, gestión de tickets mediante ServiceNow,
          atención a usuarios, análisis de incidencias y troubleshooting en plataformas web y móviles.
          Actualmente fortaleciendo conocimientos en SQL y tecnologías de desarrollo para continuar creciendo
          en el área de sistemas y soporte de aplicaciones.
        </p>

      <div className="mt-8 flex gap-4">
        <a
          href="mailto:fercallejas28@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Contactarme
        </a>

        <a
          href="#experiencia"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Ver Experiencia
        </a>
      </div>


      </section>
    
        <section id="sobre-mi" className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-300">
          Actualmente trabajo como Soporte N1 para ERP Vender brindando soporte a
          usuarios mediante ServiceNow, resolviendo incidencias y acompañando a los
          usuarios en el uso de la plataforma web y aplicación móvil.
        </p>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition"
            >
              <h3 className="font-bold text-lg mb-2">
               {skill.titulo}
              </h3>

              <p className="text-gray-400">
                {skill.descripcion}
              </p>
            </div>
        ))}
      </div>
      </section>

      <section id="experiencia" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Experiencia</h2>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

  <h3 className="text-2xl font-semibold">
    Soporte N1 - ERP Vender
  </h3>

  <p className="text-blue-400 mt-2 mb-4">
    Actualidad
  </p>

  <ul className="text-gray-300 space-y-2">
    <li>• Resolución y seguimiento de tickets mediante ServiceNow.</li>

    <li>• Soporte funcional a usuarios de la plataforma web ERP.</li>

    <li>• Atención y soporte a usuarios de la aplicación móvil.</li>

    <li>• Análisis y diagnóstico de incidencias reportadas.</li>

    <li>• Troubleshooting y validación de soluciones.</li>
  </ul>
</div>
      </section>

    <section id="contacto" className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-6">Contacto</h2>

  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

    <p className="mb-3">
      📧 Correo: fercallejas@gmail.com
    </p>

    <p className="mb-3">
      💼 LinkedIn: MUY PRONTO
    </p>

    <p>
      💻 GitHub: Próximamente
    </p>

  </div>
</section> 
  <section id="proyectos" className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-6">PROYECTOS</h2>

  <div className="grid md:grid-cols-2 gap-4">

    {proyectos.map((proyecto, index) => (
      <div
        key={index}
        className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition"
      >
        <h3 className="font-bold text-lg mb-2">
          {proyecto.titulo}
        </h3>

        <p className="text-gray-400">
          {proyecto.descripcion}
        </p>
      </div>
    ))}

  </div>
</section>
   
      </div>
  )
}

export default App