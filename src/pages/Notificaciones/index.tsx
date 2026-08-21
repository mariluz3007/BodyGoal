type Notification = {
  id: number
  icon: string
  message: string
  meta: string
  snoozed?: boolean
}

export const initialNotifications: Notification[] = [
  { id: 1, icon: '🔔', message: 'Hoy toca entrenar piernas.', meta: 'Hace 15 minutos' },
  { id: 2, icon: '🔔', message: 'No olvides beber agua.', meta: 'Hace 1 hora' },
  { id: 3, icon: '🔔', message: 'Excelente trabajo. Has completado tu meta diaria.', meta: 'Hoy' },
  { id: 4, icon: '🔔', message: 'Rutina de pierna completada ayer.', meta: 'Ayer' },
  { id: 5, icon: '🔔', message: 'Receta saludable sugerida ayer.', meta: 'Ayer' },
  { id: 6, icon: '🔔', message: 'Nuevo logro: 5 km corridos antes de ayer.', meta: 'Antes de ayer' },
  { id: 7, icon: '🔔', message: 'Recordatorio: revisa tu plan semanal antes de ayer.', meta: 'Antes de ayer' },
]

type Props = {
  items: Notification[]
  enabled: boolean
  markAsRead: (id: number) => void
  snooze: (id: number) => void
}

export default function NotificacionesPage({ items, enabled, markAsRead, snooze }: Props) {
  return (
    <section className="page-panel">
      <div className="page-header">
        <p className="eyebrow">Notificaciones</p>
        <h1>Lo último para ti</h1>
      </div>

      {!enabled ? (
        <div className="notification-empty card">
          <p>Las notificaciones están desactivadas.</p>
        </div>
      ) : <section className="notifications-list">
        {items.map((it) => (
          <article key={it.id} className={`notification-item card ${it.snoozed ? 'snoozed' : ''}`}>
            <div className="notification-icon">{it.icon}</div>
            <div className="notification-body">
              <p className="notification-message">{it.message}</p>
              <p className="notification-meta">{it.meta}</p>
            </div>
            <div className="notification-actions">
              <button className="btn btn-read" onClick={() => markAsRead(it.id)}>✓ Marcar como leída</button>
              <button className="btn btn-snooze" onClick={() => snooze(it.id)}>Posponer</button>
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <div className="notification-empty card">
            <p>No hay notificaciones nuevas.</p>
          </div>
        )}
      </section>}
    </section>
  )
}
