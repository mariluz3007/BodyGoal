type Props = {
  onLogin: () => void
  onRegister: () => void
}

export default function BienvenidaPage({ onLogin, onRegister }: Props) {
  return (
    <main className="welcome-screen">
      <section className="welcome-container">
        <h1 className="welcome-title">BIENVENIDO</h1>
        <p className="welcome-subtitle" aria-hidden="true">a</p>
        <div className="welcome-logo">
          <img src="/logo.jpeg" alt="Logo BodyGoal" />
        </div>

        <div className="welcome-buttons">
          <button className="welcome-button welcome-button-dark" type="button" onClick={onLogin}>Iniciar Sesión</button>
          <button className="welcome-button" type="button" onClick={onRegister}>Regístrate</button>
        </div>

        <div className="welcome-divider">──────── o ────────</div>

        <button className="google-button" type="button" onClick={onLogin}>
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" className="google-icon" />
          Continuar con Google
        </button>

        <p className="welcome-about">Acerca de <button type="button" onClick={onLogin}>BodyGoal</button></p>
      </section>
    </main>
  )
}
