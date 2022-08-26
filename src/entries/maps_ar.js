import nyc_map from '../assets/nyc.jpg'
import mushroomMarker from '../assets/mushroom-marker.patt'
import registerMapComponent from '../components/mapbox.component'

let mapbox_token = process.env.MAPBOX_API_KEY

window.onload = () => {
    registerMapComponent()
    createMapAtMarker(mapbox_token)
    // createImageAtMarker()
}

// Global container for A-Frame Scene
const scene = document.querySelector('a-scene')

/*
 * Creates a marker and attaches an a-entity that will contatin the 'mapbox-map' component
 * Alternatively, could register the mabox component as a primitive
 * PARAM: accepts a Mapbox API Access Token as a string 
*/
function createMapAtMarker(access_token) {
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Add map component to scene
    let map = document.createElement('a-entity');
    map.setAttribute('geometry', 'primitive: plane; width: 4; height: 3;');
    map.setAttribute('material', 'color: #ffffff; shader: flat; side: both; transparent: true');
    map.setAttribute('mapbox', "center: -74.0060, 40.7128; zoom: 8; " +
                                   "accessToken: " +  access_token + "; " +
                                   "style: mapbox://styles/mapbox/outdoors-v10;");
    map.setAttribute('rotation', '270, 0, 0')

    // NYC center: -74.0060, 40.7128;
    // London center: -0.1276, 51.5072;

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