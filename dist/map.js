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

/***/ "./src/assets/nyc.jpg":
/*!****************************!*\
  !*** ./src/assets/nyc.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/d7f23d259949208870d3a7b64d8c8a1e.jpg\");\n\n//# sourceURL=webpack://nukemap-web/./src/assets/nyc.jpg?");

/***/ }),

/***/ "./src/components/mapbox.component.js":
/*!********************************************!*\
  !*** ./src/components/mapbox.component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_nyc_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/nyc.jpg */ \"./src/assets/nyc.jpg\");\n// import mushroomMarker from './assets/mushroom-marker.patt'\r\n// import mapboxgl from 'mapbox-gl'\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    // registerImageComponent()\r\n    createMarker()\r\n}\r\n\r\n/*\r\nfunction registerMapComponent() {\r\n    AFRAME.registerComponent('mapbox-map', {\r\n        schema: {\r\n            // Map properties: container, style, zoom, bounds/maxBounds\r\n            // Default LatLng Set to NYC\r\n            latitude : {type: 'number', default: 40.7128},\r\n            longitude : {type: 'number', default: 74.0060},\r\n            zoom: {type: 'number', default: 9}\r\n        },\r\n        init: function () {\r\n            // const accessToken = process.env.MAPBOX_API_KEY\r\n            const el = this.el\r\n            // el.setObject3D('mesh', this.map)\r\n\r\n            this.map = this.createMap()\r\n\r\n            const mapLat = this.data.latitude\r\n            const mapLng = this.data.longitude\r\n            console.log(\"Map!\" + \"Long: \" + this.data.longitude + \" Lat: \" + this.data.latitude)\r\n        },\r\n        createMap: function () {\r\n            const map = new mapboxgl.Map({\r\n                container: 'map', // container ID\r\n                style: 'mapbox://styles/mapbox/streets-v11', // style URL\r\n                center: [this.data.longitude, this.data.latitude], // starting position [lng, lat]\r\n                zoom: this.data.zoom, // starting zoom\r\n            });\r\n\r\n            return map\r\n        }\r\n})\r\n}\r\n*/\r\n\r\n// FIXME: Change attributes to render map on the marker instead of mushroom cloud\r\nfunction createMarker() {\r\n    // Find a-scene\r\n    let scene = document.querySelector('a-scene');\r\n    \r\n    // Create Marker\r\n    let marker = document.createElement('a-marker');\r\n    marker.setAttribute('type', 'pattern');\r\n    marker.setAttribute('preset', 'custom');\r\n    marker.setAttribute('url', mushroomMarker)\r\n\r\n    // Add map component to scene\r\n    // let map = document.createElement('a-entity');\r\n    // map.setAttribute('map-image', ''); // For touch events\r\n\r\n    let image = document.createElement('a-image')\r\n    image.setAttribute('src', _assets_nyc_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\n    // Add elements to scene\r\n    marker.appendChild(image);\r\n    scene.appendChild(marker);\r\n}\n\n//# sourceURL=webpack://nukemap-web/./src/components/mapbox.component.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/mapbox.component.js");
/******/ 	
/******/ })()
;