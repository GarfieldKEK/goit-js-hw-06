const validation = document.querySelector("#validation-input")
validation.addEventListener("blur", validationCheck)
function validationCheck(){
    if (validation.value.length >= 6) {
        validation.classList.add ("valid")
    }
    else {
        validation.classList.add("invalid")
    }
}