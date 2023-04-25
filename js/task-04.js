const currentValue = document.querySelector("#value")
let value = 0
const increment = () => {
    value +=1
    currentValue.textContent = value
}
const decrement = () => {
    value -= 1
    currentValue.textContent = value
}
document.querySelector("[data-action='increment']").addEventListener("click", increment)
document.querySelector("[data-action='decrement'").addEventListener("click", decrement)