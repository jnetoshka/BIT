const breedSelectElement = document.querySelector("#breeds-select");
const dynamicAlbumelement = document.querySelector("#photo-album");
const breedsArray = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((response) => parseAllBreeds(response.message));

function parseAllBreeds(breeds) {
  let dynamicHTML = "";
  console.log(breeds);
  for (let breed in breeds) {
    //breed - veisles pavadinimas
    //masyve esancios reiksmes - sub veisles
    const subBreeds = breeds[breed];
    if (subBreeds.length === 0) {
      dynamicHTML += `<option>${breed}</option>`;
      breedsArray.push(breed);
    } else {
      for (let subBreed of subBreeds) {
        dynamicHTML += `<option>${subBreed} ${breed}</option>`;
        breedsArray.push(`${subBreed} ${breed}`);
      }
    }
  }
  parseDogImages(breedsArray[0]);
  breedSelectElement.innerHTML = dynamicHTML;
}
function parseDogImages(breed) {
  let dynamicURL = generateDynamicDogPhotoURL(breed);
  fetch(dynamicURL)
    .then((response) => response.json())
    .then((response) => generateDynamicDogPhotos(response.message));
}
function generateDynamicDogPhotoURL(breed) {
  let finalBreed = breed.split(" ").reverse().join("/");
  return `https://dog.ceo/api/breed/${finalBreed}/images`;
}
function generateDynamicDogPhotos(photosArray) {
  let dynamicHTML = "";
  for (let photo of photosArray) {
    dynamicHTML += `  <div class="col-4 mx-auto">
    <img src="${photo}"
    style="width: 100%;">
</div>`;
  }
  dynamicAlbumelement.innerHTML = dynamicHTML;
}
breedSelectElement.addEventListener("change", () => {
  parseDogImages(breedSelectElement.value);
});
