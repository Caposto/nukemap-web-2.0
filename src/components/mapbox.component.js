AFRAME.registerComponent('mapbox-map', {
        schema: {
            latitude : {type: 'number', default: 0},
            longitude : {type: 'number', default: 0},
        },
        init: function () {
            

        },
})

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
    // model.setAttribute('mapbox-map', 'longitude: 0.005, latitude: 0.01'); // For touch events

    // Add elements to scene
    marker.appendChild(model);
    scene.appendChild(marker);
}