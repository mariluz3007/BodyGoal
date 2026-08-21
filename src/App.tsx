import { useEffect, useState, type ComponentType } from 'react'
import './App.css'
import InicioPage from './pages/Inicio'
import RutinasPage from './pages/Rutinas'
import ProgresoPage from './pages/Progreso'
import NotificacionesPage from './pages/Notificaciones'
import PerfilPage from './pages/Perfil'
import ConfiguracionPage from './pages/Configuracion'
import BienvenidaPage from './pages/Bienvenida'
import { LoginPage, RegisterPage } from './pages/Autenticacion'
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
  const [authView, setAuthView] = useState<'welcome' | 'login' | 'register' | 'app'>('welcome')
  const [activePage, setActivePage] = useState('inicio')
  const ActiveComponent = pages.find((page) => page.key === activePage)?.Component as ComponentType
  const [notifications, setNotifications] = useState(initialNotifications)
  const [darkMode] = useState(() => localStorage.getItem('bodygoal-dark-mode') === 'true')
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => localStorage.getItem('bodygoal-notifications') !== 'false')
  const [reminderTime, setReminderTime] = useState(() => localStorage.getItem('bodygoal-reminder-time') ?? '07:00')
  const [language, setLanguage] = useState(() => localStorage.getItem('bodygoal-language') ?? 'es')
  const [password, setPassword] = useState(() => {
    const savedPin = localStorage.getItem('bodygoal-pin')
    return savedPin && /^\d{5}$/.test(savedPin) ? savedPin : '12345'
  })

  useEffect(() => {
    localStorage.setItem('bodygoal-dark-mode', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('bodygoal-notifications', String(notificationsEnabled))
  }, [notificationsEnabled])

  useEffect(() => {
    localStorage.setItem('bodygoal-reminder-time', reminderTime)
  }, [reminderTime])

  useEffect(() => {
    localStorage.setItem('bodygoal-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('bodygoal-pin', password)
  }, [password])

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

  function handleLogin(pin: string) {
    if (pin !== password) return false
    setAuthView('app')
    return true
  }

  function handleRegister(profile: { name: string; weight: string; height: string; age: string; goal: string }, pin: string) {
    setPassword(pin)
    localStorage.setItem('bodygoal-profile', JSON.stringify(profile))
    setAuthView('login')
  }

  function handlePasswordChange(current: string, next: string) {
    if (current !== password || !/^\d{5}$/.test(next)) return false
    setPassword(next)
    return true
  }

  function handleLogout() {
    setAuthView('welcome')
  }

  if (authView === 'welcome') {
    return <BienvenidaPage onLogin={() => setAuthView('login')} onRegister={() => setAuthView('register')} />
  }

  if (authView === 'login') {
    return <main className="auth-screen"><LoginPage onSubmit={handleLogin} onBack={() => setAuthView('welcome')} /></main>
  }

  if (authView === 'register') {
    return <main className="auth-screen"><RegisterPage onSubmit={handleRegister} onBack={() => setAuthView('welcome')} /></main>
  }

  return (
    <div className={`app-shell${darkMode ? ' dark-mode' : ''}`}>
      <header className="topbar">
        <div className="branding">
          <div className="brand-mark">
            <img src="/logo.jpeg" alt="Logo" className="brand-logo" />
          </div>
          <div className="brand-name">
          </div>
        </div>

        <div className="topbar-actions">
          <button className="icon-button" aria-label="Notificaciones" onClick={() => setActivePage('notificaciones')}>
            🔔
            {notificationsEnabled && notifications.length > 0 && (
              <span className="badge">{notifications.length}</span>
            )}
          </button>
          <button
            className="profile-chip"
            type="button"
            aria-label="Ir al perfil"
            onClick={() => setActivePage('perfil')}
          >
            👤 Usuario
          </button>
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
            <NotificacionesPage items={notifications} enabled={notificationsEnabled} markAsRead={handleMarkAsRead} snooze={handleSnooze} />
          ) : activePage === 'configuracion' ? (
            <ConfiguracionPage
              notificationsEnabled={notificationsEnabled}
              onNotificationsChange={setNotificationsEnabled}
              reminderTime={reminderTime}
              onReminderTimeChange={setReminderTime}
              language={language}
              onLanguageChange={setLanguage}
              onPasswordChange={handlePasswordChange}
              onLogout={handleLogout}
            />
          ) : (
            <ActiveComponent />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
