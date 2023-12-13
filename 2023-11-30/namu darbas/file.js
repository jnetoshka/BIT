function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1. Sąlyga: Generuojamas skaičius tarp 0 ir 99;

// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
// Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
// Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log();

// Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ. sugeneruotas skaičius 28:
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26
function categoryOne(skaicius){
    let rez = skaicius * 3;
    return rez;
}
function categoryTwo(skaicius){
    let rez = (skaicius - 4)**2
    return rez;
}
function categoryThree(skaicius){
    let rez = skaicius + 10;
    return rez;
}
function categoryFour(skaicius){
    let rez = 100- skaicius;
    return rez;
}
function categoryFive(skaicius){
    let rez = skaicius /4;
    return rez;
}

let sk=rand(0,99);
//Kategorija 1: 0 – 5. skaičius dauginamas iš 3
if(sk <=5){
console.log(`Skaicius:${sk}\t Kategorija:1 \t Rezultatas:${categoryOne(sk)}`);
}
//Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
else if(sk>=6 && sk<15){
    console.log(`Skaicius:${sk}\t Kategorija:2 \t Rezultatas:${categoryTwo(sk)}`);
}
//Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
else if(sk>=16 && sk<30 && sk %5){
    console.log(`Skaicius:${sk}\t Kategorija:3 \t Rezultatas:${categoryThree(sk)}`);
}
//Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
else if(sk<31 && sk>45 && sk %2 !==0){
    console.log(`Skaicius:${sk}\t Kategorija:4 \t Rezultatas:${categoryFour(sk)}`);
}
//Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4
else if(sk>46 && sk%10 ===6 || sk%10===7 && sk<99){
    console.log(`Skaicius:${sk}\t Kategorija:5 \t Rezultatas:${categoryFive(sk)}`);
}
else{
    console.log (`skaicius ${sk} nepriklauso nei vienai kategorijai`)
}
