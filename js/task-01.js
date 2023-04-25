const categories = document.querySelector("#categories")

const categoriesItem = categories.querySelectorAll("li.item")
console.log(categoriesItem)
categoriesItem.forEach(item =>{
    const categoriesName = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("li");
    console.log(`Category: ${categoriesName}`)
    console.log(`Elements: ${categoriesElements.length}`)

})