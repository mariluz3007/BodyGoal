export default function PerfilPage() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Perfil</p>
        <h1>Tu cuenta</h1>
      </div>
      <section className="cards-grid">
        <article className="card">
          <h2>Nombre</h2>
          <p>Usuario Activo</p>
        </article>
        <article className="card">
          <h2>Objetivo</h2>
          <p>Perder grasa y mejorar la condición física general.</p>
        </article>
        <article className="card">
          <h2>Preferencias</h2>
          <p>Entrenamientos cortos, mix de fuerza y cardio, seguimiento diario.</p>
        </article>
      </section>
    </section>
  )
}
