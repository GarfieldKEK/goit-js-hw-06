const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")

const potatoes = document.createElement("li");
potatoes.classList.add("item") ;
potatoes.textContent = "Potatoes" ;

const mushrooms = document.createElement("li")
mushrooms.classList.add("item");
mushrooms.textContent = "Mushrooms";

const garlic = document.createElement("li")
garlic.classList.add("item");
garlic.textContent = "Garlic"

const tomatos = document.createElement("li")
tomatos.classList.add("item")
tomatos.textContent = "Tomatos"

const herbs = document.createElement("li")
herbs.classList.add("item")
herbs.textContent = "Herbs"

const condiments = document.createElement("li")
condiments.classList.add("item")
condiments.textContent = "Condiments"

ingredientsList.append(potatoes, mushrooms, garlic, tomatos, herbs, condiments)



