import mapStyle from './mapStyle.js';

// Initialize Map
const map = new maplibregl.Map({
  container: 'map',
  style: mapStyle,
  center: [51.4015, 35.6425],
  zoom: 12,
});
