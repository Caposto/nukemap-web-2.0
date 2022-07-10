// Call functions when the site starts
window.onload = () => {
   createMarker();
}

// Creates AFrame elements to render a mushroom cloud at the specified marker
function createMarker() {
    // Find a-scene
    let scene = document.querySelector('a-scene');
    
    // Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', '/assets/mushroom-marker.patt')

    // Create GLTF model
    let model = document.createElement('a-entity');
    model.setAttribute('gltf-model','/assets/mushroom_cloud/mushroomRealistic.glb');
    model.setAttribute('position', '0 0 0');
    model.setAttribute('scale', '0.005 0.005 0.005');
    model.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal
    model.setAttribute('class', 'clickable'); 
    model.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events

    // Add elements to scene
    marker.appendChild(model);
    scene.appendChild(marker);
}

