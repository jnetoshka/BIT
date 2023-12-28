function add(a,b) {
    return a + b 
}
console.log(add(5,6))

function isEven(numer){
    return numer %2 ===0
}
console.log(isEven(7));

function greet(name){
    console.log(`labas ${name}`);
}
greet('Zhenia')

//факториалы
function factorial(number){
if(number === 0 || number === 1){
    return 1 
}else{
    return number * factorial(number - 1)
}
}
const factorial2 = factorial(5)
console.log(factorial2);

function prasuktiCickla(kartai){
    if(kartai > 0){
        console.log('veiksmas nr.'+ kartai);
        prasuktiCickla(kartai - 1)
    }
    }
prasuktiCickla(5)


function celsiusToFarenheit(celsius){
    return(celsius * 9/5)+32
}
console.log(celsiusToFarenheit(27))



function getMaxNumber(array){
    return Math.max(...array)
}
console.log(getMaxNumber([5,15,120,100,14,2]));


//рандомное число

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max+min+1))+min
}
console.log(getRandomNumber(0,15))