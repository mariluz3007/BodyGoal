import { useState } from 'react'
import './App.css'
import InicioPage from './pages/Inicio'
import RutinasPage from './pages/Rutinas'
import ProgresoPage from './pages/Progreso'
import NotificacionesPage from './pages/Notificaciones'
import PerfilPage from './pages/Perfil'
import ConfiguracionPage from './pages/Configuracion'
import { initialNotifications } from './pages/Notificaciones'

const pages = [
  { key: 'inicio', label: 'Inicio', icon: '🏠', Component: InicioPage },
  { key: 'rutinas', label: 'Rutinas', icon: '🏋️', Component: RutinasPage },
  { key: 'progreso', label: 'Progreso', icon: '📊', Component: ProgresoPage },
  { key: 'notificaciones', label: 'Notificaciones', icon: '🔔', Component: NotificacionesPage },
  { key: 'perfil', label: 'Perfil', icon: '👤', Component: PerfilPage },
  { key: 'configuracion', label: 'Configuración', icon: '⚙️', Component: ConfiguracionPage },
]

function App() {
  const [activePage, setActivePage] = useState('inicio')
  const ActiveComponent = pages.find((page) => page.key === activePage)?.Component ?? InicioPage
  const [notifications, setNotifications] = useState(initialNotifications)

  function handleMarkAsRead(id: number) {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  function handleSnooze(id: number) {
    setNotifications((prev) => {
      const rest = prev.filter((n) => n.id !== id)
      const item = prev.find((n) => n.id === id)
      if (!item) return prev
      const snoozed = { ...item, snoozed: true, meta: 'Pospuesto' }
      return [...rest, snoozed]
    })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="branding">
          <div className="brand-mark">
            <img src="/logo.png" alt="Logo" className="brand-logo" />
          </div>
          <div className="brand-name">
            <strong>BODYGOAL</strong>
          </div>
        </div>

        <div className="topbar-actions">
          <button className="icon-button" aria-label="Notificaciones" onClick={() => setActivePage('notificaciones')}>
            🔔
            {notifications.length > 0 && (
              <span className="badge">{notifications.length}</span>
            )}
          </button>
          <div className="profile-chip">👤 Usuario</div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav>
            <ul>
              {pages.map((page) => (
                <li
                  key={page.key}
                  className={page.key === activePage ? 'active' : ''}
                  onClick={() => setActivePage(page.key)}
                  aria-current={page.key === activePage ? 'page' : undefined}
                >
                  <span>{page.icon}</span>
                  {page.label}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          {activePage === 'notificaciones' ? (
            <NotificacionesPage items={notifications} markAsRead={handleMarkAsRead} snooze={handleSnooze} />
          ) : (
            <ActiveComponent />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
