const counterValue = document.querySelector("#value")
let value = 0
const increment = () => {
    value +=1
    counterValue.textContent = value
}
const decrement = () => {
    value -= 1
    counterValue.textContent = value
}
document.querySelector("[data-action='increment']").addEventListener("click", increment)
document.querySelector("[data-action='decrement'").addEventListener("click", decrement)