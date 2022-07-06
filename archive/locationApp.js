window.onload = () => {
    activateAR()
    let places = staticLoadPlaces();
    renderPlaces(places);
    renderCloud(40.743855853892484, -74.02497226798414);
}

// NYC lat, long: 40.7161732702716, -74.00164126182077

// Palmer: 40.7452751275101, -74.025024759971
// UCC: 40.743855853892484, -74.02497226798414

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 40.743855853894694,
                lng: -74.0249709171559,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', '/assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1 1 1');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
        console.log("Loaded Model");
    });
}

function renderCloud(lat, long) {
    let scene = document.querySelector('a-scene');

    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long};`);
    model.setAttribute('gltf-model', '/assets/mushroom_cloud/mushroomRealistic.glb');
    model.setAttribute('rotation', '0 180 0');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', '100 100 100');

    model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
    console.log("Boom!");
}

/* Attempting to add button activation function
// FIXME: Can create scene and camera but unable to load models
function activateAR() {
    hideButton();

    // Create a-scene 
    const scene = document.createElement("a-scene");
    document.body.appendChild(scene);
    scene.setAttribute('vr-mode-ui', 'enabled: true');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', 'sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;');

    // Create a-camera
    const camera = document.createElement("a-camera");
    document.scene.appendChild(camera);
    camera.setAttribute('gps-camera', ''); // Enable location based
    camera.setAttribute('rotation-reader', '');

    let places = staticLoadPlaces();
    renderPlaces(places);

}

function hideButton() {
    let button = document.getElementById('scene');
    button.style.display = "none";
}
*/