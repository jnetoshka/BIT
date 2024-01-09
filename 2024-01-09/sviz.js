// // const log = require("./logging"); 
// // const log = require("./logging").log;
// // const  isvestiBeDatos = require("./logging").logNoDate
// const {log,logNoDate} = require("./logging") //второй  варинат как обрщаться к двум импортам
// function kreipimasisIServeri() {
//   console.log("Siunciamas atsakymas atgal");
//   log("Iviko vartotojo krepimas i serveri");
//   logNoDate("Iviko vartotojo krepimas i serveri") // добавляем второй что бы отображалось
// }
// kreipimasisIServeri();



// function log(message) {
//     console.log(`${new Date()}: ${message}`);
//   }
  
//   function logNoDate(message) {
//     console.log(message);
//   }
//   // module.exports = log; - если экспортируем одну функцию
  
//   // что бы импотировать больше файлов  то делаем объект:
//   module.exports.log = log;
//   module.exports.log = logNoDate;
  