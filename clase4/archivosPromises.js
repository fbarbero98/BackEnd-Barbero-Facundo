//! ULTIMA PARTE DE LA CLASE:  MANEJO DE ARCHIVOS CON PROMESAS:

const fs = require('fs'); //Esto se importa igual

//? 2 diferencias con lo anterior

//Primero la funcion se define con async await
//Segundo al metodo hay que sumarle "promises" despues del fs.
//!Se usan promesas para no usar mas callbacks, la manera correcta de trabajar es con las promises..


async function readFile() {
    try {
        const contenido = await fs.promises.readFile('./test.txt', 'utf8');
        console.log(contenido);
        console.log('Entro el try');
    } catch (error) {
        console.log(error);
    }
}

readFile();


//? PARA TODOS LOS METODOS FUNCIONA IGUAL..
// para llamar al metodo es: fs.promises.metodo