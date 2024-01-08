function readMore() {
  const textAbout = document.querySelector(".text4");
  const buttonAbout = document.querySelector(".button");
  if (textAbout.style.display === "none") {
    textAbout.style.display = "block";
    buttonAbout.innerHTML = "Hide";
  } else if (textAbout.style.display !== "none") {
    textAbout.style.display = "none";
    buttonAbout.innerHTML = "View more";
  }
}

const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
  categorySelectElement = document.querySelector("#category-select"),
  glassSelectElement = document.querySelector("#glass-type-select"),
  ingredientSelectElement = document.querySelector("#ingredient-select"),
  dynamicDrinksElement = document.querySelector(".drinks"),
  buttonSearch = document.querySelector("#search"),
  buttonRandom = document.querySelector("#random");

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

//присоединили данные к селектам через цыкл
function fillCategorySelect(properties, selectElement, strFieldName) {
  let dynamicHTML = "";
  for (const property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
    // categoriesArray.push(property.strCategory);
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
    dynamicHTML += ` <div class="drink"><img src="${drink.strDrinkThumb}" alt="">
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
    console.log(filteredArray);
    console.log(category);
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfCategory = await promise.json();
    console.log(drinksOfCategory);
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
  // if (ingredients !== "Ingredients") {
  //   const promise = await fetch(
  //     `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${ingredient.replaceAll(
  //       " ",
  //       "_"
  //     )}`
  //   );
  //   const drinksOfCategories = await promise.json();
  //   filteredArray = filteredArray.filter((drink) =>
  //     drinksOfCategories.drink.some(
  //       (drinksOfCategories) => drink.idDrink === drinksOfCategories.idDrink
  //     )
  //   );
  // }
  generateDrinksHTML(filteredArray);
}

//получаем все напитки из API
async function initialization() {
  //1 - заполнение selecta
  await fillSelectElements();
  await getAllDrinks();
  generateDrinksHTML(drinksArray);
  buttonSearch.addEventListener("click", filter);
}

initialization();
