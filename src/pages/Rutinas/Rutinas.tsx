import { useState } from 'react'
import './Rutinas.css'

type Exercise = {
  name: string
  prescription: string
}

type Routine = {
  category: string
  title: string
  duration: string
  level: string
  image: string
  imageClass: string
  keywords: string
  video: string
  exercises: Exercise[]
}

const routines: Routine[] = [
  {
    category: 'Bajar peso', title: 'Cardio', duration: '30 min', level: 'Intermedio', image: '/cardio.jpg', imageClass: 'routine-image', keywords: 'cardio bajar de peso', video: 'https://www.youtube.com/embed/UzLXOp8ZMRw',
    exercises: [{ name: 'Carrera en el sitio', prescription: '3 series de 2 minutos' }, { name: 'Jumping jacks', prescription: '3 series de 30 segundos' }, { name: 'Burpees', prescription: '3 series de 10 repeticiones' }, { name: 'Mountain climbers', prescription: '3 series de 20 repeticiones' }],
  },
  {
    category: 'Bajar peso', title: 'HIIT', duration: '20 min', level: 'Avanzado', image: '/hiit.jpg', imageClass: 'routine-image', keywords: 'cardio bajar de peso', video: 'https://www.youtube.com/embed/jIKUw5avFpU',
    exercises: [{ name: 'Sentadillas con salto', prescription: '4 series de 12 repeticiones' }, { name: 'Burpees', prescription: '4 series de 10 repeticiones' }, { name: 'Escaladores', prescription: '4 series de 20 repeticiones' }, { name: 'Sprint en el sitio', prescription: '4 series de 30 segundos' }],
  },
  {
    category: 'Ganar músculo', title: 'Pecho', duration: '40 min', level: 'Intermedio', image: '/pecho.png', imageClass: 'routine-image2', keywords: 'pecho ganar músculo', video: 'https://www.youtube.com/embed/4VuCF75s6jE',
    exercises: [{ name: 'Press de pecho', prescription: '4 series de 10 repeticiones' }, { name: 'Flexiones', prescription: '3 series de 12 repeticiones' }, { name: 'Aperturas con mancuernas', prescription: '3 series de 12 repeticiones' }, { name: 'Fondos', prescription: '3 series de 10 repeticiones' }],
  },
  {
    category: 'Ganar músculo', title: 'Espalda', duration: '35 min', level: 'Intermedio', image: '/espalda.png', imageClass: 'routine-image2', keywords: 'espalda ganar músculo', video: 'https://www.youtube.com/embed/CO5qxkz-KkY',
    exercises: [{ name: 'Remo con mancuerna', prescription: '4 series de 10 repeticiones' }, { name: 'Jalones al pecho', prescription: '3 series de 12 repeticiones' }, { name: 'Remo invertido', prescription: '3 series de 10 repeticiones' }, { name: 'Superman', prescription: '3 series de 15 repeticiones' }],
  },
  {
    category: 'Ganar músculo', title: 'Piernas', duration: '45 min', level: 'Avanzado', image: '/pierna.png', imageClass: 'routine-image2', keywords: 'piernas pierna ganar músculo', video: 'https://www.youtube.com/embed/uRcKO4Ecpl0',
    exercises: [{ name: 'Sentadillas', prescription: '3 series de 12 repeticiones' }, { name: 'Zancadas', prescription: '3 series de 10 repeticiones' }, { name: 'Puente de glúteos', prescription: '3 series de 15 repeticiones' }, { name: 'Elevación de pantorrillas', prescription: '3 series de 15 repeticiones' }],
  },
  {
    category: 'Tonificar', title: 'Abdomen', duration: '25 min', level: 'Principiante', image: '/abdomen.jpg', imageClass: 'routine-image2', keywords: 'abdomen tonificar', video: 'https://www.youtube.com/embed/FheV3il2NJw',
    exercises: [{ name: 'Plancha', prescription: '3 series de 30 segundos' }, { name: 'Crunch abdominal', prescription: '3 series de 15 repeticiones' }, { name: 'Bicicleta', prescription: '3 series de 20 repeticiones' }, { name: 'Elevación de piernas', prescription: '3 series de 12 repeticiones' }],
  },
  {
    category: 'Tonificar', title: 'Glúteos', duration: '30 min', level: 'Intermedio', image: '/gluteos.jpg', imageClass: 'routine-image2', keywords: 'glúteos tonificar', video: 'https://www.youtube.com/embed/qAvkJdMIzec',
    exercises: [{ name: 'Hip thrust', prescription: '4 series de 12 repeticiones' }, { name: 'Patada de glúteo', prescription: '3 series de 15 repeticiones por lado' }, { name: 'Abducciones', prescription: '3 series de 15 repeticiones' }, { name: 'Sentadilla sumo', prescription: '3 series de 12 repeticiones' }],
  },
  {
    category: 'Tonificar', title: 'Brazos', duration: '20 min', level: 'Principiante', image: '/brazos.jpg', imageClass: 'routine-image2', keywords: 'brazos tonificar', video: 'https://www.youtube.com/embed/-QnKDiHhSro',
    exercises: [{ name: 'Curl de bíceps', prescription: '3 series de 12 repeticiones' }, { name: 'Extensión de tríceps', prescription: '3 series de 12 repeticiones' }, { name: 'Flexiones cerradas', prescription: '3 series de 10 repeticiones' }, { name: 'Elevaciones laterales', prescription: '3 series de 15 repeticiones' }],
  },
]

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function RutinasPage() {
  const [search, setSearch] = useState('')
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const normalizedSearch = normalizeText(search.trim())
  const filteredRoutines = routines.filter((routine) => {
    if (!normalizedSearch) return true
    const searchableText = normalizeText(`${routine.category} ${routine.title} ${routine.keywords}`)
    return searchableText.includes(normalizedSearch)
  })
  const categories = [...new Set(filteredRoutines.map((routine) => routine.category))]

  function openRoutine(routine: Routine) {
    setSelectedRoutine(routine)
    setVideoOpen(false)
  }

  function closeRoutine() {
    setSelectedRoutine(null)
    setVideoOpen(false)
  }

  if (selectedRoutine) {
    return (
      <section className="page-panel rutinas-page routine-detail-page">
        <div className="routine-detail card">
          <button className="btn btn-ghost close-routine-button" type="button" onClick={closeRoutine}>Cerrar rutina</button>
          <div className={selectedRoutine.imageClass}>
            <img src={selectedRoutine.image} alt={selectedRoutine.title} />
          </div>
          <div className="routine-detail-heading">
            <p className="eyebrow">{selectedRoutine.category}</p>
            <h1>Rutina de {selectedRoutine.title}</h1>
            <div className="routine-detail-meta">
              <span>Duración: {selectedRoutine.duration}</span>
              <span>Nivel: {selectedRoutine.level}</span>
            </div>
          </div>
          <div className="exercise-section">
            <h2>Ejercicios</h2>
            <ol className="exercise-list">
              {selectedRoutine.exercises.map((exercise) => (
                <li key={exercise.name}>
                  <strong>{exercise.name}</strong>
                  <span>{exercise.prescription}</span>
                </li>
              ))}
            </ol>
          </div>
          {!videoOpen ? (
            <button className="routine-button" type="button" onClick={() => setVideoOpen(true)}>Ver video</button>
          ) : (
            <div className="routine-video-section">
              <div className="routine-video-wrapper">
                <iframe src={selectedRoutine.video} title={`Video de ${selectedRoutine.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
              <button className="btn btn-ghost" type="button" onClick={() => setVideoOpen(false)}>Ocultar video</button>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="page-panel rutinas-page">
      <div className="page-header">
        <p className="eyebrow">Rutinas</p>
        <h1>Aquí estarán todos los entrenamientos</h1>
      </div>
      <div className="search-panel">
        <label htmlFor="search-routine" className="search-label">Buscar rutina</label>
        <input id="search-routine" className="search-input" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar por músculo, objetivo o tipo" />
      </div>
      {filteredRoutines.length === 0 ? (
        <div className="notification-empty card" role="status"><p>No encontramos rutinas que coincidan con tu búsqueda.</p></div>
      ) : categories.map((category) => (
        <article className="routine-group" key={category}>
          <h2>{category}</h2>
          <div className="routine-grid">
            {filteredRoutines.filter((routine) => routine.category === category).map((routine) => (
              <article className="routine-card" key={routine.title}>
                <div className={routine.imageClass}><img src={routine.image} alt={routine.title} /></div>
                <h3>{routine.title}</h3>
                <p>Categoría: {routine.category}</p>
                <p>Duración: {routine.duration}</p>
                <p>Nivel: {routine.level}</p>
                <button className="routine-button" type="button" onClick={() => openRoutine(routine)}>Ver rutina</button>
              </article>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
