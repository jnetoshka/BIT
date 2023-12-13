function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let atsitiktiniaiSkaiciai=[];
for (let i = 0; i <1000;i++){
    let randomSkaicius = rand(0,10);
    atsitiktiniaiSkaiciai.push(randomSkaicius)
}
console.log(atsitiktiniaiSkaiciai);

for(let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
 if(atsitiktiniaiSkaiciai[i] % 2 !==0){
    console.log(atsitiktiniaiSkaiciai[i]);
 }
}
// посчитать все цыфры меньше 5
let lessThan5 = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if (atsitiktiniaiSkaiciai[i] < 5) lessThan5++;
}
console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("skaciu,su reiksme <5 masyve yra:" + lessThan5);
// менье 3 но не больше 7
let counter = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if (atsitiktiniaiSkaiciai[1] < 3 || atsitiktiniaiSkaiciai[i] > 7) counter++;

}
console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("skaciu,su reiksme <3 arba >7  masyve yra:" + counter);


let naujasMasyvas= [8, 7, 3, 46, 9, 7];
//kai norime prideti elementus prie masyvo
naujasMasyvas.push(",");
console.log(naujasMasyvas);
//pasalinimas elemto is galo
naujasMasyvas.pop();
console.log(naujasMasyvas)
//elemento salinimas is priekio;
naujasMasyvas.shift();
console.log(naujasMasyvas);
//elemento salinimas pgala indeksa
//masyvoPavadinimas.splice(nuokiurioIndekso, 2)
naujasMasyvas.splice(-3)
console.log(naujasMasyvas)


// isfiltruokite is masyvo visus skaicius, kurie dalynasi is 2
for(let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    if(atsitiktiniaiSkaiciai[i] % 2 === 0){
        atsitiktiniaiSkaiciai.splice (i, 1);
        i--;
    }
}
console.log(atsitiktiniaiSkaiciai.join(","));