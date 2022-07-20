// En JS cada funcion puede ser un objeto.

function mostrar(params){
    console.log(params);
}

mostrar('hola mundo')

//Para llamar a la funcion mostrar solo la ejecutamos dentro de los ()

//Funcion flecha sintaxis:

const ejemploFlecha = (param1, param2) => {
    console.log(`El param1 es ${param1}, el param2 es ${param2}`)
} 
ejemploFlecha("'yo soy'", "'un capo'");


const flechaUnSoloParam = (param3) => {
    console.log(`el param3 es ${param3}`)
}

flechaUnSoloParam("'Parametro'");


// Funcion en una sola ejecucion:

const unaSolaEjecucion = (num1, num2) => {
    return num1 * num2
}


unaSolaEjecucion(3, 2)

