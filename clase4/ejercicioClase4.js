//! Esto hice, esta mal

/*
function mostrarLetras(params) {
    const fin = () => console.log('termine')
    for (let index = 0; index < params.length; index++) {
        setInterval(() => {
            console.log([index])
        }, 0500)
    }
    fin()
}

mostrarLetras('Hola')
*/


//?EJEMPLO BIEN

const mostrarLetras = (str) => { //Funcion mostrar letras recibe como param un string
    let count = 0; //inicia un contador en 0
    const interval = setInterval(() => { //Se define un interval
        console.log(str.charAt(count)); //Esto muestra el caracter en la posicion que recibe como parametro (0, 1, 2, 3) 
        // charAt muestra el caracter de la posicion que recibe como param, el clg solo lo ejecuta.
        //? Tambien podria ser asi : console.log(str.[count])
        
        if(count === str.length){ //Si el count es == al largo dl string, se hace el clear interval y se ejectua fin()
            clearInterval(interval);
            fin()
        }
        count++ ; //Cada vez que se ejecuta el intervalo, sube el contador, xq esta dentro del setInterval
    }, 1000); //Se ejecuta el intervalo 1 vez x segundo
};

const fin = () => console.log("terminado");

setTimeout(mostrarLetras, 0, "hola");
setTimeout(mostrarLetras, 0250, "hola");
setTimeout(mostrarLetras, 0500, "hola");
