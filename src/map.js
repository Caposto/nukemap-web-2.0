// Component that takes latitude and longitude inputs and a set radius to generate a 3D WebGL map compaitible in AR.js
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_API_KEY

const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-74.0066, 40.7135],
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
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
        'minzoom': 15,
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
