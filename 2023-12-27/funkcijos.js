//в скобках здесь - аргументы
//***** 1 - разница между ними что функцию можно записать куда угодно и не важно где запустить - будет работать
// function showMesage(message){
//     console.log(message)
//     }

//***** 2
// const showMesage = (message) => {
//     console.log(message);
// };

//***** 3
const showMesage = function (message) {
  console.log(message);
};
//в скобках здесь - параметры
showMesage("labukas");
function isAbiggerThanB(aValue, bValue) {
  return aValue > bValue;
}
function findBiggerValue(a, b) {
  console.log(isAbiggerThanB(a, b));
  if (isAbiggerThanB(a, b)) return a;
  else return b;
}
console.log(findBiggerValue(40, 55));

//spread оператор ...переменная
function findMaximumValue(...args) {
  let max = args[0]; // 1 элемент
  for (let index in args) {
    if (args[index] > max) max = args[index];
  }
  console.log(max);
}
findMaximumValue(...[4, 7, 8, 100, 100, 150, -3, 290]);

console.log(Math.max(1, 2, 8, -23, 15));

function callbackFunction(message, callback) {
  console.log(message);
  callback();
}
callbackFunction("Labas pasauli", () => {
  console.log("funkcijos pabaiga");
});
callbackFunction("Labas pasauli", () => {
  console.log("dar ne pabaiga");
});

//===================== recursion
function recursion(value) {
  console.log("value:" + value);
  if (value < 10) recursion(value + 1);
  console.log(value);
}
recursion(4);

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

// sukurkite funcija  kuri apskaiciuja pazymiu vidurki

function countAverage(...pazymiai) {
  let sum = 0;
  for (let pazymys of pazymiai) {
    sum += pazymys;
  }
  let average = sum / pazymiai.length;
  return average;
}
console.log(countAverage(4, 7, 9, 10));

console.log("--------------------------");

//1 tikrinti ar masyve yra daugiau nei 6 elementai
//jei taip :
//iskvesti funkcija kuri apsaiciuoja viddusrki padalindama visus skaicius is 2
//Jei ne:
//Iskvesti funkcija kuri apskaiciuoja vidurki padaugindama visus skaicius is 2
//2. Funkcijps viduje patikrinti ar paduodamas argumentas yra macivas
//3 apskaiciuioti rezultatinio masyvo elementu reiksmes
//4 apskaiciuoti rezultatinio masyvo elementu suma
//5 apskaiciuoti vidurki padalinant visa elementu suma is elementu kiekiu
// grazinti vidurki
const arr = [4, 7, 8, 9, 10, 11, 12];
if (arr.length > 6) {
  countAverageSpecial(arr, divideAllElementsByTwo);
} else {
  countAverageSpecial(arr, multiplyAllElementsByTwo);
}
function divideAllElementsByTwo(array) {
  for (let index in array) {
    array[index] /= 2;
  }
  return array;
}
function multiplyAllElementsByTwo(array) {
  for (let index in array) {
    array[index] *= 2;
  }
  return array;
}
function countAverageSpecial(array, callback) {
  if (typeof array !== "object") return 0;
  const resultArray = callback(array);
  let sum = 0;
  for (let value of resultArray) {
    sum += value;
  }
  let average = sum / array.length;
  return average;
}
