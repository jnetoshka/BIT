const LS = localStorage;

function readMore() {
  const textAbout = document.querySelector(".text4");
  const buttonAbout = document.querySelector(".button");
  switch (textAbout.style.display) {
    case "none":
      textAbout.style.display = "block";
      buttonAbout.innerHTML = "Hide";
      break;
    case "block":
      textAbout.style.display = "none";
      buttonAbout.innerHTML = "View more";
      break;
    default:
      textAbout.style.display = "block";
      buttonAbout.innerHTML = "Hide";
  }
}

const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
  categorySelectElement = document.querySelector("#category-select"),
  glassSelectElement = document.querySelector("#glass-type-select"),
  ingredientSelectElement = document.querySelector("#ingredient-select"),
  dynamicDrinksElement = document.querySelector(".drinks"),
  buttonSearch = document.querySelector("#search"),
  buttonRandom = document.querySelector("#random");
const modal = document.querySelector(".modal-bg");
const closeElem = document.querySelector(".modal-close-button");
const selectValues = {},
  drinksArray = [];

async function fillSelectElements() {
  // const startTime = new Date();
  const allUrls = [
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  ];

  const allPromises = allUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const allValues = await Promise.all(allPromises);

  const [allCategories, allGlasses, allIngredients] = allValues;

  selectValues.categories = allCategories.drinks.map(
    (categoryObj) => categoryObj.strCategory
  );
  selectValues.glasses = allGlasses.drinks.map((glass) => glass.strGlass);
  selectValues.Ingredients = allIngredients.drinks.map(
    (ingredient) => ingredient.strIngredient1
  );
  //Category
  fillCategorySelect(
    allCategories.drinks,
    categorySelectElement,
    "strCategory"
  );
  //Choose a glass
  fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");
  //Ingredients
  fillCategorySelect(
    allIngredients.drinks,
    ingredientSelectElement,
    "strIngredient1"
  );
  // const endDate = new Date();
  // const difference = endDate.getTime() - startTime.getTime();
  // console.log(difference);
}

//присоединили данные к
function fillCategorySelect(properties, selectElement, strFieldName) {
  let dynamicHTML = "";
  for (const property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}
async function getAllDrinks() {
  const categoryDrinksUrls = [];
  for (const category of selectValues.categories) {
    let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
      " ",
      "_"
    )}`;
    categoryDrinksUrls.push(dynamicUrl);
  }
  const allPromises = categoryDrinksUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  const allValues = await Promise.all(allPromises);
  allValues.forEach((value) => drinksArray.push(...value.drinks));
}

function generateDrinksHTML(drinks) {
  let dynamicHTML = "";
  for (let drink of drinks) {
    dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
    <img src="${drink.strDrinkThumb}" alt="">
  <p class="drink-title">${drink.strDrink}</p></div>`;
  }
  dynamicDrinksElement.innerHTML = dynamicHTML;
}

async function filter() {
  const searchValue = coctailNameFilterElement.value,
    category = categorySelectElement.value,
    glass = glassSelectElement.value,
    ingredient = ingredientSelectElement.value;
  let filteredArray = [...drinksArray];
  console.log(filteredArray);

  if (searchValue) {
    filteredArray = filteredArray.filter((drinkObj) =>
      drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  if (category !== "Category") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfCategory = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfCategory.drinks.some(
        (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
      )
    );
  }
  if (glass !== "Choose a glass") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfGlass = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfGlass.drinks.some(
        (drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink
      )
    );
  }

  if (ingredient !== "Ingredients") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfIngredients = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfIngredients.drinks.some(
        (drinksOfIngredients) => drink.idDrink === drinksOfIngredients.idDrink
      )
    );
  }

  generateDrinksHTML(filteredArray);
  LS.setItem("filteredArray", JSON.stringify(filteredArray));
}
if (LS.getItem("filteredArray")) {
  filteredArray = JSON.parse(LS.getItem("filteredArray"));
  console.log(filteredArray);
}

//получаем все напитки из API
async function initialization() {
  await fillSelectElements();
  await getAllDrinks();
  generateDrinksHTML(drinksArray);
  console.log(drinksArray);
  buttonSearch.addEventListener("click", filter);
}

async function openModal(id) {
  modal.style.display = "flex";

  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await promise.json();
  const drink = response.drinks[0];

  setCoctailDataToModal(drink);

  console.log(drink);
}
const closeModalbyClick = (event) => {
  const target = event.target;
  if (target === modal || target.closest(".modal-close-button")) {
    modal.style.display = "none";
  }
};
const randomModal = () => {
  modal.style.display = "flex";
};
buttonRandom.addEventListener("click", getRandomCoctail);
modal.addEventListener("click", closeModalbyClick);

async function getRandomCoctail() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const randomCoctail = await response.json();
  const drink = randomCoctail.drinks[0];
  setCoctailDataToModal(drink);
  modal.style.display = "flex";

  console.log(randomCoctail.drinks);
}

function setCoctailDataToModal(drink) {
  let dynamicIngredients = ""; //1-pasiziurejau pas Vyteni
  document.querySelector("#drink-name").innerText = drink.strDrink;
  document.querySelector(".modal-img").src = drink.strDrinkThumb;
  document.querySelector("#modal-category").innerText = drink.strCategory;
  document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
  document.querySelector("#modal-glass").innerText = drink.strGlass;
  document.querySelector("#modal-recipe").innerText = drink.strInstructions;
  for (
    //2- pasiziurejau pas Vyteni
    let i = 1;
    i <= 15;
    i++
  ) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient && measure) {
      dynamicIngredients += `<p class="inline ingredient"><b>${ingredient} </b><span> ${measure}</span></p>`;
    }
  }
  document.querySelector("#modal-ingredient").innerHTML = dynamicIngredients;
}
initialization();
