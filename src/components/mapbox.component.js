// import mushroomMarker from './assets/mushroom-marker.patt'
// import mapboxgl from 'mapbox-gl'

import nyc_map from '../assets/nyc.jpg'
import mushroomMarker from '../assets/mushroom-marker.patt'

const scene = document.querySelector('a-scene')

window.onload = () => {
    // registerMapComponent
    createImageAtMarker()
}

function registerMapComponent() {
    AFRAME.registerComponent('mapbox-map', {
        schema: {
            // Map properties: container, style, zoom, bounds/maxBounds
            // Default LatLng Set to NYC
            latitude : {type: 'number', default: 40.7128},
            longitude : {type: 'number', default: 74.0060},
            zoom: {type: 'number', default: 9}
        },
        init: function () {
            // const accessToken = process.env.MAPBOX_API_KEY
            const el = this.el
            // el.setObject3D('mesh', this.map)

            this.map = this.createMap()

            const mapLat = this.data.latitude
            const mapLng = this.data.longitude
            console.log("Map!" + "Long: " + this.data.longitude + " Lat: " + this.data.latitude)
        },
        createMap: function () {
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [this.data.longitude, this.data.latitude], // starting position [lng, lat]
                zoom: this.data.zoom, // starting zoom
            });

            return map
        }
})
}

// FIXME: Change attributes to render map on the marker instead of mushroom cloud
function createMapAtMarker() {
    // Find a-scene
    // let scene = document.querySelector('a-scene');
    
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Add map component to scene
    let map = document.createElement('a-entity');
    map.setAttribute('map-image', ''); 

    // Add elements to scene
    marker.appendChild(map);
    scene.appendChild(marker);
}

// Function for creating map image
function createImageAtMarker() {
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    let image = document.createElement('a-image')
    image.setAttribute('src', nyc_map)
    image.setAttribute('rotation', '270, 0, 0')

    // Add elements to scene
    marker.appendChild(image);
    scene.appendChild(marker);
}