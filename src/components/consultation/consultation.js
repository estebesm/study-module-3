import './consultation.scss'

const labels = document.querySelectorAll(".consultation form label")

const submitButton = document.querySelector(".consultation form button")

submitButton.addEventListener("click", () => {
    labels.forEach(label => {
        const input = label.childNodes[1]
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
    const getInputOfLabel = label => {
        return Array
            .from(label.childNodes)
            .find(elem => elem.nodeName === "INPUT")
    }
    if(isFormValid){
        submitButton.disabled = true
        submitButton.textContent = "идет загрузка..."
        setTimeout(() => {
            console.log({
                name: getInputOfLabel(labels[0]).value,
                email: getInputOfLabel(labels[0]).value
            })
            labels.forEach(label => {
                label.childNodes[1].value = ""
            })
            submitButton.disabled = false
            submitButton.textContent = "Получить консультацию"
        }, 3000)
    }
})