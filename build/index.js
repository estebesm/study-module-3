/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 363:
/***/ (() => {

const openButton = document.getElementById("discuss-problem-button")
const modal = document.getElementById("discussProblem")
const dialog = document.getElementById("discussProblemDialog")
const close = document.getElementById("closeDiscuss")
const form = document.querySelector(".modal__wrapper .dialog form")
const successMessage = document.querySelector(".modal__wrapper .dialog .success-message")
const submitButton = document.getElementById("discussSubmit")

const labelName = document.getElementById("discussLabelName")
const labelEmail = document.getElementById("discussLabelEmail")
const labelDescription = document.getElementById("discussLabelDescription")

const inputName = document.getElementById("discussInputName")
const inputEmail = document.getElementById("discussInputEmail")
const inputDescription = document.getElementById("discussInputDescription")


//const labels = document.querySelectorAll(".modal__wrapper .dialog form label")


// const getInputOfLabel = label => {
//     return Array
//         .from(label.childNodes)
//         .find(elem => (elem.nodeName === "INPUT" || elem.nodeName === "TEXTAREA"))
// }
const labels = [labelName, labelEmail, labelDescription]
const inputs = [inputName, inputEmail, inputDescription]

function inputListener(e){
    if(e.target.value === ""){
        e.target.parentNode.classList.add("error")
    }
    else {
        e.target.parentNode.classList.remove("error")
    }
}

function closeModal(){
    stopValidateInputs(labels, inputs)
    document.body.style.overflow = "visible"
    modal.classList.remove("active")
    submitButton.disabled = false
    submitButton.value = "Отправить"
    successMessage.style.display = "none"
}

function validateInputs(labels, inputs){
    labels.forEach((label, index) => {
        if(inputs[index].value === ""){
            label.classList.add("error")
        }
        else {
            label.classList.remove("error")
        }
        inputs[index].addEventListener("input", inputListener)
    })
}
function stopValidateInputs(labels, inputs){
    labels.forEach((label, index) => {
        inputs[index].value = ""
        inputs[index].removeEventListener("input", inputListener)
    })
}

modal.addEventListener("click", closeModal)
dialog.addEventListener("click", (e) => {
    e.stopPropagation()
})

openButton.addEventListener("click", () => {
    document.body.style.overflow = "hidden"
    modal.classList.add("active")
})

close.addEventListener("click", () => {
    closeModal()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInputs(labels, inputs)
    const isFormValid = !Array
        .from(labels)
        .find(label => label.classList.contains("error"))
    if(isFormValid){
        const res = {
            name: inputs[0].value,
            email: inputs[1].value,
            description: inputs[2].value,
        }
        submitButton.disabled = true
        submitButton.value = "идет отправка..."
        setTimeout(() => {
            console.log(res)
            successMessage.style.display = "block"
        }, 2000)
        setTimeout(() => {
            closeModal()
        }, 4000)
    }
})

/***/ }),

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(941);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_discussProblem_discussProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(363);
/* harmony import */ var _components_discussProblem_discussProblem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_discussProblem_discussProblem__WEBPACK_IMPORTED_MODULE_1__);








})();

/******/ })()
;