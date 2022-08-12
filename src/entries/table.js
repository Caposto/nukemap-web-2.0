/**
 * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 */
import nyc_map from '../assets/nyc/NYC.glb'
import bare_map from '../assets/nyc/nyc3.0.glb'
import mushroom_cloud from '../assets/mushroom_cloud/mushroomRealistic.glb'
import registerArCursorComponent from '../components/cursor.component'
import registerShadowComponent from '../components/shadow.component'
import registerMainComponent from '../components/main.component'

// Instead of creating the Map on window load, create just the reticle
// When screen is pressed emit an event "pressed" that begins to load the model
window.onload = () => {
    registerArCursorComponent()
    registerShadowComponent()
    registerMainComponent()

    let assets = document.querySelector('a-assets')
    let map_asset = document.createElement('a-asset-item')
    map_asset.setAttribute('id', 'city')
    map_asset.setAttribute('src', bare_map)
    assets.appendChild(map_asset)

    let container = document.getElementById("my-objects")
    let map = document.createElement("a-gltf-model")
    map.setAttribute('src', '#city')
    map.setAttribute('scale', '0.0005 0.0005 0.0005')

    container.appendChild(map)
}

// NOT IN USE
function createReticle() {
    let container = document.querySelector('a-scene')

    let reticle = document.createElement('a-entity')

    reticle.setAttribute('id', 'reticle')
    let plane = document.createElement('a-plane')
    plane.setAttribute('rotation', '-90 0 0')
    plane.setAttribute('height', '0.2')
    plane.setAttribute('width', '0.2')

    reticle.appendChild(plane)
    // reticle.setAttribute('gltf-model', nyc_map)
    // reticle.setAttribute('scale', '0.0001 0.0001 0.0001')

    let mushroom = document.createElement('a-entity')
    mushroom.setAttribute('gltf-model', mushroom_cloud)
    mushroom.setAttribute('scale', '0.003 0.005 0.003')

    container.appendChild(reticle)
}