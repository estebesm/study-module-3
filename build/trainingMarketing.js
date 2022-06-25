/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 941:
/***/ (() => {

const menu = document.getElementById("header__nav")
const burger = document.getElementById("burger-button")
const closeButton = document.getElementById("header-close-button")

burger.addEventListener("click", () => {
    document.body.style.overflow = "hidden"
    menu.classList.remove("disabled")
    menu.classList.add("active")
})
closeButton.addEventListener("click", () => {
    document.body.style.overflow = "visible"
    menu.classList.remove("active")
    menu.classList.add("disabled")
})


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/components/header/header.js
var header = __webpack_require__(941);
;// CONCATENATED MODULE: ./src/components/consultation/consultation.js


//const labels = document.querySelectorAll(".consultation form label")

//const submitButton = document.querySelector(".consultation form button")

const consultationLabelName = document.getElementById("consultationLabelName")
const consultationLabelEmail = document.getElementById("consultationLabelEmail")

const consultationInputName = document.getElementById("consultationInputName")
const consultationInputEmail = document.getElementById("consultationInputEmail")

const consultationButton = document.getElementById("consultationButton")

const labels = [consultationLabelName, consultationLabelEmail]
const inputs = [consultationInputName, consultationInputEmail]

consultationButton.addEventListener("click", () => {
    labels.forEach((label, index) => {
        const input = inputs[index]
        if(input.value === ""){
            label.classList.add("error")
        }
        input.addEventListener("input", () => {
            if(input.value === ""){
                label.classList.add("error")
            }
            else{
                label.classList.remove("error")
            }
        })
    })
    const isFormValid = !Array
        .from(labels)
        .find(label => label.classList.contains("error"))

    if(isFormValid){
        consultationButton.disabled = true
        consultationButton.textContent = "идет загрузка..."
        setTimeout(() => {
            console.log({
                name: consultationInputName.value,
                email: consultationInputEmail.value
            })
            labels.forEach((label, index) => {
                inputs[index].value = ""
            })
            consultationButton.disabled = false
            consultationButton.textContent = "Получить консультацию"
        }, 3000)
    }
})
;// CONCATENATED MODULE: ./src/pages/trainingMarketing/trainingMarketing.js











})();

/******/ })()
;