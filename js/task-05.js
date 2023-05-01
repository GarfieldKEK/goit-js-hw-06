const input = document.querySelector("#name-input")
const name = document.querySelector("#name-output")
input.addEventListener("input", setName)
function setName () {
    if (input.value === "") {
        name.textContent = "Anonymous"
    }
    else {
        name.textContent = input.value
    }
}