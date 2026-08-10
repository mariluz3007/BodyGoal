import { useState } from 'react'

type Notification = {
  id: number
  icon: string
  message: string
  meta: string
  snoozed?: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, icon: '🔔', message: 'Hoy toca entrenar piernas.', meta: 'Hace 15 minutos' },
  { id: 2, icon: '💧', message: 'No olvides beber agua.', meta: 'Hace 1 hora' },
  { id: 3, icon: '🏆', message: 'Excelente trabajo. Has completado tu meta diaria.', meta: 'Hoy' },
]

export default function NotificacionesPage() {
  const [items, setItems] = useState<Notification[]>(initialNotifications)

  function markAsRead(id: number) {
    setItems((prev) => prev.filter((n) => n.id !== id))
  }

  function snooze(id: number) {
    setItems((prev) => {
      const rest = prev.filter((n) => n.id !== id)
      const item = prev.find((n) => n.id === id)
      if (!item) return prev
      const snoozed = { ...item, snoozed: true, meta: 'Pospuesto' }
      return [...rest, snoozed]
    })
  }

  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Notificaciones</p>
        <h1>Lo último para ti</h1>
      </div>

      <section className="notifications-list">
        {items.map((it) => (
          <article key={it.id} className={`notification-item ${it.snoozed ? 'snoozed' : ''}`}>
            <div className="notification-icon">{it.icon}</div>
            <div className="notification-body">
              <p className="notification-message">{it.message}</p>
              <p className="notification-meta">{it.meta}</p>
            </div>
            <div className="notification-actions">
              <button className="btn btn-primary" onClick={() => markAsRead(it.id)}>✓ Marcar como leída</button>
              <button className="btn btn-ghost" onClick={() => snooze(it.id)}>Posponer</button>
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <div className="notification-empty card">
            <p>No hay notificaciones nuevas.</p>
          </div>
        )}
      </section>
    </section>
  )
}
