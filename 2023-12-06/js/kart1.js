function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Sugeniruokite 300 atsitiktinu skaiciu nuo 0 iki 300 , atspausdinkite juos atskiruts tarpais ir suskaiciuiokite kiek tarp ju yra 150. Skaiciai didesni nei 275 turi buti raudoonas spalvas
let number= []
let biggerThan150=0
    for(let i=0;i<300;i++){
        let randomNumber=rand(0,300);
        if(randomNumber>150)biggerThan150++;

        if(randomNumber>275){
            //raudonas skaicius
            document.write(`<red>${randomNumber}</red> `);
        }
        else{
            //paprastas skaicius
            document.write(`<black>${randomNumber}</black> `);
        }
        
    }
console.log(`dideniu skaiciu nei 150 masyve yra:${biggerThan150}`)