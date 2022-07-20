const operacion = (a , b, op) => op(a,b);
//a y b son numeros y op es el tipo de operacion que quiero

const suma = (a,b) => (a + b);
const resta = (a,b) => (a - b);
const multi = (a,b) => (a * b);
const divi = (a,b) => (a / b);

console.log(operacion(4, 6, suma))
console.log(operacion(4, 6, resta))
console.log(operacion(4, 6, multi))
console.log(operacion(4, 6, divi))