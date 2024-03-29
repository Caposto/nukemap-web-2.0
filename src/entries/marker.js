import registerGestureComponents from "../components/gesture.component"
import mushroomMarker from '../assets/mushroom-marker.patt'
import mushroomModel from '../assets/mushroom_cloud/nuke_mushroom.glb'
import nycModel from '../assets/nyc/NYC.glb'

// Creates AFrame elements to render a mushroom cloud at the specified marker
function createMarker() {
    // Find a-scene
    let scene = document.querySelector('a-scene');
    
    // Create Marker with .patt file (can be found on Notion)
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Create GLTF model of NYC Map
    let map = document.createElement('a-entity');
    map.setAttribute('gltf-model', nycModel);
    map.setAttribute('position', '0 0 0');
    map.setAttribute('scale', '0.001 0.001 0.001');
    map.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal
    map.setAttribute('class', 'clickable'); 
    map.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events

    // Create GLTF model of Mushroom Cloud
    let cloud = document.createElement('a-entity');
    cloud.setAttribute('gltf-model', mushroomModel);
    cloud.setAttribute('position', '0 -1 0');
    cloud.setAttribute('scale', '0.05 0.05 0.05');
    cloud.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal
    cloud.setAttribute('class', 'clickable'); 
    cloud.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events (see gesture.component.js)

    // Add elements to scene
    marker.appendChild(cloud)
    marker.appendChild(map);
    scene.appendChild(marker);
}

window.onload = () => {
    registerGestureComponents()
    createMarker()
}
    
