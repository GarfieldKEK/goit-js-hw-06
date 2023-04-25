const input = document.querySelector("#font-size-control")
const txt = document.querySelector("#text")
input.addEventListener("input", changeFontSize)
function changeFontSize(){
    txt.style.fontSize = input.value + "px"
}