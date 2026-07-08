import { ZONE_META } from '../data/locations.js'
import styles from './ZoneButtons.module.css'

/**
 * Renderiza un botón por cada zona disponible.
 * Resalta visualmente la zona actualmente seleccionada.
 */
function ZoneButtons({ zones, selectedZone, onSelectZone }) {
  return (
    <nav className={styles.container} aria-label="Selector de zona">
      {zones.map((zone) => {
        const isActive = zone === selectedZone
        const zoneMeta = ZONE_META[zone] ?? { icon: '📍', color: '#6b7280' }

        return (
          <button
            key={zone}
            type="button"
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            aria-pressed={isActive}
            onClick={() => onSelectZone(zone)}
          >
            <span className={styles.icon} style={{ backgroundColor: zoneMeta.color }}>
              {zoneMeta.icon}
            </span>
            <span className={styles.label}>{zoneMeta.title ?? zone}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default ZoneButtons
