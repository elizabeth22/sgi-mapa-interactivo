import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import MarkerPopup from './MarkerPopup.jsx'
import { TIPOS, ZONE_META, ZONE_TIPO_COLORS } from '../data/locations.js'
import styles from './Map.module.css'

const DEFAULT_CENTER = [18.5036, -88.3055]
const DEFAULT_ZOOM = 13

// Ajusta estos valores para cambiar el tamaño del icono del marcador en el mapa.
// `scale` multiplica las dimensiones base. Usa valores como 0.9, 1, 1.4, etc.
const MARKER_SIZES = {
  scale: 1.4, // modifica este número para agrandar/reducir todos los marcadores
  containerWidth: 34,
  containerHeight: 38,
  pinWidth: 24,
  pinHeight: 24,
  iconFontSize: 20,
  dotSize: 8,
}

function createIcon(location) {
  const zoneMeta = ZONE_META[location.zona] ?? { icon: '📍', color: '#6b7280' }
  const zoneTipo = ZONE_TIPO_COLORS[location.zona] ?? {}
  const pinColor = zoneTipo[location.tipo] ?? zoneMeta.color
  const typeColor = location.tipo === TIPOS.ZADANKAI ? 'var(--color-zadankai)' : 'var(--color-shakubuku)'
  const s = MARKER_SIZES.scale
  const cw = Math.round(MARKER_SIZES.containerWidth * s)
  const ch = Math.round(MARKER_SIZES.containerHeight * s)
  const pw = Math.round(MARKER_SIZES.pinWidth * s)
  const ph = Math.round(MARKER_SIZES.pinHeight * s)
  const ifs = Math.round(MARKER_SIZES.iconFontSize * s)
  const ds = Math.round(MARKER_SIZES.dotSize * s)

  return L.divIcon({
    className: 'custom-marker-icon',
    html: `<div style="position:relative; display:flex; align-items:center; justify-content:center; width:${cw}px; height:${ch}px;">
      <span style="
        position:absolute;
        bottom:0;
        display:block;
        width:${pw}px;
        height:${ph}px;
        border-radius:50% 50% 50% 0;
        background:${pinColor};
        border:2px solid #fff;
        box-shadow:0 1px 4px rgba(0,0,0,0.35);
        transform:rotate(-45deg);
      "></span>
      <span style="
        position:absolute;
        top:4px;
        left:50%;
        transform:translateX(-50%);
        font-size:${ifs}px;
        line-height:1;
      ">${zoneMeta.icon}</span>
      <span style="
        position:absolute;
        right:2px;
        bottom:4px;
        width:${ds}px;
        height:${ds}px;
        border-radius:50%;
        background:${typeColor};
        border:1px solid #fff;
      "></span>
    </div>`,
    iconSize: [cw, ch],
    iconAnchor: [Math.round(cw / 2), Math.round(ch - 2)],
    popupAnchor: [0, -Math.round(ch / 1.2)],
  })
}

/**
 * Ajusta automáticamente el encuadre del mapa para que
 * los marcadores visibles queden centrados.
 */
function FitToMarkers({ locations }) {
  const map = useMap()

  useEffect(() => {
    if (!locations.length) return

    if (locations.length === 1) {
      const [loc] = locations
      map.setView([loc.latitud, loc.longitud], DEFAULT_ZOOM)
      return
    }

    const bounds = L.latLngBounds(
      locations.map((loc) => [loc.latitud, loc.longitud]),
    )
    map.fitBounds(bounds, { padding: [60, 60] })
  }, [locations, map])

  return null
}

/**
 * Mapa principal. Muestra únicamente los marcadores recibidos
 * en la prop `locations` y limpia los anteriores automáticamente
 * al cambiar de zona (React se encarga de esto vía key/props).
 */
function MapView({ locations }) {
  // Agrupa ubicaciones con la misma coordenada y zona para evitar duplicados
  const markers = useMemo(() => {
    const m = new Map()
    locations.forEach((loc) => {
      const key = `${loc.zona}-${loc.latitud.toFixed(6)}-${loc.longitud.toFixed(6)}`
      if (!m.has(key)) {
        m.set(key, { ...loc, tipos: [loc.tipo] })
      } else {
        const existing = m.get(key)
        if (!existing.tipos.includes(loc.tipo)) existing.tipos.push(loc.tipo)
      }
    })
    return Array.from(m.values())
  }, [locations])

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />

        <FitToMarkers locations={markers} />

        {markers.map((loc) => (
          <Marker
            key={`${loc.zona}-${loc.tipo}`}
            position={[loc.latitud, loc.longitud]}
            icon={createIcon(loc)}
          >
            <Popup>
              <MarkerPopup location={loc} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView
