export default function RutinasPage() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Rutinas</p>
        <h1>Aquí estarán todos los entrenamientos</h1>
      </div>

      <div className="search-panel">
        <label htmlFor="search-routine" className="search-label">
          Buscar rutina
        </label>
        <input id="search-routine" className="search-input" type="search" placeholder="Buscar rutina" />
      </div>

      <article className="routine-group">
        <h2>Bajar peso</h2>
        <div className="routine-grid">
          <article className="routine-card">
            <div className="routine-image">
              <img src="../../public/cardio.jpg" alt="Cardio" />
            </div>
            <h3>Cardio</h3>
            <p>Duración: 30 min</p>
            <p>Nivel: Intermedio</p>
            <button className="routine-button">Ver rutina</button>
          </article>
          <article className="routine-card">
            <div className="routine-image">
              <img src="../../public/hiit.jpg" alt="Hiit" />
            </div>
            <h3>HIIT</h3>
            <p>Duración: 20 min</p>
            <p>Nivel: Avanzado</p>
            <button className="routine-button">Ver rutina</button>
          </article>
        </div>
      </article>

      <article className="routine-group">
        <h2>Ganar músculo</h2>
        <div className="routine-grid">
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/pecho.png" alt="Pecho" />
            </div>
            <h3>Pecho</h3>
            <p>Duración: 40 min</p>
            <p>Nivel: Intermedio</p>
            <button className="routine-button">Ver rutina</button>
          </article>
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/espalda.png" alt="Espalda" />
            </div>
            <h3>Espalda</h3>
            <p>Duración: 35 min</p>
            <p>Nivel: Intermedio</p>
            <button className="routine-button">Ver rutina</button>
          </article>
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/pierna.png" alt="Piernas" />
            </div>
            <h3>Piernas</h3>
            <p>Duración: 45 min</p>
            <p>Nivel: Avanzado</p>
            <button className="routine-button">Ver rutina</button>
          </article>
        </div>
      </article>

      <article className="routine-group">
        <h2>Tonificar</h2>
        <div className="routine-grid">
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/abdomen.jpg" alt="Abdomen" />
            </div>
            <h3>Abdomen</h3>
            <p>Duración: 25 min</p>
            <p>Nivel: Principiante</p>
            <button className="routine-button">Ver rutina</button>
          </article>
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/gluteos.jpg" alt="Glúteos" />
            </div>
            <h3>Glúteos</h3>
            <p>Duración: 30 min</p>
            <p>Nivel: Intermedio</p>
            <button className="routine-button">Ver rutina</button>
          </article>
          <article className="routine-card">
            <div className="routine-image2">
              <img src="../../public/brazos.jpg" alt="Brazos" />
            </div>
            <h3>Brazos</h3>
            <p>Duración: 20 min</p>
            <p>Nivel: Principiante</p>
            <button className="routine-button">Ver rutina</button>
          </article>
        </div>
      </article>
    </section>
  )
}
