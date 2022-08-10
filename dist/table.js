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

/***/ "./src/components/tabletop-ar-components.js":
/*!**************************************************!*\
  !*** ./src/components/tabletop-ar-components.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global AFRAME  */\r\n// https://ada.is/basketball-demo/ar-components.js\r\n\r\nfunction registerHitTestComponents() {\r\n\tAFRAME.registerComponent(\"hide-in-ar-mode\", {\r\n\t\t// Set this object invisible while in AR mode.\r\n\t\t// TODO: could this be replaced with bind=\"visible: !ar-mode\"\r\n\t\t// with https://www.npmjs.com/package/aframe-state-component ?\r\n\t\tinit: function () {\r\n\t\t\tthis.el.sceneEl.addEventListener(\"enter-vr\", () => {\r\n\t\t\t\tif (this.el.sceneEl.is(\"ar-mode\")) {\r\n\t\t\t\t\tthis.el.setAttribute(\"visible\", false);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tthis.el.sceneEl.addEventListener(\"exit-vr\", () => {\r\n\t\t\t\tthis.el.setAttribute(\"visible\", true);\r\n\t\t\t});\r\n\t\t},\r\n\t});\r\n\t\r\n\tAFRAME.registerComponent(\"occlusion-material\", {\r\n\t\tupdate: function () {\r\n\t\t\tthis.el.components.material.material.colorWrite = false;\r\n\t\t},\r\n\t});\r\n\t\r\n\t\r\n\tclass HitTest {\r\n\t\tconstructor(renderer, options) {\r\n\t\r\n\t\t\tthis.renderer = renderer;\r\n\t\t\tthis.xrHitTestSource = null;\r\n\t\r\n\t\t\trenderer.xr.addEventListener(\"sessionend\", () => this.xrHitTestSource = null);\r\n\t\t\trenderer.xr.addEventListener(\"sessionstart\", () => this.sessionStart(options));\r\n\t\t\t\r\n\t\t\tif (this.renderer.xr.isPresenting) {\r\n\t\t\t\tthis.sessionStart(options)\r\n\t\t\t}\r\n\t\t}\r\n\t\r\n\t\tasync sessionStart(options) {\r\n\t\t\tthis.session = this.renderer.xr.getSession();\r\n\t\t\t\r\n\t\t\tif (options.space) {\r\n\t\t\t\tthis.space = options.space;\r\n\t\t\t\tthis.xrHitTestSource = await this.session.requestHitTestSource(options);\r\n\t\t\t} else if ( options.profile ) {\r\n\t\t\t\tthis.transient = true;\r\n\t\t\t\tthis.xrHitTestSource = await this.session.requestHitTestSourceForTransientInput(options);\r\n\t\t\t}\r\n\t\t}\r\n\t\r\n\t\tdoHit(frame) {\r\n\t\t\tif (!this.renderer.xr.isPresenting) return;\r\n\t\t\tconst refSpace = this.renderer.xr.getReferenceSpace();\r\n\t\t\tconst xrViewerPose = frame.getViewerPose(refSpace);\r\n\t\r\n\t\t\tif (this.xrHitTestSource && xrViewerPose) {\r\n\t\r\n\t\t\t\tif (this.transient) {\r\n\t\t\t\t\tconst hitTestResults = frame.getHitTestResultsForTransientInput(this.xrHitTestSource);\r\n\t\t\t\t\tif (hitTestResults.length > 0) {\r\n\t\t\t\t\t\tconst results = hitTestResults[0].results;\r\n\t\t\t\t\t\tif (results.length > 0) {\r\n\t\t\t\t\t\t\tconst pose = results[0].getPose(refSpace);\r\n\t\t\t\t\t\t\treturn {\r\n\t\t\t\t\t\t\t\tinputSpace: hitTestResults[0].inputSource.targetRaySpace,\r\n\t\t\t\t\t\t\t\tpose\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\treturn false\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\tconst hitTestResults = frame.getHitTestResults(this.xrHitTestSource);\r\n\t\t\t\t\tif (hitTestResults.length > 0) {\r\n\t\t\t\t\t\tconst pose = hitTestResults[0].getPose(refSpace);\r\n\t\t\t\t\t\treturn {\r\n\t\t\t\t\t\t\tpose,\r\n\t\t\t\t\t\t\tinputSpace: this.space\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// Usage\r\n\t// Needs the master version of AFrame and the hit-test optional feature\r\n\t// Add ar-hit-test to the reticle\r\n\tconst hitTestCache = new Map();\r\n\tAFRAME.registerComponent(\"ar-hit-test\", {\r\n\t\tschema: {\r\n\t\t\ttarget: { type: \"selector\" },\r\n\t\t\tdoHitTest: { default: true }\r\n\t\t},\r\n\t\r\n\t\tinit: function () {\r\n\t\t\tthis.hitTest = null;\r\n\t\t\tthis.hasFoundAPose = false;\r\n\t\r\n\t\t\tthis.el.sceneEl.renderer.xr.addEventListener(\"sessionend\", () => {\r\n\t\t\t\tthis.hitTest = null;\r\n\t\t\t\tthis.hasFoundAPose = false;\r\n\t\t\t});\r\n\t\r\n\t\t\tthis.el.sceneEl.renderer.xr.addEventListener(\"sessionstart\", async () => {\r\n\t\t\t\tconst renderer = this.el.sceneEl.renderer;\r\n\t\t\t\tconst session = this.session = renderer.xr.getSession();\r\n\t\t\t\tthis.hasFoundAPose = false;\r\n\t\r\n\t\t\t\t// Default to selecting through the face\r\n\t\t\t\tconst viewerSpace = await session.requestReferenceSpace('viewer');\r\n\t\t\t\tconst viewerHitTest = new HitTest(renderer, {\r\n\t\t\t\t\tspace: viewerSpace\r\n\t\t\t\t});\r\n\t\t\t\tthis.hitTest = viewerHitTest;\r\n\t\r\n\t\t\t\t// These are transient inputs so need to be handled seperately\r\n\t\t\t\tconst profileToSupport = \"generic-touchscreen\";\r\n\t\t\t\tconst transientHitTest = new HitTest(renderer, {\r\n\t\t\t\t\tprofile: profileToSupport,\r\n\t\t\t\t});\r\n\t\r\n\t\t\t\tsession.addEventListener('selectstart', ({ inputSource }) => {\r\n\t\t\t\t\tif (!this.data.doHitTest) return;\r\n\t\t\t\t\tif (inputSource.profiles[0] === profileToSupport) {\r\n\t\t\t\t\t\tthis.hitTest = transientHitTest;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tthis.hitTest = hitTestCache.get(inputSource) || new HitTest(renderer, {\r\n\t\t\t\t\t\t\tspace: inputSource.targetRaySpace\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\thitTestCache.set(inputSource, this.hitTest);\r\n\t\t\t\t\t}\r\n\t\t\t\t\tthis.el.setAttribute('visible', true);\r\n\t\t\t\t});\r\n\t\r\n\t\t\t\tsession.addEventListener('selectend', ({ inputSource }) => {\r\n\t\t\t\t\tthis.needsSelectEventForInputSource = inputSource;\r\n\t\r\n\t\t\t\t\tif (!this.data.doHitTest) return;\r\n\t\r\n\t\t\t\t\tif (this.hasFoundAPose) {\r\n\t\r\n\t\t\t\t\t\tthis.el.setAttribute('visible', false);\r\n\t\r\n\t\t\t\t\t\tthis.hitTest = null;\r\n\t\r\n\t\t\t\t\t\t// For transient input sources fall back to viewer hit testing\r\n\t\t\t\t\t\t// after a short while after the transient input source is no longer available.\r\n\t\t\t\t\t\t// To give a consistent interaction experience\r\n\t\t\t\t\t\tif (inputSource.profiles[0] === profileToSupport) {\r\n\t\t\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\t\t\tthis.hitTest = viewerHitTest;\r\n\t\t\t\t\t\t\t}, 300);\r\n\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\tif (this.data.target) {\r\n\t\t\t\t\t\t\tconst target = this.data.target;\t\t\t\t\r\n\t\t\t\t\t\t\ttarget.setAttribute(\"position\", this.el.getAttribute(\"position\"));\r\n\t\t\t\t\t\t\ttarget.object3D.quaternion.copy(this.el.object3D.quaternion);\r\n\t\t\t\t\t\t\ttarget.setAttribute(\"visible\", true);\r\n\t\t\t\t\t\t}\r\n\t\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t},\r\n\t\ttick: function () {\r\n\t\t\tconst frame = this.el.sceneEl.frame;\r\n\t\r\n\t\t\tif (!frame) return;\r\n\t\r\n\t\t\tif (this.needsSelectEventForInputSource) {\r\n\t\t\t\tconst inputSource = this.needsSelectEventForInputSource;\r\n\t\t\t\tthis.needsSelectEventForInputSource = false;\r\n\t\r\n\t\t\t\tconst space = inputSource.targetRaySpace;\r\n\t\t\t\ttry {\r\n\t\t\t\t\tconst pose = frame.getPose(space, this.el.sceneEl.renderer.xr.getReferenceSpace());\r\n\t\t\t\t\tthis.el.emit('select', { inputSource, pose });\r\n\t\t\t\t} catch (e) {\r\n\t\t\t\t\tconsole.log(e);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\r\n\t\t\tif (this.hitTest && this.data.doHitTest) {\r\n\t\t\t\tconst result = this.hitTest.doHit(frame);\r\n\t\t\t\tif (result) {\r\n\t\r\n\t\t\t\t\tconst { pose, inputSpace } = result;\r\n\t\r\n\t\t\t\t\tthis.hasFoundAPose = true;\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\tthis.currentControllerPose = frame.getPose(inputSpace, this.el.sceneEl.renderer.xr.getReferenceSpace());\r\n\t\t\t\t\t} catch (e) {\r\n\t\t\t\t\t\tconsole.log(e);\r\n\t\t\t\t\t}\r\n\t\r\n\t\t\t\t\tthis.el.setAttribute('visible', true);\r\n\t\t\t\t\tthis.el.setAttribute(\"position\", pose.transform.position);\r\n\t\t\t\t\tthis.el.object3D.quaternion.copy(pose.transform.orientation);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\t});\r\n\t\r\n\tAFRAME.registerPrimitive('a-hit-test', {\r\n\t\tdefaultComponents: {\r\n\t\t\t'ar-hit-test': {}\r\n\t\t},\r\n\t\tmappings: {\r\n\t\t\ttarget: 'ar-hit-test.target',\r\n\t\t}\r\n\t});\r\n}\t\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerHitTestComponents);\n\n//# sourceURL=webpack://nukemap-web/./src/components/tabletop-ar-components.js?");

/***/ }),

/***/ "./src/entries/table.js":
/*!******************************!*\
  !*** ./src/entries/table.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tabletop_ar_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tabletop-ar-components */ \"./src/components/tabletop-ar-components.js\");\n/**\r\n * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame\r\n */\r\n\r\n\r\n(0,_components_tabletop_ar_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://nukemap-web/./src/entries/table.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/table.js");
/******/ 	
/******/ })()
;