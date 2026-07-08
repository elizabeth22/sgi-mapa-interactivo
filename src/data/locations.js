// Datos de ejemplo. Reemplaza latitud, longitud, dirección y el enlace de
// Google Maps con la información real de cada ubicación.
// Cada zona tiene exactamente dos ubicaciones: una Zadankai y una Shakubuku.

export const ZONES = [ 'Sol', 'Cerezo', 'Arbolada', 'Unidad','kaikan']

export const ZONE_META = {
  kaikan: { icon: '🏛️', color: '#fde50d', title: 'Centro Cultural CNE' },
  Sol: { icon: '☀️', color: '#f2b84b', title: 'Zona Sol' },
  Cerezo: { icon: '🌸', color: '#921758', title: 'Zona Cerezo' },
  Arbolada: { icon: '🌳', color: '#074d25', title: 'Zona Arbolada' },
  Unidad: { icon: '🤝', color: '#0031a3', title: 'Zona Unidad' },
}

// Colores por zona y por tipo de reunión. Puedes ajustar aquí el color
// específico para las reuniones `Zadankai` y `Shakubuku` en cada zona.
// Si no se define un color para una combinación, se usa `ZONE_META[zone].color`.
export const ZONE_TIPO_COLORS = {
  kaikan: { kaikan: '#fde50d', Shakubuku: '#fde50d' },
  Sol: { Zadankai: '#e05a4f', Shakubuku: '#7a4fb3' },
  Cerezo: { Zadankai: '#e05a4f', Shakubuku: '#7a4fb3' },
  Arbolada: { Zadankai: '#0b7040', Shakubuku: '#0b7040' },
  Unidad: { Zadankai: '#e05a4f', Shakubuku: '#7a4fb3' },
}

export const TIPOS = {
  ZADANKAI: 'Zadankai',
  SHAKUBUKU: 'Shakubuku',
  KAIKAN: '(Kaikan)'
}

const locations = [
  {
    zona: 'kaikan',
    zonaTitle: 'Centro Cultural CNE',
    tipo: TIPOS.KAIKAN,
    direccion: 'Av. Héroes 123, Chetumal, Q.R.',
    latitud: 21.1616547,
    longitud: -86.8282351,
    googleMaps: 'https://maps.google.com/?q=21.1616547,-86.8282351',
  },
  {
    zona: 'Sol',
    zonaTitle: 'Zona Sol',
    tipo: TIPOS.ZADANKAI,
    direccion: 'Av. Héroes 123, Chetumal, Q.R.',
    latitud: 21.1588955,
    longitud: -86.8563966,
    googleMaps: 'https://maps.google.com/?q=21.1588955,-86.8563966',
  },
  {
    zona: 'Sol',
    zonaTitle: 'Zona Sol',
    tipo: TIPOS.SHAKUBUKU,
    direccion: 'Calle Bugambilias 45, Chetumal, Q.R.',
    latitud: 21.1538978,
    longitud: -86.8532252,
    googleMaps: 'https://maps.google.com/?q=21.1538978,-86.8532252',
  },
  {
    zona: 'Cerezo',
    zonaTitle: 'Zona Cerezo',
    tipo: TIPOS.ZADANKAI,
    direccion: 'Av. Insurgentes 200, Chetumal, Q.R.',
    latitud: 21.1388051,
    longitud: -86.8600051,
    googleMaps: 'https://maps.google.com/?q=21.1388051,-86.8600051',
  },
  {
    zona: 'Cerezo',
    zonaTitle: 'Zona Cerezo',
    tipo: TIPOS.SHAKUBUKU,
    direccion: 'Calle Palmera 78, Chetumal, Q.R.',
    latitud: 21.158323,
    longitud: -86.8866107,
    googleMaps: 'https://maps.google.com/?q=21.158323,-86.8866107',
  },
  {
    zona: 'Arbolada',
    zonaTitle: 'Zona Arbolada',
    tipo: TIPOS.ZADANKAI,
    direccion: 'Av. Erick Paolo Martínez 310, Chetumal, Q.R.',
    latitud: 21.0956364,
    longitud: -86.8703847,
    googleMaps: 'https://maps.google.com/?q=21.0956364,-86.8703847',
  },
  {
    zona: 'Arbolada',
    zonaTitle: 'Zona Arbolada',
    tipo: TIPOS.SHAKUBUKU,
    direccion: 'Calle Ceiba 12, Chetumal, Q.R.',
    latitud: 21.0956364,
    longitud: -86.8703847,
    googleMaps: 'https://maps.google.com/?q=21.0956364,-86.8703847',
  },
  {
    zona: 'Unidad',
    zonaTitle: 'Zona Unidad',
    tipo: TIPOS.ZADANKAI,
    direccion: 'Av. Constituyentes 88, Chetumal, Q.R.',
    latitud: 21.1345804,
    longitud: -86.8525687,
    googleMaps: 'https://maps.google.com/?q=18.4880,-88.2960',
  },
  {
    zona: 'Unidad',
    zonaTitle: 'Zona Unidad',
    tipo: TIPOS.SHAKUBUKU,
    direccion: 'Calle Framboyán 56, Chetumal, Q.R.',
    latitud: 21.1890321,
    longitud:-86.8833396,
    googleMaps: 'https://maps.google.com/?q=21.1890321,-86.8833396',
  },
]
export default locations
