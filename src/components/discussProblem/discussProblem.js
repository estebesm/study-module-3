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