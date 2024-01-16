// const sum = require("./math-module").sum; //импортация модуля
// const atimti = require("./math-module").subtract; // не обязательно называть модуль как функцию, название может быть любым
// console.log(sum(4, 5));
// console.log(atimti(5, 4));

// //Gaunamas http  modulis
// const http = require("http");

// //sukuriamas  serverio kintamasis
// const server = http.createServer((req, res) => {
// if(req.url === "/"){
//     req.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
//     res.write("Tai yra mano atsakymas")
//     res.end();
// }
// if(req.url === "/check"){
//     res.write("Tai yra mano atsakymas")
//     res.end();
// }
// });
// //serveris paleidziamas ant port'o 3000
// server.listen(3000);
// console.log("server is started on  port 3000");

const express = require("express");
const cors = require("cors");
const app = express();
let countOfVisitors =0;
const todos = [
  { author: "Jevgenija", todo: "1.Nueitii parduotuve" },
  { author: "Jevgenija", todo: "2.Nusipirkti pieno" },
  { author: "Jevgenija", todo: "3.Gerti pieno" },
];
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/test", (req, res) => {
  res.send("Serveris veikia");
});
app.get("/count", (req, res) => {
  countOfVisitors++;
  res.send("Stai kiek kartu aplankytas sis serveris:" + countOfVisitors);
});

app.get("/get-todos",(req, res) => {
    res.send(JSON.stringify(todos));
})

app.listen(3000);
console.log("serveris  pasileido portu 3000");
