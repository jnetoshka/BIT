function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateArrayOfRandomNumbers(min=10,max,length=10) //() внутри скобок - установка параметров
{
    let arr = [];
    for (let i = 0; i< length; i ++){
        arr.push(rand(min,max));
    }
    return arr;
}
const generateArrayOfRandomNumbers2=( min=10,max,length=10) => {
    let arr = [];
    for (let i = 0; i< length; i ++){
        arr.push(rand(min,max));
    }
    return arr;
}

//const испльзуется - массивы,объекты, функции
//неизменяемость, хорошая практика, оптимизация - в определенной системе
const arr= generateArrayOfRandomNumbers(1,99,20);
let arr2=arr;

console.log(arr)
console.log(arr2);
arr2.push(1)
console.log(arr)
console.log(arr2);

const arr3=[] // пустые скобки озночают пустой массив

arr3.push(10);
arr3.push(9);
arr3.push(9);
console.log(arr3);
arr3.splice(-1);
console.log(arr3);


const arr4 = generateArrayOfRandomNumbers2(1,1000,20) // const функция должна быть написана выше чем она вызвана
console.log(arr4);

let sum=0;

//senoji darbo su masyvais sintskse
for(let i=0;i<arr4.length; i++)
{
sum+=arr4[i];
}
let average = sum/arr4.length;
console.log(average);


const arr5 = generateArrayOfRandomNumbers2(1,1000,23) 
console.log(arr5);
//for of cicklas -skirtas atlikti operacinas su visais masyvo elementais;
//grazina einamojo masyvo elemento reiksme
 for(let value of arr5){
 sum += value;
}
average = sum/arr5.length; 
console.log(average);

//for in 
//grazino einamojo masyvo elemto indekso reiksme;
const arr6 = generateArrayOfRandomNumbers2(1,1000,30) 
sum=0;
console.log(arr6);

for (let index in arr6)
{
    sum+=arr6[index];
}
average = sum / arr6.length;
console.log(average);

console.log("--------1--------")
for(let x of arr6){
    console.log(x)
}
console.log("--------2--------")
for(let x in arr6){
    console.log(x)
}

//atvirkštinis ciklas
for (let i = 70; i >= 0; i--) {
	// console.log(i);
}

//Filtruojame vardus pagal vardo ilgi
const masyvas = ["Petras", "Ona", "Justinas", "Lina"];

//paprastas funkcijos panaujimas kaip parametro.
let filteredValues = masyvas.filter(function (value, index) {
	console.log(`indeksas: ${index}, reikšmė: ${value}`);
	return value.length > 4;
});

filteredValues = masyvas.filter((val) => val.length === 4);

console.log(filteredValues);
//masyvas po filtracijos lieka toks pat
console.log(masyvas);

//MAP atlieka operacijas su visais masyvo elementais
let masyvas2 = [6, 2, 9, 5, 12];
console.log(masyvas2);

let modifikuotasMasyvas = masyvas2.map((value) => {
	if (value > 5) {
		return value + 5;
	} else {
		return value;
	}
});

console.log(modifikuotasMasyvas);

//Reduce - gražina rezultata operacijos su visais elementais
console.log(masyvas2);

//vidurkio apskaičiavimas pasinaudojant reduce
let suma = masyvas2.reduce((total, value) => total + value);
console.log(suma / masyvas2.length);

//some
//tikrinimas ar bent vienas iš masyvo elementų praeina patikrinimą
let isThereNumberLargerThan12 = masyvas2.some((value) => value > 9);
console.log(isThereNumberLargerThan12);

//every
//tikrina ar visi elementai iš masyvo praeina patikrinimą
let isEveryNumberLargerThan1 = masyvas2.every((value) => value > 2);
console.log(isEveryNumberLargerThan1);

let masyvas3 = generateArrayOfRandomNumbers(-100, 100, 100);
console.log(masyvas3);
masyvas3.sort((a, b) => {
	return b - a;
	//jei grazinama reiksme:
	// > 0	sort a after b, e.g. [b, a]
	// < 0	sort a before b, e.g. [a, b]
	// === 0	keep original order of a and b
});

console.log(masyvas3);