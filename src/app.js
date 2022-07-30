import mushroomMarker from './assets/mushroom-marker.patt'
import mushroomModel from './assets/mushroom_cloud/mushroomRealistic.glb'
// import nycModel from './assets/nyc/nyc.glb'

// Creates AFrame elements to render a mushroom cloud at the specified marker
function createMarker() {
    // Find a-scene
    let scene = document.querySelector('a-scene');
    
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)

    // Create GLTF model
    let model = document.createElement('a-entity');
    model.setAttribute('gltf-model', mushroomModel);
    model.setAttribute('position', '0 0 0');
    model.setAttribute('scale', '0.001 0.001 0.001');
    model.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal
    model.setAttribute('class', 'clickable'); 
    model.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events

    // Add elements to scene
    marker.appendChild(model);
    scene.appendChild(marker);
}

export default createMarker