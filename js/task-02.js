const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")
const ingredientsItems = ingredients
.map((ingredients)=> `<li class="item">${ingredients}</li>`)  
.join("")


ingredientsList.innerHTML =ingredientsItems



