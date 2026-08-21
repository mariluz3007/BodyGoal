import { useState } from 'react'

type Props = {
  notificationsEnabled: boolean
  onNotificationsChange: (enabled: boolean) => void
  reminderTime: string
  onReminderTimeChange: (time: string) => void
  language: string
  onLanguageChange: (language: string) => void
  onPasswordChange: (current: string, next: string) => boolean
  onLogout: () => void
}

export default function ConfiguracionPage({
  notificationsEnabled,
  onNotificationsChange,
  reminderTime,
  onReminderTimeChange,
  language,
  onLanguageChange,
  onPasswordChange,
  onLogout,
}: Props) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')

  function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!/^\d{5}$/.test(newPassword)) {
      setPasswordMessage('La nueva contraseña debe tener exactamente 5 dígitos numéricos.')
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordMessage('Las contraseñas nuevas no coinciden.')
      return
    }
    if (!onPasswordChange(currentPassword, newPassword)) {
      setPasswordMessage('La contraseña actual no es correcta.')
      return
    }
    setPasswordMessage('PIN actualizado correctamente.')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <section className="page-panel settings-page">
      <div className="page-header">
        <p className="eyebrow">Configuración</p>
        <h1>Personaliza tu experiencia</h1>
        <p className="settings-intro">Controla cómo entrenas, recibes recordatorios y usas BodyGoal.</p>
      </div>

      <section className="settings-list" aria-label="Preferencias de la aplicación">
        <article className="notification-item card settings-row settings-password-card">
          <div className="notification-icon" aria-hidden="true"></div>
          <div className="notification-body settings-copy">
            <p className="notification-message">Cambiar contraseña</p>
            <p className="notification-meta">Usa un PIN de 5 dígitos numéricos para proteger tu cuenta.</p>
          </div>
          <form className="password-form" onSubmit={handlePasswordSubmit}>
            <input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="PIN actual" aria-label="PIN actual" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required />
            <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="Nuevo PIN (5 dígitos)" aria-label="Nuevo PIN" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required />
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="Confirmar PIN" aria-label="Confirmar PIN" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required />
            <button className="btn btn-primary" type="submit">Guardar PIN</button>
            {passwordMessage && <p className="password-message" role="status">{passwordMessage}</p>}
          </form>
        </article>

        <article className="notification-item card settings-row">
          <div className="notification-icon" aria-hidden="true"></div>
          <div className="notification-body settings-copy">
            <p className="notification-message">Activar notificaciones</p>
            <p className="notification-meta">Recibe avisos sobre tus rutinas y objetivos diarios.</p>
          </div>
          <label className="switch">
            <span className="sr-only">Activar notificaciones</span>
            <input type="checkbox" checked={notificationsEnabled} onChange={(event) => onNotificationsChange(event.target.checked)} />
            <span className="switch-track" aria-hidden="true"><span /></span>
          </label>
        </article>

        <article className="notification-item card settings-row settings-control-row">
          <div className="notification-icon" aria-hidden="true"></div>
          <div className="notification-body settings-copy">
            <p className="notification-message">Hora del recordatorio</p>
            <p className="notification-meta">Elige cuándo quieres recibir tu aviso de entrenamiento.</p>
          </div>
          <input className="settings-time" type="time" value={reminderTime} onChange={(event) => onReminderTimeChange(event.target.value)} aria-label="Hora del recordatorio" />
        </article>

        <article className="notification-item card settings-row settings-control-row">
          <div className="notification-icon" aria-hidden="true"></div>
          <div className="notification-body settings-copy">
            <p className="notification-message">Idioma</p>
            <p className="notification-meta">Selecciona el idioma de la interfaz.</p>
          </div>
          <select className="settings-select" value={language} onChange={(event) => onLanguageChange(event.target.value)} aria-label="Idioma">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>
        </article>
      </section>

      <div className="settings-footer">
        <button className="logout-button" type="button" onClick={onLogout}>Cerrar sesión</button>
      </div>
    </section>
  )
}
