function sum(a, b) {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
};
// module.exports = sum; // экспорт функции без круглых скобок
module.exports = { sum: sum, subtract: subtract }; //  эспорт объекта
