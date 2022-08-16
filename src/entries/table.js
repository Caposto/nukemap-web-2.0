/**
 * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 */
import nyc_map from '../assets/nyc/NYC.glb'
import bare_map from '../assets/nyc/bare_nyc.glb'
import bare_map_draco from '../assets/nyc/bare_nyc_draco.glb'
import mushroom_cloud from '../assets/mushroom_cloud/nuke_mushroom.glb'
import registerArCursorComponent from '../components/cursor.component'
import registerShadowComponent from '../components/shadow.component'
import registerMainComponent from '../components/main.component'

// Creates 3D Map of NYC and adds Mushroom Cloud over top
async function createNukemapAR() {
    let assets = await document.querySelector('a-assets')

    let map_asset = document.createElement('a-asset-item')
    map_asset.setAttribute('id', 'city')
    map_asset.setAttribute('src', bare_map)
    assets.appendChild(map_asset)

    let mushroom_asset = document.createElement('a-asset-item')
    mushroom_asset.setAttribute('id', 'cloud')
    mushroom_asset.setAttribute('src', mushroom_cloud)
    assets.appendChild(mushroom_asset)

    // Attach map asset to scene and set scale
    let container = await document.getElementById("my-objects")
    let map = document.createElement("a-gltf-model")
    map.setAttribute('src', '#city')
    map.setAttribute('scale', '0.001 0.001 0.001')

    let cloud = document.createElement("a-gltf-model")
    cloud.setAttribute('src', '#cloud')
    cloud.setAttribute('scale', '50 50 50')
    map.appendChild(cloud)

    container.appendChild(map)
}

// Instead of creating the Map on window load, create just the reticle
// When screen is pressed emit an event "pressed" that begins to load the model
registerArCursorComponent()
registerShadowComponent()
registerMainComponent()
createNukemapAR()