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

/***/ "./src/assets/mushroom-marker.patt":
/*!*****************************************!*\
  !*** ./src/assets/mushroom-marker.patt ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/689a8c3b666353a5ec8bfcc4d1deebb7.patt\");\n\n//# sourceURL=webpack://nukemap-web/./src/assets/mushroom-marker.patt?");

/***/ }),

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

/***/ "./src/components/gesture.component.js":
/*!*********************************************!*\
  !*** ./src/components/gesture.component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** \r\n * Credit to Fabio Cortes (https://github.com/fcor)\r\n * Code: https://github.com/fcor/arjs-gestures/blob/master/dist/gestures.js\r\n * AR.js Documentation: https://ar-js-org.github.io/AR.js-Docs/ui-events/ \r\n * This component allows users to maniuplate the scale and view of an object in marker-based AR\r\n * Two Fingers for scale, 1 for rotation (the direction varies depending on wha)\r\n */\r\n\r\nfunction registerGestureComponents() {\r\n  /* global AFRAME, THREE */\r\n  AFRAME.registerComponent(\"gesture-handler\", {\r\n    schema: {\r\n      enabled: { default: true },\r\n      rotationFactor: { default: 5 }, // Rotation speed\r\n      minScale: { default: 0.3 },\r\n      maxScale: { default: 8 },\r\n    },\r\n  \r\n    init: function () {\r\n      this.handleScale = this.handleScale.bind(this);\r\n      this.handleRotation = this.handleRotation.bind(this);\r\n  \r\n      this.isVisible = false;\r\n      this.initialScale = this.el.object3D.scale.clone();\r\n      this.scaleFactor = 1;\r\n      \r\n      // Adds event listeners so that rotation and scaling are only allowed when marker is visible\r\n      this.el.sceneEl.addEventListener(\"markerFound\", (e) => {\r\n        this.isVisible = true;\r\n      });\r\n  \r\n      this.el.sceneEl.addEventListener(\"markerLost\", (e) => {\r\n        this.isVisible = false;\r\n      });\r\n    },\r\n  \r\n    update: function () {\r\n      if (this.data.enabled) {\r\n        this.el.sceneEl.addEventListener(\"onefingermove\", this.handleRotation);\r\n        this.el.sceneEl.addEventListener(\"twofingermove\", this.handleScale);\r\n      } else {\r\n        this.el.sceneEl.removeEventListener(\"onefingermove\", this.handleRotation);\r\n        this.el.sceneEl.removeEventListener(\"twofingermove\", this.handleScale);\r\n      }\r\n    },\r\n  \r\n    remove: function () {\r\n      this.el.sceneEl.removeEventListener(\"onefingermove\", this.handleRotation);\r\n      this.el.sceneEl.removeEventListener(\"twofingermove\", this.handleScale);\r\n    },\r\n  \r\n    handleRotation: function (event) {\r\n      if (this.isVisible) {\r\n        this.el.object3D.rotation.y +=\r\n          event.detail.positionChange.x * this.data.rotationFactor;\r\n        this.el.object3D.rotation.x +=\r\n          event.detail.positionChange.y * this.data.rotationFactor;\r\n      }\r\n    },\r\n  \r\n    handleScale: function (event) {\r\n      if (this.isVisible) {\r\n        this.scaleFactor *=\r\n          1 + event.detail.spreadChange / event.detail.startSpread;\r\n  \r\n        this.scaleFactor = Math.min(\r\n          Math.max(this.scaleFactor, this.data.minScale),\r\n          this.data.maxScale\r\n        );\r\n  \r\n        this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x;\r\n        this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y;\r\n        this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z;\r\n      }\r\n    },\r\n  });\r\n  \r\n  // Component that detects and emits events for touch gestures\r\n  \r\n  AFRAME.registerComponent(\"gesture-detector\", {\r\n    schema: {\r\n      element: { default: \"\" }\r\n    },\r\n  \r\n    init: function() {\r\n      this.targetElement =\r\n        this.data.element && document.querySelector(this.data.element);\r\n  \r\n      if (!this.targetElement) {\r\n        this.targetElement = this.el;\r\n      }\r\n  \r\n      this.internalState = {\r\n        previousState: null\r\n      };\r\n  \r\n      this.emitGestureEvent = this.emitGestureEvent.bind(this);\r\n  \r\n      this.targetElement.addEventListener(\"touchstart\", this.emitGestureEvent);\r\n  \r\n      this.targetElement.addEventListener(\"touchend\", this.emitGestureEvent);\r\n  \r\n      this.targetElement.addEventListener(\"touchmove\", this.emitGestureEvent);\r\n    },\r\n  \r\n    remove: function() {\r\n      this.targetElement.removeEventListener(\"touchstart\", this.emitGestureEvent);\r\n  \r\n      this.targetElement.removeEventListener(\"touchend\", this.emitGestureEvent);\r\n  \r\n      this.targetElement.removeEventListener(\"touchmove\", this.emitGestureEvent);\r\n    },\r\n  \r\n    emitGestureEvent(event) {\r\n      const currentState = this.getTouchState(event);\r\n  \r\n      const previousState = this.internalState.previousState;\r\n  \r\n      const gestureContinues =\r\n        previousState &&\r\n        currentState &&\r\n        currentState.touchCount == previousState.touchCount;\r\n  \r\n      const gestureEnded = previousState && !gestureContinues;\r\n  \r\n      const gestureStarted = currentState && !gestureContinues;\r\n  \r\n      if (gestureEnded) {\r\n        const eventName =\r\n          this.getEventPrefix(previousState.touchCount) + \"fingerend\";\r\n  \r\n        this.el.emit(eventName, previousState);\r\n  \r\n        this.internalState.previousState = null;\r\n      }\r\n  \r\n      if (gestureStarted) {\r\n        currentState.startTime = performance.now();\r\n  \r\n        currentState.startPosition = currentState.position;\r\n  \r\n        currentState.startSpread = currentState.spread;\r\n  \r\n        const eventName =\r\n          this.getEventPrefix(currentState.touchCount) + \"fingerstart\";\r\n  \r\n        this.el.emit(eventName, currentState);\r\n  \r\n        this.internalState.previousState = currentState;\r\n      }\r\n  \r\n      if (gestureContinues) {\r\n        const eventDetail = {\r\n          positionChange: {\r\n            x: currentState.position.x - previousState.position.x,\r\n  \r\n            y: currentState.position.y - previousState.position.y\r\n          }\r\n        };\r\n  \r\n        if (currentState.spread) {\r\n          eventDetail.spreadChange = currentState.spread - previousState.spread;\r\n        }\r\n  \r\n        // Update state with new data\r\n  \r\n        Object.assign(previousState, currentState);\r\n  \r\n        // Add state data to event detail\r\n  \r\n        Object.assign(eventDetail, previousState);\r\n  \r\n        const eventName =\r\n          this.getEventPrefix(currentState.touchCount) + \"fingermove\";\r\n  \r\n        this.el.emit(eventName, eventDetail);\r\n      }\r\n    },\r\n  \r\n    getTouchState: function(event) {\r\n      if (event.touches.length === 0) {\r\n        return null;\r\n      }\r\n  \r\n      // Convert event.touches to an array so we can use reduce\r\n  \r\n      const touchList = [];\r\n  \r\n      for (let i = 0; i < event.touches.length; i++) {\r\n        touchList.push(event.touches[i]);\r\n      }\r\n  \r\n      const touchState = {\r\n        touchCount: touchList.length\r\n      };\r\n  \r\n      // Calculate center of all current touches\r\n  \r\n      const centerPositionRawX =\r\n        touchList.reduce((sum, touch) => sum + touch.clientX, 0) /\r\n        touchList.length;\r\n  \r\n      const centerPositionRawY =\r\n        touchList.reduce((sum, touch) => sum + touch.clientY, 0) /\r\n        touchList.length;\r\n  \r\n      touchState.positionRaw = { x: centerPositionRawX, y: centerPositionRawY };\r\n  \r\n      // Scale touch position and spread by average of window dimensions\r\n  \r\n      const screenScale = 2 / (window.innerWidth + window.innerHeight);\r\n  \r\n      touchState.position = {\r\n        x: centerPositionRawX * screenScale,\r\n        y: centerPositionRawY * screenScale\r\n      };\r\n  \r\n      // Calculate average spread of touches from the center point\r\n  \r\n      if (touchList.length >= 2) {\r\n        const spread =\r\n          touchList.reduce((sum, touch) => {\r\n            return (\r\n              sum +\r\n              Math.sqrt(\r\n                Math.pow(centerPositionRawX - touch.clientX, 2) +\r\n                  Math.pow(centerPositionRawY - touch.clientY, 2)\r\n              )\r\n            );\r\n          }, 0) / touchList.length;\r\n  \r\n        touchState.spread = spread * screenScale;\r\n      }\r\n  \r\n      return touchState;\r\n    },\r\n  \r\n    getEventPrefix(touchCount) {\r\n      const numberNames = [\"one\", \"two\", \"three\", \"many\"];\r\n  \r\n      return numberNames[Math.min(touchCount, 4) - 1];\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerGestureComponents);\n\n//# sourceURL=webpack://nukemap-web/./src/components/gesture.component.js?");

/***/ }),

/***/ "./src/entries/marker.js":
/*!*******************************!*\
  !*** ./src/entries/marker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_gesture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/gesture.component */ \"./src/components/gesture.component.js\");\n/* harmony import */ var _assets_mushroom_marker_patt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/mushroom-marker.patt */ \"./src/assets/mushroom-marker.patt\");\n/* harmony import */ var _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mushroom_cloud/mushroomRealistic.glb */ \"./src/assets/mushroom_cloud/mushroomRealistic.glb\");\n/* harmony import */ var _assets_nyc_NYC_glb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/nyc/NYC.glb */ \"./src/assets/nyc/NYC.glb\");\n\r\n\r\n\r\n\r\n\r\n// Creates AFrame elements to render a mushroom cloud at the specified marker\r\nfunction createMarker() {\r\n    // Find a-scene\r\n    let scene = document.querySelector('a-scene');\r\n    \r\n    // Create Marker with .patt file (can be found on Notion)\r\n    let marker = document.createElement('a-marker');\r\n    marker.setAttribute('type', 'pattern');\r\n    marker.setAttribute('preset', 'custom');\r\n    marker.setAttribute('url', _assets_mushroom_marker_patt__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\n    // Create GLTF model of NYC Map\r\n    let map = document.createElement('a-entity');\r\n    map.setAttribute('gltf-model', _assets_nyc_NYC_glb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n    map.setAttribute('position', '0 0 0');\r\n    map.setAttribute('scale', '0.001 0.001 0.001');\r\n    map.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal\r\n    map.setAttribute('class', 'clickable'); \r\n    map.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events\r\n\r\n    // Create GLTF model of Mushroom Cloud\r\n    let cloud = document.createElement('a-entity');\r\n    cloud.setAttribute('gltf-model', _assets_mushroom_cloud_mushroomRealistic_glb__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    cloud.setAttribute('position', '0 -1 0');\r\n    cloud.setAttribute('scale', '0.003 0.005 0.003');\r\n    cloud.setAttribute('rotation', '0 90 -90'); // For when Marker is veritcal\r\n    cloud.setAttribute('class', 'clickable'); \r\n    cloud.setAttribute('gesture-handler', 'minScale: 0.005, maxScale: 0.01'); // For touch events (see gesture.component.js)\r\n\r\n    // Add elements to scene\r\n    marker.appendChild(cloud)\r\n    marker.appendChild(map);\r\n    scene.appendChild(marker);\r\n}\r\n\r\nwindow.onload = () => {\r\n    (0,_components_gesture_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    createMarker()\r\n}\r\n    \r\n\n\n//# sourceURL=webpack://nukemap-web/./src/entries/marker.js?");

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/marker.js");
/******/ 	
/******/ })()
;