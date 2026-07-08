import styles from './MarkerPopup.module.css'

/**
 * Contenido mostrado dentro del Popup de un marcador:
 * zona, tipo de reunión, dirección y enlace a Google Maps.
 */
function MarkerPopup({ location }) {
  const { zona, zonaTitle, direccion, googleMaps, latitud, longitud } = location
  // `location.tipos` puede ser un array (cuando se agrupan ubicaciones)
  const tipos = location.tipos ?? (location.tipo ? [location.tipo] : [])
  const routeUrl =
    latitud != null && longitud != null
      ? `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`
      : googleMaps ?? '#'

  return (
    <div className={styles.popup}>
      <h3 className={styles.title}>{zonaTitle ?? zona}</h3>
      <p className={styles.tipo}>{tipos.join(' / ')}</p>
      <p className={styles.direccion}>{direccion}</p>
      <a
        className={styles.link}
        href={routeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cómo llegar
      </a>
    </div>
  )
}

export default MarkerPopup
