// && ||
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function categoryOneCalculation(skaicius){
 let rez = skaicius ** 2;
 return rez;
}
function categoryThirdCalculation(skaicius){
    let desimtys = +skaicius.toString()[0]; '2'
    let rez = skaicius - desimtys;
    return rez

}
function categoryFourthCalculation(skaicius){
    let vienetai= skaicius% 10;
    let rez = (vienetai + skaicius) /2;
    return rez;
}
function categoryFivethCalculation(skaicius){
    
}
let sk=rand(0,99);
//категория 1: любое число от 0 до 10, возвести в квадртат и отобразить 
if(sk <= 10 ){
    // оператор ** - возводит число в квадрат
    // первый вариант: let rez = sk ** 2;
    // let rez = categoryOneCalculation(sk);
    console.log(`Skaicius: ${sk}\t Kategorija: 1, \t Rezultatas:${categoryOneCalculation(sk)}`) //если просто написать sk то будет интерпретироваться как текст , если добавить знак ${sk} то упомянется переменная в strige и работает только с наклоненными ковычками ``

}//категория 2: 10< числа > 20, отобразить число таким какое оно есть, так как мы указали выше что число должно быть меньше или = 10 значит начиная от бесконечности до 10 , указывать что число больше > 10 второй раз не нужно 
else if(sk < 20)
{
    console.log(`Skaicius:${sk}\t Kategorija:2 \t Rezultatas:${sk}`);
}
//категория 3: число больше или равно 20 но меньше 50(до 50 значит должно быть 49 ) (20<= чис <49) число должно быть четным %2===0 Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti skaiciaus desimtis yra pirmas skaicius pvz:20 - tai 2 , skaiciuaus vienetas yra antras skaicius pvz:20- tai 0
else if(sk >= 20 && sk < 49 && sk % 2===0)
{
    console.log(`Skaicius:${sk}\t Kategorija:3 \t Rezultatas:${categoryThirdCalculation(sk)}`);
}
//категория 4: 20<= чис <49 : число должно быть нечетным !==0 ,Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
else if(sk>= 20 && sk < 49 && sk %2 !==0)
{
       console.log(`Skaicius:${sk}\t Kategorija:4 \t Rezultatas:${categoryFourthCalculation(sk)}`);
    //DRY - don't repeat yorself!
}
//категория 5: 50<= чис и число делится на 3 без остатка за запятой
//Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
else if(sk >= 50 && sk %3===0){ 
    let a=rand(97,122),b=rand(97,122), c=rand(97,122), d=rand(97,122);
    let stringas = 
    String.fromCharCode(a) + 
    String.fromCharCode(b) + 
    String.fromCharCode(c) + 
    String.fromCharCode(b);
    console.log(`Skaicius:${sk}\t Kategorija:5 \t Rezultatas:${stringas}`);
}
else{
    console.log (`skaicius ${sk} nepriklauso nei vienai kategorijai`)
}