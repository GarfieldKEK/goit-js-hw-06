function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls")
const boxes = document.querySelector("boxes")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
function(amount){
  
}