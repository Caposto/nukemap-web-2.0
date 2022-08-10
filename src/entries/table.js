/**
 * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 */
import nyc_map from '../assets/nyc/NYC.glb'

window.onload = () => {
    createReticle()
}

function createReticle() {
    let container = document.querySelector('a-scene')

    let reticle = document.createElement('a-entity')

    reticle.setAttribute('id', 'reticle')
    reticle.setAttribute('gltf-model', nyc_map)
    reticle.setAttribute('scale', '0.001 0.001 0.001')

    container.appendChild(reticle)
}