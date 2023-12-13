function calculate(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let rez = document.querySelector("#rez");

    let operation = document.querySelector(`#operation`).value;

 if(isNaN(num1) || isNaN(num2)){
    rez.innerText=
    "operacija negali buti atlikta, kadangi vienas is skaiciu yra neivestas ";
     return;
 }
if(operation === "+")rez.innerText = num1 + num2;
else if(operation ==='-')rez.innerText = num1 - num2;
else if(operation ==='*')rez.innerText = num1 * num2;
else if(operation ==='/' && num2 !==0) rez.innerText = num1/num2;
//ar  num1 ===0 ir num2===0
else if(operation ==='**'){
    if (num1 === 0 && num2 <= 0)
        rez.innerText='Jei pirmasis skaicius yra  nulis o kitas yra negatyvus skaicius ,todel laipsniu kelti negalima'
        else {
            rez.innerText = num1 ** num2;
        }
    }
}
