// import mushroomMarker from './assets/mushroom-marker.patt'

window.onload = () => {
    registerMapComponent()
    createMarker()
}

function registerMapComponent() {
    AFRAME.registerComponent('mapbox-map', {
        schema: {
            latitude : {type: 'number', default: 0},
            longitude : {type: 'number', default: 0},
        },
        init: function () {
            console.log("Map!" + "Long: " + this.data.longitude + " Lat: " + this.data.latitude)
        },
})
}


// FIXME: Change attributes to render map on the marker instead of mushroom cloud
function createMarker() {
    // Find a-scene
    let scene = document.querySelector('a-scene');
    
    /*Create Marker
    let marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('preset', 'custom');
    marker.setAttribute('url', mushroomMarker)
    */

    // Add map component to scene
    let map = document.createElement('a-entity');
    map.setAttribute('mapbox-map', 'longitude: 0.005, latitude: 0.01'); // For touch events

    // Add elements to scene
    // marker.appendChild(model);
    scene.appendChild(map);
}