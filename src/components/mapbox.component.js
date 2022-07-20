// import mushroomMarker from './assets/mushroom-marker.patt'
// import mapboxgl from 'mapbox-gl'

import * as THREE from 'three'
import nyc_map from '../assets/nyc.jpg'
import mushroomMarker from '../assets/mushroom-marker.patt'
import mapboxgl from 'mapbox-gl'

// Container A-Frame Scene
const scene = document.querySelector('a-scene')

window.onload = () => {
    // registerMapComponent()
    createMapAtMarker()
    // createImageAtMarker()
}

function registerMapComponent() {
    AFRAME.registerComponent('mapbox-map', {
        schema: {
            // Map properties: container, style, zoom, bounds/maxBounds
            // Default LatLng Set to NYC
            latitude : {type: 'number', default: 40.7128},
            longitude : {type: 'number', default: 74.0060},
        },
        init: function () {
            // Map Properties
            const lat = this.data.latitude
            const lng = this.data.lng
            const center = [lat, lng]
            const zoom = 12
            const style = "mapbox://styles/mapbox/streets-v11"
            const container_name = "a-entity"
            let access_key = process.env.MAPBOX_API_KEY


        },
})
}

// FIXME: Change attributes to render map on the marker instead of mushroom cloud
function createMapAtMarker() {
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Add map component to scene
    // let map_container = document.createElement('a-entity');
    // map.setAttribute('mapbox-map', ''); 

    let map_container = document.createElement('a-entity')
    map_container.setAttribute('id', 'map')

    marker.appendChild(map_container);
    scene.appendChild(marker);

    mapboxgl.accessToken = process.env.MAPBOX_API_KEY

    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [-74.5, 40], 
        zoom: 9,
        projection: 'globe' 
    });

    map.on('style.load', () => { map.setFog({}); });

    // Add elements to scene
    // marker.appendChild(map_container);
    // scene.appendChild(marker);
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