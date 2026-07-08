import { useMemo, useState } from 'react'
import ZoneButtons from './components/ZoneButtons.jsx'
import Legend from './components/Legend.jsx'
import MapView from './components/Map.jsx'
import locations, { ZONES } from './data/locations.js'
import styles from './styles/App.module.css'

function App() {
  const [selectedZone, setSelectedZone] = useState(null)

  // Solo se muestran los marcadores de la zona seleccionada.
  // Si no hay zona seleccionada, se muestran todas las ubicaciones.
  const visibleLocations = useMemo(() => {
    if (!selectedZone) return locations
    return locations.filter((loc) => loc.zona === selectedZone)
  }, [selectedZone])

  const handleSelectZone = (zone) => {
    setSelectedZone((current) => (current === zone ? null : zone))
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Encuentra tu Zona de Reunión Más Cercana</h1>
        <h4 className={styles.subtitle}>
          Cada reunión es una oportunidad para fortalecer tu práctica, compartir experiencias e inspirarte junto a otras personas. Encuentra la ubicación más cercana y acompáñanos.
        </h4>
      </header>

      <ZoneButtons
        zones={ZONES}
        selectedZone={selectedZone}
        onSelectZone={handleSelectZone}
      />

      <main className={styles.main}>
        <MapView locations={visibleLocations} />
        <Legend selectedZone={selectedZone} />
      </main>
    </div>
  )
}

export default App
