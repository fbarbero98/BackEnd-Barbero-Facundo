import * as operaciones from './lib/operaciones'; //importamos * = todo del archivo operaciones.


const num1: number = 10 , num2: number = 4;

console.log(`La suma de ${num1} y ${num2} es ${operaciones.sumar(num1,num2)}`);
console.log(`La resta de ${num1} y ${num2} es ${operaciones.restar(num1,num2)}`);
console.log(`La multi de ${num1} y ${num2} es ${operaciones.multiplicar(num1,num2)}`);
console.log(`La division de ${num1} y ${num2} es ${operaciones.dividir(num1,num2)}`);