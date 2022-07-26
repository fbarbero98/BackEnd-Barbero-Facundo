//?A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
//? B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// ESto hice yo
/*
function generarNumeros() {
    for (let index = 0; index < 9999; index++) {
        const numero = Math.random(1,20);
        const mathInt = Math.round(numero);
        console.log(mathInt); 
    }
}
generarNumeros()
FALTO LA PARTE DEL OBJ, Y EL MATH RANDOM ESTABA MAL
*/

//Esto hizo el profe:

const obj = {};

for (let index = 0; index < 10000; index++) {
    let randomNumber = Math.ceil(Math.random() * 20) //Esto hace que sea de 1 a 20
    obj[randomNumber] ? obj[randomNumber] ++ : obj[randomNumber] = 1 //operador ternario, si en el objeto existe el numero, se le suma 1 a su valor, si no existe, crea el numero en el objeto y su valor es 1.
}
console.log(obj) //Esto afuera del for





