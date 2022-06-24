import "./discussProblem.scss"

const openButton = document.getElementById("discuss-problem-button")
const modal = document.getElementById("discussProblem")
const dialog = document.getElementById("discussProblemDialog")
const close = document.getElementById("closeDiscuss")
const form = document.querySelector(".modal__wrapper .dialog form")
const successMessage = document.querySelector(".modal__wrapper .dialog .success-message")
const submitButton = document.getElementById("discussSubmit")

const labels = document.querySelectorAll(".modal__wrapper .dialog form label")


const getInputOfLabel = label => {
    return Array
        .from(label.childNodes)
        .find(elem => (elem.nodeName === "INPUT" || elem.nodeName === "TEXTAREA"))
}

function inputListener(e){
    if(e.target.value === ""){
        e.target.parentNode.classList.add("error")
    }
    else {
        e.target.parentNode.classList.remove("error")
    }
}

function closeModal(){
    stopValidateInputs(labels)
    document.body.style.overflow = "visible"
    modal.classList.remove("active")
    submitButton.disabled = false
    submitButton.value = "Отправить"
    successMessage.style.display = "none"
}

function validateInputs(labels){
    labels.forEach((label) => {
        if(label.childNodes[1].value === ""){
            label.classList.add("error")
        }
        else {
            label.classList.remove("error")
        }
        label.childNodes[1].addEventListener("input", inputListener)
    })
}
function stopValidateInputs(labels){
    labels.forEach(label => {
        label.childNodes[1].value = ""
        label.childNodes[1].removeEventListener("input", inputListener)
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
    validateInputs(labels)
    const isFormValid = !Array
        .from(labels)
        .find(label => label.classList.contains("error"))
    if(isFormValid){
        const res = {
            name: getInputOfLabel(labels[0]).value,
            email: getInputOfLabel(labels[1]).value,
            description: getInputOfLabel(labels[2]).value,
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