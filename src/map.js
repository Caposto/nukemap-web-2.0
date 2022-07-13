// Component that takes latitude and longitude inputs and a set radius to generate a 3D WebGL map compaitible in AR.js
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const mapbox_key = process.env.MAPBOX_API_KEY

const map = new mapboxgl.Map({
    container: 'map', // HTML element
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
})