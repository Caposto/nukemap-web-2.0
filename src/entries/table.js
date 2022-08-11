/**
 * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 */
import nyc_map from '../assets/nyc/NYC.glb'
import mushroom_cloud from '../assets/mushroom_cloud/mushroomRealistic.glb'
import registerArCursorComponent from '../components/ar-cursor.component'

// Instead of creating the Map on window load, create just the reticle
// When screen is pressed emit an event "pressed" that begins to load the model
window.onload = () => {
    registerArCursorComponent()
    createReticle()
}

function createReticle() {
    let container = document.querySelector('a-scene')

    let reticle = document.createElement('a-entity')

    reticle.setAttribute('id', 'reticle')
    reticle.setAttribute('gltf-model', nyc_map)
    reticle.setAttribute('scale', '0.0001 0.0001 0.0001')

    let mushroom = document.createElement('a-entity')
    mushroom.setAttribute('gltf-model', mushroom_cloud)
    mushroom.setAttribute('scale', '0.003 0.005 0.003')

    container.appendChild(reticle)
}