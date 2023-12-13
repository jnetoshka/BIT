// function pakeistiElementoTeksta(){
// // // HTML elemento priskyrimas kintamajam
// // let elementas = document.querySelector(".isskirtinis-paragrafas");
// // //меняет текст, и не важно что написано в html документе 
// // elementas.innerText = "Hello world";
// let vardoIvestis = document.querySelector("#vardas");
// let paragrafas = document.querySelector(".isskirtinis-paragrafas");
// //elementas.value -  достает информацию из инпута и select (только для них)  ;
//     let vardoIvestiesReiksme = vardoIvestis.value; // reiksme is inputo
//     // console.log(typeof vardoIvestiesReiksme); показывает тип string=text
//     paragrafas.innerText = `sveiki prisijunge prie puslapio,${vardoIvestiesReiksme}`; // reiksme is inputo priskiriama paragrafui
// }
let loginName = "Petras";
let password = "123321";
function login()
{
    //HTML elemento priskirymas kintamajam
let prisijungimoVardoIvestis = document.querySelector('#prisijungimoVardas');
let prisijungimoSlaptazodzioIvestis = document.querySelector('#prisijungimoSlaptazodis');
//Reiksmes istraukimas is input elementu
let prisijungimoVardas = prisijungimoVardoIvestis.value;
let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;
//Patikrinti as ivesti duomenys yra teisingi.
if (loginName === prisijungimoVardas && password === prisijungimoSlaptazodis){

    console.log ('prisijungete teisingai');
}
else{
    console.log('prisijungimo duomenys yra blogi')
}
}

