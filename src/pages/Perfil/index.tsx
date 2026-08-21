import { useState } from 'react'
import LineChart from '../../components/charts/LineChart'

type Profile = {
  name: string
  weight: string
  height: string
  age: string
  goal: string
}

export default function PerfilPage() {
  const [profile, setProfile] = useState<Profile>(() => {
    const defaultProfile: Profile = {
      name: 'Mariluz Cruz Diaz',
      weight: '64 kg',
      height: '1.70 cm',
      age: '18 años',
      goal: 'Tonificar',
    }
    const savedProfile = localStorage.getItem('bodygoal-profile')
    if (!savedProfile) return defaultProfile
    try {
      return { ...defaultProfile, ...JSON.parse(savedProfile) as Partial<Profile> }
    } catch {
      return defaultProfile
    }
  })

  const [editMode, setEditMode] = useState(false)

  const weightLabels = ['-6', '-5', '-4', '-3', '-2', 'Ayer', 'Hoy']
  const weightData = [60, 59.5, 59, 58.5, 58.2, 58, 58]

  const workoutLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
  const workoutData = [1, 0, 1, 1, 2, 1, 0]

  const calLabels = ['-6', '-5', '-4', '-3', '-2', 'Ayer', 'Hoy']
  const calData = [2200, 2100, 2050, 2000, 1950, 1800, 1850]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setProfile((p) => ({ ...p, [name]: value }))
  }

  function saveProfile() {
    setEditMode(false)
  }

  return (
    <section className="page-panel perfil-page">
      <div className="page-header">
        <p className="eyebrow">Perfil</p>
        <h1>Tu cuenta</h1>
      </div>

      <section className="cards-grid">
        <article className="card profile-info">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 84, height: 84, borderRadius: 12, background: 'linear-gradient(135deg,#7dc6ff22,#b8f4e322)', display: 'grid', placeItems: 'center', fontSize: 30 }}>
              📸
            </div>
            <div>
              {!editMode && <h2>{profile.name}</h2>}
              {editMode && (
                <input name="name" value={profile.name} onChange={handleChange} />
              )}
              <p style={{ marginTop: 6 }}>{profile.goal}</p>
            </div>
          </div>

          <hr style={{ margin: '16px 0', border: 'none', height: 1, background: 'rgba(0,0,0,0.04)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            <div>
              <h3>Peso</h3>
              {!editMode ? <p>{profile.weight}</p> : <input name="weight" value={profile.weight} onChange={handleChange} />}
            </div>
            <div>
              <h3>Altura</h3>
              {!editMode ? <p>{profile.height}</p> : <input name="height" value={profile.height} onChange={handleChange} />}
            </div>
            <div>
              <h3>Edad</h3>
              {!editMode ? <p>{profile.age}</p> : <input name="age" value={profile.age} onChange={handleChange} />}
            </div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            {!editMode && (
              <button className="btn btn-primary" onClick={() => setEditMode(true)}>
                Editar perfil
              </button>
            )}
            {editMode && (
              <>
                <button className="btn btn-primary" onClick={saveProfile}>
                  Guardar
                </button>
                <button className="btn btn-ghost" onClick={() => setEditMode(false)}>
                  Cancelar
                </button>
              </>
            )}
          </div>
        </article>

        <article className="card profile-graphs">
          <h2>Gráficos</h2>
          <div style={{ display: 'grid', gap: 18 }}>
            <div>
              <h3>Peso</h3>
              <LineChart labels={weightLabels} data={weightData} label="Peso (kg)" />
            </div>

            <div>
              <h3>Entrenamientos (última semana)</h3>
              <LineChart labels={workoutLabels} data={workoutData} label="Entrenamientos" />
            </div>

            <div>
              <h3>Calorías</h3>
              <LineChart labels={calLabels} data={calData} label="Calorías" />
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}
