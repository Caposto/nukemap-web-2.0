import nyc_map from '../assets/nyc.jpg'
import mushroomMarker from '../assets/mushroom-marker.patt'
import registerMapComponent from '../components/mapbox.component'

window.onload = () => {
    registerMapComponent()
    createMapAtMarker()
    // createImageAtMarker()
}

// Global container for A-Frame Scene
const scene = document.querySelector('a-scene')

/*
 * Creates a marker and attaches an a-entity that will contatin the 'mapbox-map' component
 * Alternatively, could register the mabox component as a primitive
*/
function createMapAtMarker() {
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Add map component to scene
    let map = document.createElement('a-entity');
    map.setAttribute('mapbox-map', ''); 

    // Add elements to scene
    marker.appendChild(map);
    scene.appendChild(marker);
}

/*
 * Displays a 2D image of New York City when marker is in view
 * Can serve as an alternative if 3D maps/Mapbox component do not function
 */
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