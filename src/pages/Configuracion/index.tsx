export default function ConfiguracionPage() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Configuración</p>
        <h1>Ajustes de la aplicación</h1>
      </div>
      <section className="cards-grid">
        <article className="card">
          <h2>Preferencias</h2>
          <p>Configura las notificaciones, sonidos y objetivos de entrenamiento.</p>
        </article>
        <article className="card">
          <h2>Cuenta</h2>
          <p>Actualiza tu información personal y revisa tus datos de acceso.</p>
        </article>
        <article className="card">
          <h2>Soporte</h2>
          <p>Consulta ayuda, términos de servicio y políticas de privacidad.</p>
        </article>
      </section>
    </section>
  )
}
