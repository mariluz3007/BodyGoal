import './Inicio.css'

export default function InicioPage() {
  return (
    <section className="page-panel inicio-page">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Bienvenido</p>
          <h1>Tu espacio fitness moderno</h1>
          <p className="hero-text">
            Mantén tu entrenamiento enfocado con rutinas, gráficos y motivación diaria.
          </p>
        </div>
        <div className="hero-metrics">
          <div className="metric">
            <span>🔥</span>
            <div>
              <strong>24</strong>
              <p>Rutinas activas</p>
            </div>
          </div>
          <div className="metric">
            <span>⏱</span>
            <div>
              <strong>12h</strong>
              <p>Entrenamiento semanal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-grid">
        <article className="card">
          <h2>Próxima clase</h2>
          <p>Cardio ligero con intervalos + estiramientos guiados.</p>
        </article>
        <article className="card">
          <h2>Logros</h2>
          <p>Has completado 5 entrenamientos consecutivos.</p>
        </article>
        <article className="card">
          <h2>Progreso</h2>
          <p>75%
            <br />
            Excelente trabajo.
          </p>
        </article>
      </section>
    </section>
  )
}
