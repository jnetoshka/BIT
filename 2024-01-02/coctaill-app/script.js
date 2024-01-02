const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
categorySelectElement = document.querySelector("#category-select"),
glassSelectElement = document.querySelector("#glass-type-select"),
ingredientSelectEelement= document.querySelector("#ingredient-select")


const categoriesArray = [];

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
  .then((response) => response.json())
  .then((response) => fillCategorySelect(response.drinks))
  .catch((error) => console.log(error))


fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json()
).then((response)=>console.log(response))

function fillCategorySelect(categories) {
  let dynamicHTML = "";
  for (const category of categories) {
    dynamicHTML += `<option>${category.strCategory}</option>`;
    categoriesArray.push(category.strCategory);
  }
  categorySelectElement.innerHTML = dynamicHTML;
  console.log(categoriesArray);
}

//1 selectu uspildymas duomenimis
//2
