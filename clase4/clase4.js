

//! PRIMERA PARTE : ASINCRONIA EN JS

let count = 0;

/*let interval = setInterval(() => {
    console.log('Putos todos')
}, 1000)*/
// Esto es un interval infinito

let interval = setInterval(() => {
    count += 1
    console.log('Putos todos');

    if (count === 5) {
        clearInterval(interval) //Esto lo que hace es cortar el interval
        console.log('Se termino el intervalo')
    }
}, 1000);
//Esto es un interval no infinito.


//El interval se lee asi = setInterval(funcion,1000)





//! SEGUNDA PARTE: MANEJO DE ARCHIVOS EN JS