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

/***/ "./src/components/ar-cursor.component.js":
/*!***********************************************!*\
  !*** ./src/components/ar-cursor.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction registerArCursorComponent() {\r\n    /* jshint esversion: 9 */\r\n    /* global THREE, AFRAME */\r\n    (function() {\r\n        \"use strict\";\r\n        const direction = new THREE.Vector3();\r\n    \r\n        AFRAME.registerComponent(\"ar-cursor\", {\r\n        dependencies: [\"raycaster\"],\r\n        init() {\r\n            const sceneEl = this.el;\r\n            sceneEl.addEventListener(\"enter-vr\", () => {\r\n            if (sceneEl.is(\"ar-mode\")) {\r\n                sceneEl.xrSession.addEventListener(\"select\", this.onselect.bind(this));\r\n            }\r\n            });\r\n        },\r\n        onselect(e) {\r\n            const frame = e.frame;\r\n            const inputSource = e.inputSource;\r\n            const referenceSpace = this.el.renderer.xr.getReferenceSpace();\r\n            const pose = frame.getPose(inputSource.targetRaySpace, referenceSpace);\r\n            const transform = pose.transform;\r\n            \r\n            direction.set(0, 0, -1);\r\n            direction.applyQuaternion(transform.orientation);\r\n            this.el.setAttribute(\"raycaster\", {\r\n            origin: transform.position,\r\n            direction\r\n            });\r\n            this.el.components.raycaster.checkIntersections();\r\n            const els = this.el.components.raycaster.intersectedEls;\r\n            for (const el of els) {\r\n            const obj = el.object3D;\r\n            let elVisible = obj.visible;\r\n            obj.traverseAncestors(parent => {\r\n                if (parent.visible === false ) {\r\n                elVisible = false\r\n                }\r\n            });\r\n            if (elVisible) {\r\n                \r\n                // Cancel the ar-hit-test behaviours\r\n                this.el.components['ar-hit-test'].hitTest = null;\r\n                this.el.components['ar-hit-test'].bboxMesh.visible = false;\r\n                \r\n                // Emit click on the element for events\r\n                const details = this.el.components.raycaster.getIntersection(el);\r\n                el.emit('click', details);\r\n                \r\n                // Don't go to the next element\r\n                break;\r\n            }\r\n            }\r\n        }\r\n        });\r\n    })();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerArCursorComponent);\n\n//# sourceURL=webpack://nukemap-web/./src/components/ar-cursor.component.js?");

/***/ }),

/***/ "./src/entries/table.js":
/*!******************************!*\
  !*** ./src/entries/table.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_nyc_NYC_glb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/nyc/NYC.glb */ \"./src/assets/nyc/NYC.glb\");\n/* harmony import */ var _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/mushroom_cloud/mushroomRealistic.glb */ \"./src/assets/mushroom_cloud/mushroomRealistic.glb\");\n/* harmony import */ var _components_ar_cursor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ar-cursor.component */ \"./src/components/ar-cursor.component.js\");\n/**\r\n * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame\r\n */\r\n\r\n\r\n\r\n\r\n// Instead of creating the Map on window load, create just the reticle\r\n// When screen is pressed emit an event \"pressed\" that begins to load the model\r\nwindow.onload = () => {\r\n    (0,_components_ar_cursor_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    createReticle()\r\n}\r\n\r\nfunction createReticle() {\r\n    let container = document.querySelector('a-scene')\r\n\r\n    let reticle = document.createElement('a-entity')\r\n\r\n    reticle.setAttribute('id', 'reticle')\r\n    reticle.setAttribute('gltf-model', _assets_nyc_NYC_glb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    reticle.setAttribute('scale', '0.0001 0.0001 0.0001')\r\n\r\n    let mushroom = document.createElement('a-entity')\r\n    mushroom.setAttribute('gltf-model', _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n    mushroom.setAttribute('scale', '0.003 0.005 0.003')\r\n\r\n    container.appendChild(reticle)\r\n}\n\n//# sourceURL=webpack://nukemap-web/./src/entries/table.js?");

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