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

/***/ "./src/components/mapbox.component.js":
/*!********************************************!*\
  !*** ./src/components/mapbox.component.js ***!
  \********************************************/
/***/ (() => {

eval("// import mushroomMarker from './assets/mushroom-marker.patt'\r\n\r\nwindow.onload = () => {\r\n    registerMapComponent()\r\n    createMarker()\r\n}\r\n\r\nfunction registerMapComponent() {\r\n    AFRAME.registerComponent('mapbox-map', {\r\n        schema: {\r\n            latitude : {type: 'number', default: 0},\r\n            longitude : {type: 'number', default: 0},\r\n        },\r\n        init: function () {\r\n            console.log(\"Map!\" + \"Long: \" + this.data.longitude + \" Lat: \" + this.data.latitude)\r\n        },\r\n})\r\n}\r\n\r\n\r\n// FIXME: Change attributes to render map on the marker instead of mushroom cloud\r\nfunction createMarker() {\r\n    // Find a-scene\r\n    let scene = document.querySelector('a-scene');\r\n    \r\n    /*Create Marker\r\n    let marker = document.createElement('a-marker');\r\n    marker.setAttribute('type', 'pattern');\r\n    marker.setAttribute('preset', 'custom');\r\n    marker.setAttribute('url', mushroomMarker)\r\n    */\r\n\r\n    // Add map component to scene\r\n    let map = document.createElement('a-entity');\r\n    map.setAttribute('mapbox-map', 'longitude: 0.005, latitude: 0.01'); // For touch events\r\n\r\n    // Add elements to scene\r\n    // marker.appendChild(model);\r\n    scene.appendChild(map);\r\n}\n\n//# sourceURL=webpack://nukemap-web/./src/components/mapbox.component.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/mapbox.component.js"]();
/******/ 	
/******/ })()
;