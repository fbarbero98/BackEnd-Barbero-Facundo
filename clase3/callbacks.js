//! Callbacks

//Recibir funciones por parametro:

const ejecutar = unaFuncion => unaFuncion();

const saludo = () => console.log('saludos')


ejecutar(saludo)


// forma mas optima 

ejecutar(() => console.log('saludos2'))


// pasar funciones anonimas como parametros

const ejecutar2 = (unaFuncion2, param) => unaFuncion2(param)

const salu2 = nombre => console.log(`el segundo parametro es : ${nombre}`)

ejecutar2(salu2, "facundo");

//el primer parametro es la funcion y el segundo de la primera es el parametro de la 2da

//? EJEMPLO EN CLASE:

function escribirYLoguear(texto, callbackParaLoguear) {
    //Simulacion de escribir un archivo
    console.log(texto)

    //Cuando finalice, ejecutamos el callback
    callbackParaLoguear("Archivo procesado con exito")
}

escribirYLoguear("Hola, estoy usando callbacks", (mensajeParaLoguear) => {
    const fecha = new Date(). toLocaleDateString();
    console.log(`${fecha} : ${mensajeParaLoguear}`)
})

