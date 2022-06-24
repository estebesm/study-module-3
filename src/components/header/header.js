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
