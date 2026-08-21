import { useState } from 'react'

type LoginProps = {
  onSubmit: (pin: string) => boolean
  onBack: () => void
}

type RegisterProps = {
  onSubmit: (profile: { name: string; weight: string; height: string; age: string; goal: string }, pin: string) => void
  onBack: () => void
}

export function LoginPage({ onSubmit, onBack }: LoginProps) {
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const pin = String(form.get('pin') ?? '')
    const valid = onSubmit(pin)
    if (!valid) {
      setError('PIN incorrecto. Inténtalo de nuevo.')
      event.currentTarget.querySelector<HTMLInputElement>('input[name="pin"]')?.focus()
    }
  }

  return (
    <section className="auth-panel">
      <p className="eyebrow">BODYGOAL</p>
      <h1>Iniciar sesión</h1>
      <p>Introduce tu PIN de 5 dígitos para continuar.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-pin">PIN</label>
        <input id="login-pin" name="pin" type="password" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} placeholder="12345" required />
        <button className="btn btn-primary" type="submit">Entrar</button>
        {error && <p className="auth-error" role="alert">{error}</p>}
      </form>
      <button className="btn btn-ghost" type="button" onClick={onBack}>Volver</button>
    </section>
  )
}

export function RegisterPage({ onSubmit, onBack }: RegisterProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    onSubmit({
      name: String(form.get('name') ?? ''),
      weight: `${String(form.get('weight') ?? '')} kg`,
      height: `${String(form.get('height') ?? '')} cm`,
      age: `${String(form.get('age') ?? '')} años`,
      goal: String(form.get('goal') ?? ''),
    }, String(form.get('pin') ?? ''))
  }

  return (
    <section className="auth-panel register-panel">
      <p className="eyebrow">BODYGOAL</p>
      <h1>Crear cuenta</h1>
      <p>Completa tu perfil y crea un PIN numérico de 5 dígitos.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nombre</label>
        <input id="register-name" name="name" type="text" placeholder="Tu nombre" required />
        <label htmlFor="register-weight">Peso</label>
        <input id="register-weight" name="weight" type="number" min="1" placeholder="64" required />
        <label htmlFor="register-height">Altura</label>
        <input id="register-height" name="height" type="number" min="1" placeholder="170" required />
        <label htmlFor="register-age">Edad</label>
        <input id="register-age" name="age" type="number" min="1" placeholder="18" required />
        <label htmlFor="register-goal">Objetivo</label>
        <select id="register-goal" name="goal" defaultValue="Tonificar" required>
          <option>Tonificar</option>
          <option>Bajar de peso</option>
          <option>Ganar músculo</option>
        </select>
        <label htmlFor="register-pin">PIN de 5 dígitos</label>
        <input id="register-pin" name="pin" type="password" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} placeholder="12345" required />
        <button className="btn btn-primary" type="submit">Crear cuenta</button>
      </form>
      <button className="btn btn-ghost" type="button" onClick={onBack}>Volver</button>
    </section>
  )
}
