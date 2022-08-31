const variable1 = process.argv[2]; //sirven para recibir parametros por consola, y les vamos pasando argumentos dinamicos.
const variable2 = process.argv[3];



function multi(num1, num2) {
    return num1 * num2;
};

//console.log(multi(10,5));
console.log(multi(variable1, variable2));