import LineChart from '../../components/charts/LineChart'
import './Progreso.css'

export default function ProgresoPage() {
  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
  const pesoData = [78, 77.5, 77, 76.6, 76.0, 75.5]
  const caloriasData = [420, 510, 480, 530, 500, 560]
  const entrenamientosData = [3, 4, 3, 5, 4, 4]
  const tiempoData = [90, 110, 95, 120, 100, 115]

  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Progreso</p>
        <h1>Aquí el usuario podrá revisar su evolución</h1>
      </div>

      <section className="progress-section">
        <div className="progress-grid">
          <article className="progress-card">
            <h3>Peso</h3>
            <div className="chart-box">
              <LineChart labels={labels} data={pesoData} label="Peso (kg)" />
            </div>
          </article>

          <article className="progress-card">
            <h3>Calorías quemadas</h3>
            <div className="chart-box">
              <LineChart labels={labels} data={caloriasData} label="Calorías" />
            </div>
          </article>

          <article className="progress-card">
            <h3>Entrenamientos</h3>
            <div className="chart-box">
              <LineChart labels={labels} data={entrenamientosData} label="Entrenamientos" />
            </div>
          </article>

          <article className="progress-card">
            <h3>Tiempo entrenado</h3>
            <div className="chart-box">
              <LineChart labels={labels} data={tiempoData} label="Minutos" />
            </div>
          </article>
        </div>

        <div className="history-panel">
          <h3>Historial</h3>
          <ul className="history-list">
            <li>Lunes — Sesión: Cardio (30 min)</li>
            <li>Martes — Sesión: Fuerza (45 min)</li>
            <li>Miércoles — Sesión: HIIT (20 min)</li>
            <li>Jueves — Descanso</li>
            <li>Viernes — Sesión: Piernas (40 min)</li>
          </ul>
        </div>
      </section>
    </section>
  )
}
