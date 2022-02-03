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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nfunction modal () {\r\n\r\n    const modal = document.querySelector('.popup')\r\n\r\n    const modalInst = document.querySelector('.popup-inst')\r\n    const modalOverlay = document.querySelector('.popup-overlay')\r\n    const body = document.querySelector('body')\r\n    const priceTitles = document.querySelectorAll('.top-part__title')\r\n    const par = document.querySelector('.par')\r\n    const form = document.querySelector('.form-popup')\r\n    const popupTitle = document.querySelector('.popup__title')\r\n\r\n    function animation (x, y) {\r\n        form.style.display = 'block'\r\n        popupTitle.textContent = 'Мы перезвоним вам в ближайшее время!'\r\n        popupTitle.style.cssText = `\r\n            text-align: center;\r\n            color: #000;\r\n            font-weight: normal;\r\n            `\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n            return timeFraction\r\n            },\r\n            draw(progress) {\r\n                    x.style.display = 'block'\r\n                    x.style.opacity = progress; \r\n                    y.style.display = 'block'\r\n                    y.style.opacity = progress \r\n            }\r\n        })\r\n    }\r\n     function openModal () { \r\n        animation(modal, modalOverlay)\r\n        modal.childNodes[1].childNodes[5].childNodes[1].childNodes.forEach(item => {\r\n            if(item.tagName == 'INPUT') {\r\n                item.style.background = 'white'\r\n            }\r\n        })\r\n        form.reset()\r\n    } \r\n    function openInstModal () {\r\n        animation(modalInst, modalOverlay)\r\n    } \r\n    function closeModal () {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 400,\r\n                timing(timeFraction) {\r\n                return timeFraction\r\n                },\r\n                draw(progress) {\r\n                    modal.style.opacity = 1 - progress; \r\n                    modalOverlay.style.opacity = 1 - progress; \r\n                    modalInst.style.opacity = 1 - progress; \r\n                        setTimeout(() => {\r\n                            modal.style.display = 'none'\r\n                            modalOverlay.style.display = 'none' \r\n                            modalInst.style.display = 'none'\r\n                            par.innerHTML = par.textContent\r\n                        }, 400)\r\n                } \r\n            })\r\n    }\r\n    body.addEventListener('click', (e) => {\r\n        if(e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')) {\r\n            const activePopup = ((e.target.closest('.popup-btn') && e.target.parentNode.parentNode.closest('.swiper-slide-active')))\r\n            .childNodes[1].innerText.slice(0, 9)\r\n            priceTitles.forEach((title, index) => {\r\n                if(title.textContent === activePopup) { \r\n                    par.insertAdjacentHTML('afterbegin', `<input class=\"insert-input\" name=\"price_num\" tabindex=\"-1\" readonly value=\"Выбрана ${priceTitles[index].textContent}\"> <br>`)\r\n                } \r\n            }) \r\n            e.target.style.cursor = 'pointer'\r\n            openModal()\r\n        }\r\n        if(e.target.id === 'inst') {\r\n            e.preventDefault()\r\n            openInstModal()\r\n        }\r\n        if(e.target.closest('.popup-overlay') || e.target.closest('.popup__close') || e.target.closest('.popup-inst__btn')) {\r\n            closeModal()\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _sendService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendService */ \"./modules/sendService.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"./modules/validation.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction sendForm ({ formId, someElem = [] }) {\r\n    const form = document.getElementById(formId)\r\n\r\n    const statusBlock = document.createElement('div') \r\n        statusBlock.classList.add('status-block')\r\n    const status = document.createElement('div')  \r\n\r\n    const aff = [statusBlock, status]\r\n\r\n\r\n    const successText = 'Спасибо, Ваша заявка принята! Наш менеджер с вами свяжется'\r\n    const successImg = document.createElement('img') \r\n    const loadText = 'Загрузка...'\r\n    const loadImg = document.createElement('img')\r\n\r\n    const errorText = 'Что-то пошло не так..'\r\n    \r\n    \r\n    const nameInput = form.querySelector('.name-input')\r\n    const emailInput = form.querySelector('.email-input')\r\n    const phoneInput = form.querySelector('.phone-input') \r\n    const messageInput = form.querySelector('#form1-message')\r\n\r\n    const popupTitle = document.querySelector('.popup__title')\r\n\r\n    const popupContent = document.querySelector('.popup__wrapper')\r\n    const asd = document.querySelector('#form1')\r\n\r\n    \r\n    nameInput.addEventListener('blur', (e) => {\r\n        if(/^ [а-яёА-ЯЁa-zA-Z]+/gi.test(e.target.value)) {\r\n            nameInput.value = e.target.value\r\n        } else {\r\n            nameInput.value = e.target.value.replace(/[^а-яёА-ЯЁa-zA-Z ]+/gi, '').replace(/\\s+/gi, ' ').replace(/[^а-яёА-ЯЁa-zA-Z ]+$/gi, '').trim()\r\n        }\r\n    })\r\n    if(emailInput) {\r\n        emailInput.addEventListener('blur', (e) => {\r\n            if(/^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$/gi.test(e.target.value)) {\r\n                emailInput.value = e.target.value \r\n            } else {\r\n                emailInput.value = e.target.value.replace(/^[а-яё]+/gi, '').replace(/[а-яё]+/gi, '').replace(/\\s+/, '').replace(/@+/g, '@').trim()\r\n            }\r\n        })\r\n    }\r\n     phoneInput.addEventListener('blur', (e) => {\r\n        if(/(\\+7|8)[(]?(\\d{3})[)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})/g.test(e.target.value)) {\r\n            phoneInput.value = e.target.value\r\n        } else {\r\n            phoneInput.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\\++/g, '+').replace(/\\-+/g, '-').replace(/[^\\d\\(\\)\\-\\+]+/g, '').replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '')\r\n        }\r\n    }) \r\n        if(messageInput) {\r\n            messageInput.addEventListener('blur', (e) => {\r\n            e.target.value = e.target.value.trim().trim().match(/[а-яёА-ЯЁa-zA-Z0-9 \\-\\.,;:?!]+/gi);\r\n    })\r\n    } \r\n    function remove () {\r\n        successImg.remove()\r\n        statusBlock.remove()\r\n        status.remove()\r\n    }\r\n    function submitForm () {\r\n        const formElements = form.querySelectorAll('input')\r\n        console.log(formElements);\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        \r\n        formData.forEach((value,key) => {\r\n            formBody[key] = value\r\n        })\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if(elem.type === 'block') {\r\n                formbody[elem.id] = element.textContent\r\n            } else if (elem.type === 'input') {\r\n                formbody[elem.id] = element.value\r\n            }\r\n        })\r\n/*         popupTitle.style.display = 'none'\r\n        if(form.id !== 'form1') {\r\n            form.style.display = 'none'\r\n        } */\r\n\r\n/*         if(form.id === 'form1') {\r\n            popupContent.append(statusBlock)\r\n        } */\r\n\r\n        form.append(statusBlock)\r\n        statusBlock.classList.add('status-block')\r\n        if((0,_validation__WEBPACK_IMPORTED_MODULE_1__.validation)(formElements)) {\r\n            (0,_sendService__WEBPACK_IMPORTED_MODULE_0__.sendService)('https://jsonplaceholder.typicode.com/posts', 'POST', formBody)\r\n            .then(data => {                statusBlock.textContent = successText\r\n                statusBlock.style.color = '#00FA9A'\r\n                formElements.forEach(input => {\r\n                    form.reset()\r\n                })\r\n            })\r\n        }\r\n\r\n/*         status.classList.add('status-block')\r\n\r\n        popupContent.append(statusBlock)\r\n        asd.append(status)\r\n\r\n        status.textContent = loadText\r\n        statusBlock.textContent = loadText\r\n        loadImg.src = './imgNew/ZKZg.gif'\r\n        statusBlock.append(loadImg)\r\n        loadImg.style.cssText = `\r\n            width: 3rem;\r\n            margin: auto;\r\n            padding-top: 2rem;\r\n            margin-bottom: -1rem;\r\n            display: block;\r\n            `\r\n        statusBlock.style.cssText = `\r\n            text-align: center;\r\n            color: #000;\r\n            font-weight: normal;\r\n            font-size: 2rem;\r\n            display: block;\r\n            font-size: 2rem;\r\n            `\r\n            status.style.cssText = `\r\n            text-align: center;\r\n            color: #000;\r\n            font-weight: normal;\r\n            font-size: 2rem;\r\n            display: block;\r\n            font-size: 2rem;\r\n            `\r\n        if(validation(formElements)) {\r\n            sendService('https://jsonplaceholder.typicode.com/posts', 'POST', formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText\r\n                statusBlock.style.cssText = `\r\n                    text-align: center;\r\n                    color: #32C671;\r\n                    font-weight: bold;\r\n                    font-size: 2rem;\r\n                    `\r\n                    status.textContent = successText\r\n                    status.style.cssText = `\r\n                        text-align: center;\r\n                        color: #32C671;\r\n                        font-weight: bold;\r\n                        font-size: 2rem;\r\n                        `\r\n                successImg.src = './imgNew/png-clipart-check-mark-computer-icons-others-miscellaneous-angle.png'\r\n                statusBlock.append(successImg)\r\n                successImg.style.cssText = `\r\n                    width: 10rem;\r\n                    margin: auto;\r\n                    padding-top: 3rem;\r\n                    display: block;\r\n                    `\r\n                    if(successText) {\r\n                        let timerId = setTimeout(() => {\r\n                            function closeForm () {\r\n                                const modal = document.querySelector('.popup')\r\n                                const modalOverlay = document.querySelector('.popup-overlay')\r\n                                const par = document.querySelector('.par')\r\n                                animate({\r\n                                    duration: 300,\r\n                                    timing(timeFraction) {\r\n                                    return timeFraction\r\n                                    },\r\n                                    draw(progress) {\r\n                                        modal.style.opacity = 1 - progress; \r\n                                        modalOverlay.style.opacity = 1 - progress; \r\n                                        successImg.style.opacity = 1 - progress; \r\n                                        statusBlock.style.opacity = 1 - progress; \r\n                                        status.style.opacity = 1 - progress; \r\n                                        let timerId = setTimeout(() => {\r\n                                                modal.style.display = 'none'\r\n                                                modalOverlay.style.display = 'none' \r\n                                                successImg.style.display = 'none'\r\n                                                statusBlock.style.display = 'none'\r\n                                                status.style.display = 'none'\r\n                                                par.innerHTML = par.textContent\r\n                                            }, 300)\r\n                                    } \r\n                                })\r\n                            }\r\n                        closeForm()\r\n                        }, 900);  \r\n                        window.addEventListener('click', (e) => { \r\n                            if (e.target.closest('.feedback')) {\r\n                                remove()\r\n                                status.style.display = 'none'\r\n                                clearTimeout(timerId)\r\n                            } \r\n                            if (e.target.closest('.status-block') || e.target.closest('.popup-wrapper')) {\r\n                                successImg.style.display = 'block'\r\n                                statusBlock.style.display = 'block'\r\n                                status.style.display = 'none'\r\n                            } \r\n                        })  \r\n                    }\r\n                    form.reset()\r\n            }).catch(error => {\r\n                statusBlock.textContent = errorText\r\n                status.textContent = errorText\r\n            })\r\n        } else {\r\n            let newData = Array.from(formElements)\r\n            newData.pop()\r\n            newData.forEach(input => {\r\n                input.addEventListener('input', (e) => {\r\n                    input.style.background = 'white'\r\n                    if(!e.target.closest('.email-input') && e.target.value === '') {\r\n                        input.style.background = 'rgb(247, 233, 237)'\r\n                    }\r\n                })\r\n            })\r\n            popupTitle.style.display = 'block'\r\n            form.style.display = 'block'\r\n            statusBlock.style.paddingTop = '1rem'\r\n            statusBlock.style.color = '#ed4e4e'\r\n            statusBlock.textContent = 'Заполните, пожалуйста, все обязательные поля'\r\n            status.style.paddingTop = '1rem'\r\n            status.style.color = '#ed4e4e'\r\n            status.textContent = 'Заполните, пожалуйста, все обязательные поля'\r\n        } */\r\n        \r\n    }\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        submitForm()\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sendService.js":
/*!********************************!*\
  !*** ./modules/sendService.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendService\": () => (/* binding */ sendService)\n/* harmony export */ });\nfunction sendService (url, method, data) {\r\n    console.log('asd');\r\n    return fetch (url, {\r\n        method: method,\r\n        body: JSON.stringify(data),//передаем user \r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        } \r\n    }).then(res => res.json())\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/sendService.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nfunction validation (data) {\r\n\r\n    const dataArr = []\r\n\r\n    let success = true\r\n    let successName = false\r\n    let successEmail = false\r\n    let successPhone = false\r\n    let successMessage = false\r\n\r\n    data.forEach(input => {\r\n        if(input.closest('[name=name]')){\r\n            successName = /^[а-яёА-ЯЁa-zA-Z ]{2,}$/i.test(input.value)\r\n            console.log(successName);\r\n        }\r\n        if(input.closest('[name=email]')) {\r\n            successEmail = /[a-z0-9~*!'_\\-\\.]*@[\\w-]+\\.\\w{2,4}/gi.test(input.value)\r\n            console.log(successEmail);\r\n        }\r\n        if(input.closest('[name=phone]')) {\r\n            successPhone = /^[0-9()-\\+]+/.test(input.value)\r\n            console.log(successPhone);\r\n        }\r\n        if(input.closest('[name=message]')) {\r\n            successMessage = /^[а-яёА-ЯЁa-zA-Z0-9]{2,}$/gi.test(input.value)\r\n            console.log(successMessage);\r\n        }\r\n    })\r\n\r\n    if(successName === '' || successPhone === '' ||  (successEmail === '' || successEmail !== '') ||  successMessage === '') {\r\n        //debugger\r\n        success = false\r\n    }\r\n    if (successName && successPhone && (successEmail || !successEmail)  && !successMessage ) {\r\n       // debugger\r\n        success = true\r\n        console.log('true, отправка из модалки успешна');\r\n     }/*  else if (successName && successPhone && successMessage && (successEmail || !successEmail) ) {\r\n       // debugger\r\n        success = true\r\n        console.log('отправка произошла из второй формы');\r\n    \r\n } */  else {\r\n       // debugger\r\n        success = false\r\n        console.log('false чтото пошло не так');\r\n    }\r\n    return success\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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