//error handlinimas
// const skaicius = 5;

// try {
//   skaicius++;
// } catch (error) {
//   console.log(error);
// }

// console.log("tesiamas darbas...");

//pazadas

// new Promise((resolve, reject) => {});
// fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
//   .then((response) => response.json())
//   .then((response) => console.log(response));
//   .catch((error) => console.log(error));

// const pazadas = new Promise((resolve, reject)=>{
//     let isValidUrl = false;
//     console.log("prasidejp usklasa i serveri");
//     if (isValidUrl)
//     setTimeout(()=>{
//         resolve("zinute is serverio");
//     },1000);
//     else reject(new Error("neteisingai nurodytas url"))
//     console.log("Pasibaige uzklausa i serverio");
// }).then((atsakymas)=>console.log(atsakymas))
// .catch((klaida)=>console.log(klaida))

// console.log("tesiamas darbas...")
// console.log("tesiamas darbas...")
// console.log("tesiamas darbas...")

function callServerSync(){
    console.log("Uzklausa i serveri prasidejo")
    setTimeout(()=>{
        console.log("gauname atsakyma is serverio")
    },1000)
    console.log("uzklausa baigta");
}
callServerSync()
async function callServerSync(){
    console.log("Uzklausa i serveri prasidejo")
    await new Promise((resolve,reject)=>
    setTimeout(()=>{
        console.log("gauname atsakyma is serverio")
        resolve();
    },1000)
    );
    console.log("uzklausa baigta");
}
