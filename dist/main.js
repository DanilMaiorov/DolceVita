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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helpers */ \"./modules/helpers.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_priceSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceSlider */ \"./modules/priceSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import { sendService } from './modules/sendService';\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.modal)();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__.scroll)();\r\n(0,_modules_priceSlider__WEBPACK_IMPORTED_MODULE_4__.priceSlider)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.sendForm)({ formId: 'form1', someElem: [\r\n    {\r\n        type: 'textarea',\r\n        id: 'form1-message',\r\n    },\r\n]});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.sendForm)({ formId: 'form2' })\r\n\r\n//sendService()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate ({timing, draw, duration}) {    \r\n     \r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        \r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction)\r\n\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nfunction modal () {\r\n\r\n    const modal = document.querySelector('.popup')\r\n    const modalInst = document.querySelector('.popup-inst')\r\n    const modalOverlay = document.querySelector('.popup-overlay')\r\n    const body = document.querySelector('body')\r\n\r\n    function animation (x, y) {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n            return timeFraction\r\n            },\r\n            draw(progress) {\r\n                    x.style.display = 'block'\r\n                    x.style.opacity = progress; \r\n                    y.style.display = 'block'\r\n                    y.style.opacity = progress \r\n            }\r\n        })\r\n    }\r\n    function openModal () { \r\n        animation(modal, modalOverlay)\r\n    }\r\n    function openInstModal () {\r\n        animation(modalInst, modalOverlay)\r\n    } \r\n    function closeModal () {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction\r\n                },\r\n                draw(progress) {\r\n                    modal.style.opacity = 1 - progress; \r\n                    modalOverlay.style.opacity = 1 - progress; \r\n                    modalInst.style.opacity = 1 - progress; \r\n                        setTimeout(() => {\r\n                            modal.style.display = 'none'\r\n                            modalOverlay.style.display = 'none' \r\n                            modalInst.style.display = 'none'\r\n                        }, 300)\r\n                } \r\n            })\r\n    }\r\n    body.addEventListener('click', (e) => {\r\n        if(e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')) {\r\n            e.target.style.cursor = 'pointer'\r\n            openModal()\r\n        }\r\n        if(e.target.id === 'inst') {\r\n            e.preventDefault()\r\n            openInstModal()\r\n        }\r\n        if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close') || e.target.closest('.popup-inst__btn')) {\r\n            closeModal()\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/priceSlider.js":
/*!********************************!*\
  !*** ./modules/priceSlider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"priceSlider\": () => (/* binding */ priceSlider)\n/* harmony export */ });\nfunction priceSlider () {\r\n    new Swiper('.swiper', {\r\n        effect: 'coverflow',\r\n        grabCursor: true,\r\n        loop: true,\r\n        centeredSlides: true,\r\n        slidesPerView: 'auto',\r\n        coverflowEffect: {\r\n            rotate: 50,\r\n            stretch: 0,\r\n            depth: 100,\r\n            modifier: 1,\r\n            slideShadows: true,\r\n        },\r\n            navigation: {\r\n        nextEl: '.price__arrow-next',\r\n        prevEl: '.price__arrow-prev',\r\n      },\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/priceSlider.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nfunction scroll () {\r\n    const header = document.querySelector('.header__content')\r\n    const footer = document.querySelector('.footer')\r\n    const pageNavLinks = [...Array.from(header.querySelectorAll('li > a')), ...Array.from(footer.querySelectorAll('li > a'))]\r\n    const arrowUp = document.querySelector('.arrow-up')\r\n    const logoLeft = header.querySelector('img')\r\n    const arrayUp = [arrowUp, logoLeft]\r\n\r\n    pageNavLinks.forEach(item => {\r\n        item.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            if (item = e.target) {\r\n                let idAnchor = item.getAttribute('href')\r\n                document.querySelector(idAnchor).scrollIntoView({\r\n                    block: 'start',\r\n                    behavior: 'smooth'\r\n                })\r\n            }\r\n        })\r\n    })\r\n\r\n    if (scrollY > 600) {\r\n        arrowUp.style.opacity = '0.6';\r\n        arrowUp.style.zIndex = '999';\r\n    } else {\r\n        arrowUp.style.opacity = '0' ;\r\n        arrowUp.style.zIndex = '-999'; \r\n    }  \r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (scrollY >= 600) {\r\n          arrowUp.style.zIndex = '999';\r\n          arrowUp.style.opacity = '0.6';\r\n          arrowUp.style.transition = '0.6s opacity'\r\n          arrowUp.style.display = 'block';\r\n      } else {\r\n          arrowUp.style.opacity = '0'; \r\n          arrowUp.style.transition = '.6s all';\r\n          arrowUp.style.zIndex = '-1';\r\n      }   \r\n  })\r\n    arrayUp.forEach((item) => {\r\n        item.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 2000,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    window.scrollBy(0, -500 * progress)\r\n                }\r\n            })\r\n        })\r\n        if(item.tagName === \"BUTTON\") {\r\n            item.addEventListener('mouseenter', () => {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 200,\r\n                    timing(timeFraction) {\r\n                    return timeFraction\r\n                    },\r\n                    draw(progress) {\r\n                        item.style.opacity = 0.6 + progress*0.2\r\n                    }\r\n                })\r\n            })\r\n            item.addEventListener('mouseleave', () => {\r\n                ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 200,\r\n                    timing(timeFraction) {\r\n                    return timeFraction\r\n                    },\r\n                    draw(progress) {\r\n                        item.style.opacity = 0.8 - progress*0.2\r\n                    }\r\n                })\r\n            })\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./modules/validation.js\");\n//import { sendService } from './sendService';\r\n\r\n\r\nfunction sendForm ({ formId, someElem = []}) {\r\n    const form = document.getElementById(formId)\r\n\r\n    const statusBlock = document.createElement('div') \r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    ;(0,_validation__WEBPACK_IMPORTED_MODULE_0__.validation)()\r\n\r\n    function submitForm () {\r\n        const formElements = form.querySelectorAll('input')\r\n\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n        formData.forEach((value,key) => {\r\n            formBody[key] = value\r\n        })\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if(elem.type === 'block') {\r\n                formbody[elem.id] = element.textContent\r\n            } else if (elem.type === 'input') {\r\n                formbody[elem.id] = element.value\r\n            }\r\n        })\r\n    }\r\n    submitForm()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nfunction validation () {\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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