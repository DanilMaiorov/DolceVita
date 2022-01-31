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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate ({timing, draw, duration}) {    \r\n     \r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        \r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction)\r\n\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nfunction modal () {\r\n\r\n    const btns = Array.from(document.querySelectorAll('.popup-btn'))\r\n    const btnInst = document.querySelector('#inst')\r\n    const arrBtns = [...btns, btnInst]\r\n\r\n    const modal = document.querySelector('.popup')\r\n    const modalInst = document.querySelector('.popup-inst')\r\n    const modalOverlay = document.querySelector('.popup-overlay')\r\n    const arrModals = [modal, modalInst, modalOverlay]\r\n\r\n    arrBtns.forEach(item => {\r\n        item.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    if(e.target.closest('.popup-btn')) {\r\n                        modal.style.display = 'block'\r\n                        modal.style.opacity = progress; \r\n                        modalOverlay.style.display = 'block'\r\n                        modalOverlay.style.opacity = progress; \r\n                    } else {\r\n                        modalInst.style.display = 'block'\r\n                        modalInst.style.opacity = progress; \r\n                        modalOverlay.style.display = 'block'\r\n                        modalOverlay.style.opacity = progress; \r\n                    }\r\n                }\r\n            });\r\n        })\r\n    })\r\n    arrModals.forEach(item => {\r\n        item.addEventListener('click', (e) => {\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close')) {\r\n                    modal.style.opacity = 1 - progress; \r\n                    modalOverlay.style.opacity = 1 - progress; \r\n                    modalInst.style.opacity = 1 - progress; \r\n                        setTimeout(() => {\r\n                            modal.style.display = 'none'\r\n                            modalOverlay.style.display = 'none' \r\n                            modalInst.style.display = 'none'\r\n                        }, 300);\r\n                    }\r\n                } \r\n            })\r\n        }) \r\n    }) \r\n}\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;