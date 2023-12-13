function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Naujo array sukurimas su pradiniais 4 elementais
// let kint= new Array(4)


//naaujo array sukurimas su pradinemis reiksmis
let kint = [rand(0,2),rand(0,2),rand(0,2),rand(0,2)];




console.log(kint);
console.log(kint[1]);
//.fill(x) uzpildo visus masyvo elementus tam tikra reiksme
let count= new Array(3).fill(0)
let kintamasis = [2,4,8,9,10].fill("stringai");
console.log(kintamasis);

    //operatorius++ prideda 1 prie nurodyto kintomojo
    //operatiurs -- atime 1 is nurodduto kintomoko
if (kint[0]===0) count[0]++;
else if (kint[0]===1) count[1]++;
else count[2]++;

if (kint[1]===0) count[0]++;
else if (kint[1]===1) count[1]++;
else count[2]++;

if (kint[2]===0) count[0]++;
else if (kint[2]===1) count[1]++;
else count[2]++;

if (kint[3]===0) count[0]++;
else if (kint[3]===1) count[1]++;
else count[2]++;


console.log(`Skaiciu 0 - ${count[0]}\t 1 - ${count[1]}\t 2 - ${count[2]}`);


