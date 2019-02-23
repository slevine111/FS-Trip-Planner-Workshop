const mapboxgl = require('mapbox-gl')

const iconURLs = {
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
  activity: 'http://i.imgur.com/WbMOfMl.png'
}

const buildMarker = (type, longitude, latitude) => {
  const markerDomEl = document.createElement('div')
  markerDomEl.classList.add('marker')
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`
  return new mapboxgl.Marker(markerDomEl).setLngLat([longitude, latitude])
}

export { buildMarker }
