import * as THREE from 'three'
import mapboxgl from 'mapbox-gl'

function registerMapComponent() {
    AFRAME.registerComponent('mapbox-map', {
        schema: {
            // Map properties: container, style, zoom, bounds/maxBounds
            // Default LatLng Set to NYC
            latitude : {type: 'number', default: 40.7128},
            longitude : {type: 'number', default: 74.0060},
        },
        init: function () {
            // Map Properties
            const lat = this.data.latitude
            const lng = this.data.lng
            const center = [lat, lng]
            const zoom = 12
            const style = "mapbox://styles/mapbox/streets-v11"
            const container_name = "a-entity"
            let access_key = process.env.MAPBOX_API_KEY

            this.el.object3D = createMapMesh(center, zoom, style, access_key)

            function createMapMesh(center, zoom, style, access_key) {
                mapboxgl.accessToken = access_key

                let map = new mapboxgl.Map({
                    container: "",
                    style: style,
                    center: center,
                    zoom: zoom,
                    project: "globe"
                })

                return map
            }
        },
    })
}

export default registerMapComponent
