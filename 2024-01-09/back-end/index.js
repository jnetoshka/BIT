const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const users = [];

server.get("/user/:id", (req, res) => {
  console.log("Method:" + req.method);
  console.log("URL:" + req.originalUrl);
  console.log("Body:" + req.body);
  console.log("Parameters:" + req.params.id);
  console.log("Query:" + JSON.stringify(req.query)); // запрос
  console.log("Buvo kreiptasi i serveri ");
  // res.send("labas Pasauli"); // atsakymas klientui
});

server.post("/register", (req, res) => {
  // console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  users.push({
    id: users.length + 1,
    username: username,
    email: email,
    password: password,
  });
  res.send("Atsakymas is serverio");
});

server.get("/users", (req, res) => {
  res.send(users);
});
server.get("/users/:id", (req, res) => {
  //jei yra gaunami duomenys, juos reiketu validuoti, если данные получены их нужно проверить
  if (isNaN(+req.params.id)) {
    res.send("ID privalo buti skaicius");
  }
  const selectedUser = users.find((user) => user.id === +req.params.id);
  if (!selectedUser) {
    res.send("Tokio vartotojo nera");
  } else {
    res.send(selectedUser);
  }
});
server.post("/prisijungimas",(req, res) => {
  //1. Validuojame,ar req.body turi tokius laukus  loginName,password
  //2. Patikrinti ar vartuotojas su tokiu userName egzistuoja:
          //a. jej ne ,tada siusti "Vartuojas  neegzistuoja"
          //b. Toliau daromas tikrinima
  //3. Ar slaptazodis atitinka
  // jej atitinka -   tada siunciame astakyma is serverio:
  //"Sekmingai prisijungete prie sistemos"

})
server.listen(3000, () => {
  console.log("Aplikacija pasileido , jos adresas: http://localhost:3000/");
});
