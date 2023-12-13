function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//priesk kiekvena filtracija is naujo susigeneruoti masyva
//a. pasalinti kurie yra lyginiai
let arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}
console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (arr[i] %2===0){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//b. pasalinti kurie yra nelyginis
arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}
console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (arr[i] %2!==0){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//c. dalinas is 3
arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}
console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (arr[i] %3===0){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//d. Yra ligus savo indeksas
arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}

console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (i===arr[i]){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//e. Yra mazesni nei 5 arba didesni nei 8
arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}

console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (arr[i]<5||arr[i]>8){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//f. nuo 2 iki 5;
arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}

console.log(arr)
for  (let i = 0; i < arr.length;i++){
    if (arr[i] >=2 && arr[i]<=5){
        arr.splice(i,1);
        i--;
    }
}console.log(arr)

//g.kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)

arr=[];
for(let i = 0; i < 20; i++){
    arr.push(rand(0,10));

}

console.log(arr);
for  (let i = 0; i < arr.length;i++){
    //1.patikriname ar elementas yra paskutinis
    //jei taip  kaip sekenti elementa imame pirmaji masyvo elementa arr[0]
    //jej ne kaip sekenti elementa imam sekanti arr[i+1]
    let nextElement;
    if(arr.length - 1 ===i){
        nextElement = arr[0]
    }
    else{
        nextElement= arr[i+1];
    }
    if (arr[i] + nextElement >=10){
        arr.splice(i,1);
        i--;
    }
       
    }console.log(arr)

    //h. kurių suma su sekančiu elementu masyve yra lyginė
    arr=[];
    for(let i = 0; i < 20; i++){
        arr.push(rand(0,10));
    
    }
    
    console.log(arr);
    for  (let i = 0; i < arr.length;i++){
        //1.patikriname ar elementas yra paskutinis
        //jei taip  kaip sekenti elementa imame pirmaji masyvo elementa arr[0]
        //jej ne kaip sekenti elementa imam sekanti arr[i+1]
        let nextElement;
        if(arr.length - 1 ===i){
            nextElement = arr[0]
        }
        else{
            nextElement= arr[i+1];
        }
        if ((arr[i] + nextElement)%2===0){
            arr.splice(i,1);
            i--;
        }
           
        }console.log(arr)
