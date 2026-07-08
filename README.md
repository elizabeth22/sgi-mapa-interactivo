# Reuniones por Zona

Aplicación en React + Vite para visualizar en un mapa las ubicaciones de
reuniones (Zadankai y Shakubuku) de cuatro zonas: Sol, Cerezo, Arbolada y
Unidad.

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── Map.jsx            # Mapa Leaflet + marcadores + auto-encuadre
│   ├── ZoneButtons.jsx     # Botones de selección de zona
│   ├── Legend.jsx          # Leyenda de colores (Zadankai / Shakubuku)
│   ├── MarkerPopup.jsx     # Contenido del popup de cada marcador
├── data/
│   └── locations.js        # Datos de las 8 ubicaciones (4 zonas x 2 tipos)
├── styles/
│   ├── index.css
│   └── App.module.css
├── App.jsx
└── main.jsx
```

## Personalizar ubicaciones

Edita `src/data/locations.js` y reemplaza `latitud`, `longitud`, `direccion`
y `googleMaps` con los datos reales de cada punto de reunión.

## Notas de diseño

- Los marcadores usan `L.divIcon` (sin imágenes externas), coloreados por
  tipo de reunión: rojo para Zadankai, azul para Shakubuku.
- Al seleccionar una zona, el mapa hace `fitBounds` automáticamente sobre
  los dos marcadores de esa zona. Al deseleccionar (clic de nuevo en el
  botón activo), se muestran las 8 ubicaciones.
- Estilos con CSS Modules, sin dependencias de UI externas (sin Bootstrap).
