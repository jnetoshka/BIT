// kintamojo deklaravimas su let
//kintamojo pavadinimas negali начинаться с цифры и не может состоять из двух слов с пробелом не длинее 20 символов?
let x = 10;
// informacijos isvedimas i koncole
console.log(x);

//aritmetiniai operatoriai :+ - * / %(liekanos operatorius)

x = x % 3;

console.log(x);
//kitas budas kaip aprasyti aritmetine operacija
x += 5;

console.log(x);
let LoginisPatikrinimas= x < 5;

console.log(LoginisPatikrinimas);
console.log(typeof LoginisPatikrinimas)
// x+="tekstas";
if(LoginisPatikrinimas)
{
    //typeof tikrina duomenu tipa
    console.log(typeof x);
    console.log(x);
}else{
    console.log("x yra mazesnis nei 5");
}


let tekstas = "labass";
//===sulyginimo operstorius оператор срванения,grieztas(строгий) tikrinimas tikrina ir duomenu tipa
if(tekstas === "labas") {
    console.log("tekstas yra labas");
}
//!== operatorius nelygu, grieztas(строгий) tikrinimas tikrina ir duomenu tipa
if(tekstas !== "labas") {
    console.log("textas nera lygus labas"); 
}

let skaicius = "5";
//== operatorius netikrinantis duomenu tipo, taciau tikrinantis reiksme
if (skaicius == 5){
console.log("skaicius yra 5");
}
let tiesa="gal ir gerai";
if (1)
{
    // del sios eilutes iskrinta erroras, kadangi kintomasis tiesa nebuvo atrastas musu kode
    console.log(tiesa);
}

let eilerastis = "lorem ipsum dolar sit amet";
console.log(eilerastis)
eilerastis += " consectetur"
console.log(eilerastis)

//jei prie skaiciaus yra pridedamas tekstas, galutinis kintamojo tipas yra skaicius
skaicius = 5;

skaicius +="";
console.log(typeof skaicius)
//tesktas yra indeksuojamas, is jo galime pasiimti raides pagala ju vieta tekste
let kintamasis = "CHICKEN";
                //0123456
                  //все начинается с нуля
console.log(kintamasis[0])
console.log(kintamasis[1])
console.log(kintamasis[2])
console.log(kintamasis[3])
console.log(kintamasis[4])
console.log(kintamasis[5])

kintamasis /=10
//NaN not a number, kintamasis yra gaunamas tada  kai gauna logine klaida atliekant aritmetine operacija
console.log(kintamasis)
console.log(typeof kintamasis)

//kai kintamajam reiksme nebuna priskiriama, jo reiksme buna undefined
let y;
console.log(y);

//St
kintamasis = "CHICKEN";
console.log(kintamasis.length)

let vardas ="Sylvestor"
let pavarde = "Stallone"
// if(){

// }
// else{

// }
//stringo ilgis gaunamas pasinaudojant savybe kintamasis.length
console.log(vardas.length > pavarde.length)
console.log(pavarde.length)