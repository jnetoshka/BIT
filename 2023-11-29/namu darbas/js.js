function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//6
let text = 'Once upon a time in hollywood';
console.log(text);
let small=text.toLowerCase();
let letter = '*';
let textO = small.replaceAll ('o', letter)
console.log(textO)

//7
let Random1 = rand(0,2);
let Random2 = rand(0,2);
let Random3 = rand(0,2);
let Random4 = rand(0,2);
console.log(Random1);
console.log(Random2);
console.log(Random3);
console.log(Random4);

let zero=0,
one=0,
two=0;
if(Random1 ===0){
    zero++;
}else if( Random1 ===1){
    one++;
}else if(Random1 ===2){
    two++;
}
if(Random2 ===0){
    zero++;
}else if( Random2 ===1){
    one++;
}else if(Random2 ===2){
    two++;
}
if(Random3 ===0){
    zero++;
}else if( Random3 ===1){
    one++;
}else if(Random3 ===2){
    two++;
}
if(Random4 ===0){
    zero++;
}else if( Random4 ===1){
    one++;
}else if(Random4 ===2){
    two++;
}
console.log('Zero',zero);
console.log('One',one);
console.log('Two',two);


// 8 деление большего числа на меньшее, сокращение до 2 цифр после запятой
let number1 = rand(0,4);
let number2 = rand(0,4);
console.log(number1);
console.log(number2);
if (number1 > number2){
    let numbers = number1 / number2;
    let valiuta = numbers.toFixed(2)
}
else {
    let numbers = number2 / number1;
    let valiuta = numbers.toFixed(2)
    console.log(numbers);
}

//9 среднее из всех рандомных чисел
let a=rand(0,25), b=rand(0,25), c=rand(0,25);
console.log(a,b,c)
if(a>b && a<c){
    console.log(a)
}
else if(a<b && a>c){
    console.log(a)
}
else if(b<a && b>c){
    console.log(b)
}
else if(b>a && b<c){
    console.log(b)
}
else if(c>a && c<b){
    console.log(c)
}
else if(c<a && c>b){
    console.log(c)
}

//10

let latin1= rand(97,122), latin2= rand(97,122), latin3=rand(97,122);
console.log(String.fromCharCode(latin1,latin2,latin3))
