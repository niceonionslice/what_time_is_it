/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./src/js/modules/script.js\");\n/* harmony import */ var _modules_swapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swapi */ \"./src/js/modules/swapi.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  setInterval(_modules_script__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 1000);\n  Object(_modules_swapi__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/script.js":
/*!**********************************!*\
  !*** ./src/js/modules/script.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst rooplabel = () => {\n  document.querySelector(\".main--title\").innerHTML = dateNow();\n}\n\nconst dateNow = () => {\n  const date = new Date();\n  const year = date.getFullYear();\n  const month = date.getMonth() + 1;\n  const day = date.getDate();\n  const hours = date.getHours();\n  const minutes = date.getMinutes();\n  const seconds = date.getSeconds();\n  // const milliseconds = date.getMilliseconds();\n  const label = `今日は${year}/${month}/${day} ${hours}:${minutes}:${seconds}です。`;\n  return label;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rooplabel);\n\n\n//# sourceURL=webpack:///./src/js/modules/script.js?");

/***/ }),

/***/ "./src/js/modules/swapi.js":
/*!*********************************!*\
  !*** ./src/js/modules/swapi.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst swapiGetResult = () => {\n  const result = document.querySelector(\"#swapi--result\");\n\n  fetch('https://swapi.co/api/people/2/', {\n    method: 'GET'\n  }).then((response) => {\n    if (response.status !== 200) {\n      throw 'エラーですわ！'\n    }\n    return response.json();\n  })\n  .then((objs) => {\n    console.log(objs);\n    // ここでDOM捜査 実はここにコールバック関数とか？\n    result.innerText = objs.name;\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swapiGetResult);\n\n\n//# sourceURL=webpack:///./src/js/modules/swapi.js?");

/***/ })

/******/ });