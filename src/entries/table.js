/**
 * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame
 */
function createReticle() {
    let scene = document.querySelector("a-scene")

    let reticle = document.createElement("a-plane")
    reticle.setAttribute('rotation', '-90 0 0')
    reticle.setAttribute('width', '0.2')
    reticle.setAttribute('height', '0.2')
    reticle.setAttribute('ar-hit-test-2', '')

    scene.appendChild(reticle)
}