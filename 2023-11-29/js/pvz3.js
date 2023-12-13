// let data = '2023-11-29';
// let menuo = data[5]+data[6]
// if(menuo==='01'){
//     console.log('sausis')
// }
// if(menuo==='02'){
//     console.log('vasaris')
// }
// if(menuo==='03'){
//     console.log('kovas')
// }

let  diena= 2;
if (diena=== 1) {
    console.log('pirmadienis')
    
} 
else if(diena ===2) //если не выполненно предыдущее условие, но выполненно текущее
{
    console.log ('antradienis')
}
else if(diena ===3)
{
    console.log ('treciadienis')
}
else if(diena ===4)
{
    console.log ('ketvertadienis')
}
else if(diena ===5)
{
    console.log ('penktadienis')
}
else if(diena ===6)
{
    console.log ('sestadienis')
}
else if(diena ===7)
{
    console.log ('sekmadienis')
}
else {
    console.log('nera savaites diena')
}
//что бы указать четный день надо день поделить на 2 === если 0 значит четный
if(diena <= 7 && diena >= 1){
if( diena % 2 === 0){
    console.log('diena yra ligine')
}
else{
    console.log('diena yra nelygine')
}
}