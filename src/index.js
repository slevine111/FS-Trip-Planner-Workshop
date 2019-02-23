import { buildMarker } from './marker'

const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2xldmluZTExMSIsImEiOiJjanNmZmZjazIwc25pM3lxbjR4NWZ0YjdoIn0.55DUUtsBt7VVpyGDRSihPQ'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

const marker = buildMarker('activity', -74.009151, 40.705086)
marker.addTo(map)
