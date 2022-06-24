import './consultation.scss'

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