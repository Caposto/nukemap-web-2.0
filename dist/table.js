/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entries/table.js":
/*!******************************!*\
  !*** ./src/entries/table.js ***!
  \******************************/
/***/ (() => {

eval("/**\r\n * Tabletop prototype with Hit-Testing (Maybe Anchoring) using WebXR, ThreeJS, A-Frame\r\n */\r\nfunction createReticle() {\r\n    let scene = document.querySelector(\"a-scene\")\r\n\r\n    let reticle = document.createElement(\"a-plane\")\r\n    reticle.setAttribute('rotation', '-90 0 0')\r\n    reticle.setAttribute('width', '0.2')\r\n    reticle.setAttribute('height', '0.2')\r\n    reticle.setAttribute('ar-hit-test-2', '')\r\n\r\n    scene.appendChild(reticle)\r\n}\n\n//# sourceURL=webpack://nukemap-web/./src/entries/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/entries/table.js"]();
/******/ 	
/******/ })()
;