/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/mushroom_cloud/mushroomRealistic.glb":
/*!*********************************************************!*\
  !*** ./src/assets/mushroom_cloud/mushroomRealistic.glb ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/b92d94cb5c318657f38b997631020e41.glb\");\n\n//# sourceURL=webpack://nukemap-web/./src/assets/mushroom_cloud/mushroomRealistic.glb?");

/***/ }),

/***/ "./src/assets/nyc/NYC.glb":
/*!********************************!*\
  !*** ./src/assets/nyc/NYC.glb ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/973df4307b16eee8c70da311b67b1dab.glb\");\n\n//# sourceURL=webpack://nukemap-web/./src/assets/nyc/NYC.glb?");

/***/ }),

/***/ "./src/assets/nyc/nyc3.0.glb":
/*!***********************************!*\
  !*** ./src/assets/nyc/nyc3.0.glb ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/e1557b83663bc7e2c1d3a759222ac1b8.glb\");\n\n//# sourceURL=webpack://nukemap-web/./src/assets/nyc/nyc3.0.glb?");

/***/ }),

/***/ "./src/components/cursor.component.js":
/*!********************************************!*\
  !*** ./src/components/cursor.component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction registerArCursorComponent() {\r\n    /* jshint esversion: 9 */\r\n    /* global THREE, AFRAME */\r\n    (function() {\r\n        \"use strict\";\r\n        const direction = new THREE.Vector3();\r\n    \r\n        AFRAME.registerComponent(\"ar-cursor\", {\r\n        dependencies: [\"raycaster\"],\r\n        init() {\r\n            const sceneEl = this.el;\r\n            sceneEl.addEventListener(\"enter-vr\", () => {\r\n            if (sceneEl.is(\"ar-mode\")) {\r\n                sceneEl.xrSession.addEventListener(\"select\", this.onselect.bind(this));\r\n            }\r\n            });\r\n        },\r\n        onselect(e) {\r\n            const frame = e.frame;\r\n            const inputSource = e.inputSource;\r\n            const referenceSpace = this.el.renderer.xr.getReferenceSpace();\r\n            const pose = frame.getPose(inputSource.targetRaySpace, referenceSpace);\r\n            const transform = pose.transform;\r\n            \r\n            direction.set(0, 0, -1);\r\n            direction.applyQuaternion(transform.orientation);\r\n            this.el.setAttribute(\"raycaster\", {\r\n            origin: transform.position,\r\n            direction\r\n            });\r\n            this.el.components.raycaster.checkIntersections();\r\n            const els = this.el.components.raycaster.intersectedEls;\r\n            for (const el of els) {\r\n            const obj = el.object3D;\r\n            let elVisible = obj.visible;\r\n            obj.traverseAncestors(parent => {\r\n                if (parent.visible === false ) {\r\n                elVisible = false\r\n                }\r\n            });\r\n            if (elVisible) {\r\n                \r\n                // Cancel the ar-hit-test behaviours\r\n                this.el.components['ar-hit-test'].hitTest = null;\r\n                this.el.components['ar-hit-test'].bboxMesh.visible = false;\r\n                \r\n                // Emit click on the element for events\r\n                const details = this.el.components.raycaster.getIntersection(el);\r\n                el.emit('click', details);\r\n                \r\n                // Don't go to the next element\r\n                break;\r\n            }\r\n            }\r\n        }\r\n        });\r\n    })();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerArCursorComponent);\n\n//# sourceURL=webpack://nukemap-web/./src/components/cursor.component.js?");

/***/ }),

/***/ "./src/components/main.component.js":
/*!******************************************!*\
  !*** ./src/components/main.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction registerMainComponent() {\r\n    /* jshint esversion: 9 */\r\n    /* global THREE, AFRAME */\r\n\r\n    AFRAME.registerComponent(\"hide-on-hit-test-start\", {\r\n        init: function() {\r\n          var self = this;\r\n          this.el.sceneEl.addEventListener(\"ar-hit-test-start\", function() {\r\n            self.el.object3D.visible = false;\r\n          });\r\n          this.el.sceneEl.addEventListener(\"exit-vr\", function() {\r\n            self.el.object3D.visible = true;\r\n          });\r\n        }\r\n      });\r\n\r\n      window.addEventListener(\"DOMContentLoaded\", function() {\r\n        const sceneEl = document.querySelector(\"a-scene\");\r\n        const message = document.getElementById(\"dom-overlay-message\");\r\n    \r\n        // If the user taps on any buttons or interactive elements we may add then prevent\r\n        // Any WebXR select events from firing\r\n        message.addEventListener(\"beforexrselect\", e => {\r\n          e.preventDefault();\r\n        });\r\n    \r\n        sceneEl.addEventListener(\"enter-vr\", function() {\r\n          if (this.is(\"ar-mode\")) {\r\n            // Entered AR\r\n            message.textContent = \"\";\r\n        \r\n            // Hit testing is available\r\n            this.addEventListener(\r\n              \"ar-hit-test-start\",\r\n              function() {\r\n                message.innerHTML = `Scanning environment, finding surface.`;\r\n              },\r\n              { once: true }\r\n            );\r\n          \r\n            // Has managed to start doing hit testing\r\n            this.addEventListener(\r\n              \"ar-hit-test-achieved\",\r\n              function() {\r\n                message.innerHTML = `Select the location to place<br />By tapping on the screen or selecting with your controller.`;\r\n              },\r\n              { once: true }\r\n            );\r\n          \r\n            // User has placed an object\r\n            this.addEventListener(\r\n              \"ar-hit-test-select\",\r\n              function() {\r\n                // Object placed for the first time\r\n                message.textContent = \"Well done!\";\r\n              },\r\n              { once: true }\r\n            );\r\n          }\r\n        });\r\n    \r\n        sceneEl.addEventListener(\"exit-vr\", function() {\r\n          message.textContent = \"Exited Immersive Mode\";\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerMainComponent);\n\n//# sourceURL=webpack://nukemap-web/./src/components/main.component.js?");

/***/ }),

/***/ "./src/components/shadow.component.js":
/*!********************************************!*\
  !*** ./src/components/shadow.component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction registerShadowComponent() {\r\n    /* global AFRAME, THREE */\r\n    (function () {\r\n        \"use strict\";\r\n\r\n        const bbox = new THREE.Box3();\r\n        const normal = new THREE.Vector3();\r\n        const cameraWorldPosition = new THREE.Vector3();\r\n        const tempMat = new THREE.Matrix4();\r\n        const sphere = new THREE.Sphere();\r\n        const zeroVector = new THREE.Vector3();\r\n        const planeVector = new THREE.Vector3();\r\n        const tempVector = new THREE.Vector3();\r\n\r\n        function distanceOfPointFromPlane(positionOnPlane, planeNormal, p1) {\r\n          // the d value in the plane equation a*x + b*y + c*z=d\r\n            const d = planeNormal.dot(positionOnPlane);\r\n        \r\n            // distance of point from plane\r\n            return (d - planeNormal.dot(p1))/planeNormal.length();\r\n        }\r\n\r\n        function nearestPointInPlane(positionOnPlane, planeNormal, p1, out) {\r\n          const t = distanceOfPointFromPlane(positionOnPlane, planeNormal, p1);\r\n            // closest point on the plane\r\n            out.copy(planeNormal);\r\n            out.multiplyScalar(t);\r\n            out.add(p1);\r\n            return out;\r\n        }\r\n\r\n        AFRAME.registerGeometry('shadow-plane', {\r\n          schema: {\r\n            width: { default: 1, min: 0 },\r\n            height: { default: 1, min: 0 }\r\n          },\r\n      \r\n          init: function (data) {\r\n            this.geometry = new THREE.PlaneGeometry(data.width, data.height);\r\n            this.geometry.rotateX(-Math.PI / 2);\r\n          }\r\n        });\r\n\r\n        /**\r\n          Automatically adjust the view frustum to cover the objects in the scene\r\n        */\r\n        AFRAME.registerComponent('auto-shadow-cam', {\r\n          schema: {\r\n            targets: {\r\n              type: 'selectorAll',\r\n              default: \"[ar-shadow-helper]\"\r\n            },\r\n          },\r\n          tick() {\r\n            const camera = this.el.components.light?.light?.shadow?.camera;\r\n            if (!camera || !this.data.targets.length) return;\r\n        \r\n            camera.getWorldDirection(normal);\r\n            camera.getWorldPosition(cameraWorldPosition);\r\n            tempMat.copy(camera.matrixWorld);\r\n            tempMat.invert();\r\n        \r\n            camera.near    = 1;\r\n            camera.left    = 100000;\r\n            camera.right   = -100000;\r\n            camera.top     = -100000;\r\n            camera.bottom  = 100000;\r\n            for (const el of this.data.targets) {\r\n              bbox.setFromObject(el.object3D);\r\n              bbox.getBoundingSphere(sphere);\r\n              const distanceToPlane = distanceOfPointFromPlane(cameraWorldPosition, normal, sphere.center);\r\n              const pointOnCameraPlane = nearestPointInPlane(cameraWorldPosition, normal, sphere.center, tempVector);\r\n            \r\n              const pointInXYPlane = pointOnCameraPlane.applyMatrix4(tempMat);\r\n              camera.near    = Math.min(-distanceToPlane - sphere.radius - 1, camera.near);\r\n              camera.left    = Math.min(-sphere.radius + pointInXYPlane.x, camera.left);\r\n              camera.right   = Math.max( sphere.radius + pointInXYPlane.x, camera.right);\r\n              camera.top     = Math.max( sphere.radius + pointInXYPlane.y, camera.top);\r\n              camera.bottom  = Math.min(-sphere.radius + pointInXYPlane.y, camera.bottom);\r\n            }\r\n            camera.updateProjectionMatrix();\r\n          }\r\n        });\r\n\r\n        /**\r\n        It also attatches itself to objects and resizes and positions itself to get the most shadow\r\n        */\r\n        AFRAME.registerComponent('ar-shadow-helper', {\r\n          schema: {\r\n            target: {\r\n              type: 'selector',\r\n            },\r\n            light: {\r\n              type: 'selector',\r\n              default: 'a-light'\r\n            },\r\n            startVisibleInAR: {\r\n              default: true\r\n            },\r\n            border: {\r\n              default: 0.33\r\n            }\r\n          },\r\n          init: function () {\r\n            var self = this;\r\n\r\n            this.el.object3D.renderOrder = -1;\r\n        \r\n            this.el.sceneEl.addEventListener('enter-vr', function () {\r\n              if (self.el.sceneEl.is('ar-mode')) {\r\n                self.el.object3D.visible = self.data.startVisibleInAR;\r\n              }\r\n            });\r\n            this.el.sceneEl.addEventListener('exit-vr', function () {\r\n              self.el.object3D.visible = false;\r\n            });\r\n        \r\n            this.el.sceneEl.addEventListener('ar-hit-test-select-start', function () {\r\n              // self.el.object3D.visible = false;\r\n            });\r\n        \r\n            this.el.sceneEl.addEventListener('ar-hit-test-select', function () {\r\n              // self.el.object3D.visible = true;\r\n            });\r\n          },\r\n          tick: function () {\r\n        \r\n            const obj = this.el.object3D;\r\n            const border = this.data.border;\r\n            const borderWidth = tempVector.set(0,0,0);\r\n\r\n            // Match the size and rotation of the object\r\n            if (this.data.target) {\r\n              bbox.setFromObject(this.data.target.object3D);\r\n              bbox.getSize(obj.scale);\r\n              borderWidth.copy(obj.scale).multiplyScalar(border);\r\n              obj.scale.multiplyScalar(1 + border*2);\r\n              obj.position.copy(this.data.target.object3D.position);\r\n              obj.quaternion.copy(this.data.target.object3D.quaternion);\r\n            }\r\n\r\n            // Adjust the plane to get the most shadow\r\n            if (this.data.light) {\r\n              const light = this.data.light;\r\n              const shadow = light.components.light.light.shadow;\r\n            \r\n              if (shadow) {\r\n                const camera = shadow.camera;\r\n                camera.getWorldDirection(normal);\r\n            \r\n                planeVector.set(0,1,0).applyQuaternion(obj.quaternion);\r\n                const projectionOfCameraDirectionOnPlane = nearestPointInPlane(zeroVector, planeVector, normal, planeVector);\r\n                if (\r\n                  Math.abs(projectionOfCameraDirectionOnPlane.x) > 0.01 ||\r\n                  Math.abs(projectionOfCameraDirectionOnPlane.y) > 0.01 ||\r\n                  Math.abs(projectionOfCameraDirectionOnPlane.z) > 0.01\r\n                ) {\r\n                  projectionOfCameraDirectionOnPlane.normalize().multiply(borderWidth);\r\n                  obj.position.add(projectionOfCameraDirectionOnPlane);\r\n                }\r\n              }\r\n            }\r\n          }\r\n        });\r\n    }());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerShadowComponent);\n\n//# sourceURL=webpack://nukemap-web/./src/components/shadow.component.js?");

/***/ }),

/***/ "./src/entries/table.js":
/*!******************************!*\
  !*** ./src/entries/table.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_nyc_NYC_glb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/nyc/NYC.glb */ \"./src/assets/nyc/NYC.glb\");\n/* harmony import */ var _assets_nyc_nyc3_0_glb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/nyc/nyc3.0.glb */ \"./src/assets/nyc/nyc3.0.glb\");\n/* harmony import */ var _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mushroom_cloud/mushroomRealistic.glb */ \"./src/assets/mushroom_cloud/mushroomRealistic.glb\");\n/* harmony import */ var _components_cursor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cursor.component */ \"./src/components/cursor.component.js\");\n/* harmony import */ var _components_shadow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shadow.component */ \"./src/components/shadow.component.js\");\n/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main.component */ \"./src/components/main.component.js\");\n/**\r\n * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Instead of creating the Map on window load, create just the reticle\r\n// When screen is pressed emit an event \"pressed\" that begins to load the model\r\nwindow.onload = () => {\r\n    (0,_components_cursor_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    ;(0,_components_shadow_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    ;(0,_components_main_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\r\n    let assets = document.querySelector('a-assets')\r\n    let map_asset = document.createElement('a-asset-item')\r\n    map_asset.setAttribute('id', 'city')\r\n    map_asset.setAttribute('src', _assets_nyc_nyc3_0_glb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n    assets.appendChild(map_asset)\r\n\r\n    let container = document.getElementById(\"my-objects\")\r\n    let map = document.createElement(\"a-gltf-model\")\r\n    map.setAttribute('src', '#city')\r\n    map.setAttribute('scale', '0.0005 0.0005 0.0005')\r\n\r\n    container.appendChild(map)\r\n}\r\n\r\n// NOT IN USE\r\nfunction createReticle() {\r\n    let container = document.querySelector('a-scene')\r\n\r\n    let reticle = document.createElement('a-entity')\r\n\r\n    reticle.setAttribute('id', 'reticle')\r\n    let plane = document.createElement('a-plane')\r\n    plane.setAttribute('rotation', '-90 0 0')\r\n    plane.setAttribute('height', '0.2')\r\n    plane.setAttribute('width', '0.2')\r\n\r\n    reticle.appendChild(plane)\r\n    // reticle.setAttribute('gltf-model', nyc_map)\r\n    // reticle.setAttribute('scale', '0.0001 0.0001 0.0001')\r\n\r\n    let mushroom = document.createElement('a-entity')\r\n    mushroom.setAttribute('gltf-model', _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    mushroom.setAttribute('scale', '0.003 0.005 0.003')\r\n\r\n    container.appendChild(reticle)\r\n}\n\n//# sourceURL=webpack://nukemap-web/./src/entries/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/table.js");
/******/ 	
/******/ })()
;