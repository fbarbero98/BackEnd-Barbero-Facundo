//! SEGUNDA PARTE: MANEJO DE ARCHIVOS EN JS DE MANERA SINCRONICA

const fs = require('fs'); //Asi es como se importa el modulo nativo de node.

//? readFileSync

const data = fs.readFileSync('./test.txt', 'utf8');  //Defino una constante data, que es igual al uso de la constante fs y el metodo que necesito para leer archivos, en este caso readFileSync.

//A este metodo hay que pasarle como parametro la ruta del archivo que quiero leer. 
//Tambien se le puede pasar como parametrola codificacion que se usa para la lectura del archivo (igual esta seteado la utf8 por defecto)

console.log(data);

//! PREGUNTAR LO DEL MANEJO DE ARCHIVOS CUANDO ESTOY EN OTRA CARPETA EN NODE

//? YO estaba en la carpeta backend, y cuando hacia el node no me tomaba bien la ruta.


//? writeFileSync:

fs.writeFileSync('./testWrite.txt', 'Esto es una prueba de de writeFileSync')

//WFS lo que hace es crear un archivo. En el primer parametro creas la ruta al archivo, en el segundo el contenido.
//Si se vuelve a ejecutar con contenido distinto, se sobreescribe

//? appendFileSync:

fs.appendFileSync('./testWrite.txt', '\n Esto es un texto con append');

//AFS lo que hace es agregar  el contenido que pases como segundo parametro al archivo que se pasa como primero.
// \n hace un salto de linea.
//Si lo seguis ejecutando, se sigue agregando contenido.

//? unlinkSync

fs.unlinkSync('./testWrite.txt');

//US lo que hace es eliminar el archivo que pasas como parametro


//! TRY Y CATCH

//? SI SE USA TRY Y CATCH ENTONCES ESTOS METODOS SON CON ASINCRONIA?

try {
    const pruebaTry = fs.readFileSync('./test.txt', 'utf-8'); //Como esta ruta no existe va a entrar el catch
    console.log(pruebaTry)
} catch (error) {
    console.log('entro el catch')
    console.log(error)
}
