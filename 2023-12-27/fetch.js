fetch("https://dog.ceo/api/breeds/image/random")
.then((atsakymas)=>atsakymas.json()) // 1. atsakymas is serverio, atsakimas konvertuojamas i teksta
.then((atsakymas)=>{
    document.write(`<img src="${atsakymas.message}">`)
})// 2. iskoduotas atsakymas yra panaudojamas
//0.3sek