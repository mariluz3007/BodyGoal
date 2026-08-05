
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="branding">
          <div className="brand-mark">FG</div>
          <div className="brand-name">
            <strong>BODYGOAL</strong>
          </div>
        </div>

        <div className="search-bar">Buscar...</div>

        <div className="topbar-actions">
          <button className="icon-button" aria-label="Notificaciones">🔔</button>
          <div className="profile-chip">👤 Usuario</div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav>
            <ul>
              <li className="active">🏠 Inicio</li>
              <li>🏋 Rutinas</li>
              <li>📊 Progreso</li>
              <li>🔔 Notificaciones</li>
              <li>👤 Perfil</li>
              <li>⚙ Configuración</li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
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
              <h2>Estado</h2>
              <p>Recuperación óptima. Tiempo de descanso recomendado: 8h.</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App