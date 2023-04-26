const form = document.querySelector(".login-form")
form.addEventListener("submit",checkValidation)
function checkValidation (event){
    event.preventDefault()
    const {
        elements: { email, password } } = event.currentTarget
    if (email.value === "" || password.value === "") {
       return alert("Please fill in all the fields!")
    }
    else {
        const formData = {
            Email : email.value,
            Password : password.value
        }
        console.log(formData);
        event.currentTarget.reset();
    }

}
