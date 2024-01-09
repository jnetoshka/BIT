const express = require("express");
const server = express();

server.get("/", (req, res) => {
  console.log("Buvo Kreiptasi i serveri");
  res.send("Labas Pasauli!");
});

server.listen(3000);
console.log("aplikacija pasileido, jos adresas: http://localhost:3000/");
