/**
 * This entry demonstrates Nukemap Indoor Proof of Concept (Tabletop) with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 * A-Frame Docs: https://aframe.io/docs/1.3.0/introduction/
 * WebXR Docs: https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
 */

import nyc_map from '../assets/nyc/NYC.glb' // Includes Jersey side, parts of Brooklyn, and Queens (Very Low Performance)
import bare_map from '../assets/nyc/bare_nyc.glb' // Buildings only (Very Low Performance)
import manhattan from '../assets/nyc/manhattan.glb' // Manhattan Buildings only (Low-Medium Performance)
import mushroom_cloud from '../assets/mushroom_cloud/nuke_mushroom.glb' // Nick's Mushroom Cloud
import registerArCursorComponent from '../components/hit_test/cursor.component'
import registerShadowComponent from '../components/hit_test/shadow.component'
import registerMainComponent from '../components/hit_test/main.component'

/**
 * Function that creates a 3D map of NYC (created with Blender OSM) and places a mushroom cloud over top of it
 */
async function createNukemapAR() {
    let assets = await document.querySelector('a-assets')
    
    // Add Blender OSM City .glb
    let map_asset = document.createElement('a-asset-item')
    map_asset.setAttribute('id', 'city')
    map_asset.setAttribute('src', manhattan) // Replace the model here to change the map
    assets.appendChild(map_asset)

    // Add Nick's Mushroom Cloud .glb
    let mushroom_asset = document.createElement('a-asset-item')
    mushroom_asset.setAttribute('id', 'cloud')
    mushroom_asset.setAttribute('src', mushroom_cloud)
    assets.appendChild(mushroom_asset)

    // Attach map asset to scene and set scale
    let container = await document.getElementById("my-objects")
    let map = document.createElement("a-gltf-model")
    map.setAttribute('src', '#city')
    map.setAttribute('scale', '0.001 0.001 0.001')

    // Create and attach mushroom cloud
    let cloud = document.createElement("a-gltf-model")
    cloud.setAttribute('src', '#cloud')
    cloud.setAttribute('scale', '50 50 50')
    cloud.setAttribute('animation-mixer', '')
    // cloud.setAttribute('hide-on-hit-test-start', '') // Cloud does not appear

    map.appendChild(cloud)
    container.appendChild(map)
}

async function removeNukemapAR() {
    let container = await document.getElementById("my-objects")

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Instead of creating the Map on window load, create just the reticle
// When screen is pressed emit an event "pressed" that begins to load the model
registerArCursorComponent()
registerShadowComponent()
registerMainComponent()

let scene = document.querySelector('a-scene')

// This event listener runs once and ensures that a new map is not generated everytime AR mode is activated in one session
scene.addEventListener("enter-vr", function() {
    createNukemapAR()
    console.log("ENTERING AR, CREATING NUKEMAP")
}, {once: true})

// FIXME: After exiting AR, the VR background is brightly lit, trying to enter AR a second time results in a black screen
/*scene.addEventListener("exit-vr", function() {
    removeNukemapAR()
    console.log("EXITING AR, REMOVING NUKEMAP")
}) */