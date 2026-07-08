import styles from './Legend.module.css'
import { ZONE_TIPO_COLORS } from '../data/locations.js'

/**
 * Muestra una leyenda: los puntos cambian según la `selectedZone`.
 * - Si `selectedZone` tiene colores definidos en `ZONE_TIPO_COLORS`,
 *   la leyenda usa esos colores.
 * - Si `selectedZone` es null o no tiene configuración, se usan las variables CSS.
 */
const TYPE_LABELS = {
  Zadankai: 'Zadankai',
  Shakubuku: 'Shakubuku',
  kaikan: 'Centro cultural CNE',
}

function Legend({ selectedZone = null }) {
  const zoneColors = selectedZone ? ZONE_TIPO_COLORS[selectedZone] : null
  const types = zoneColors
    ? Object.keys(zoneColors)
    : ['Zadankai', 'Shakubuku']

  const hasKaikan = types.includes('kaikan')
  if (hasKaikan) return null

  return (
    <div className={styles.legend} aria-label="Leyenda de tipos de reunión">
      {types.map((tipo) => {
        const color = zoneColors?.[tipo] ?? null
        const className = tipo === 'Zadankai' ? styles.zadankai : styles.shakubuku

        return (
          <div key={tipo} className={styles.item}>
            <span
              className={`${styles.dot} ${className}`}
              style={color ? { backgroundColor: color } : undefined}
            />
            <span>{TYPE_LABELS[tipo] ?? tipo}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Legend
