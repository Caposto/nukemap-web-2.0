/**
 * Code: https://docs.mapbox.com/mapbox-gl-js/example/3d-buildings/
 * Mapbox GL JS Docs: https://docs.mapbox.com/mapbox-gl-js/api/
 * This entry is for experimenting with the Mapbox GL JS API
 */ 
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_API_KEY

/* NOTE: Bounds does not affect a 3D rendered map
const bounds = [
    [-122.66336, 37.492987], // Southwest coordinates
    [-122.250481, 37.871651] // Northeast coordinates
];
*/

const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-74.0060, 40.7128],
    zoom: 12.5,
    minZoom: 12.5,
    maxZoom: 16,
    pitch: 60,
    bearing: -10,
    container: 'map',
    antialias: true,
})
     
map.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers
    const labelLayerId = layers.find(
    (layer) => layer.type === 'symbol' && layer.layout['text-field']).id
     
// The 'building' layer in the Mapbox Streets
// vector tileset contains building height data
// from OpenStreetMap.
map.addLayer(
    {
        'id': 'add-3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 10,
        'paint': {
        'fill-extrusion-color': '#aaa',
     
        // Use an 'interpolate' expression to
        // add a smooth transition effect to
        // the buildings as the user zooms in.
        'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
        ],
        'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );
});
