//! SEGUNDA PARTE: MANEJO DE ARCHIVOS EN JS DE MANERA SINCRONICA

const fs = require('fs'); //Asi es como se importa el modulo nativo de node.

//? readFileSync

const data = fs.readFileSync('./test.txt', 'utf8');  //Defino una constante data, que es igual al uso de la constante fs y el metodo que necesito para leer archivos, en este caso readFileSync.

//A este metodo hay que pasarle como parametro la ruta del archivo que quiero leer. 
//Tambien se le puede pasar como parametrola codificacion que se usa para la lectura del archivo (igual esta seteado la utf8 por defecto)

console.log(data);

//! PREGUNTAR LO DEL MANEJO DE ARCHIVOS CUANDO ESTOY EN OTRA CARPETA EN NODE

//? YO estaba en la carpeta backend, y cuando hacia el node no me tomaba bien la ruta.


//? writeFileSync

fs.writeFileSync('./testWrite.txt', 'Esto es una prueba de de writeFileSync')

//WFS lo que hace es crear un archivo. En el primer parametro creas la ruta al archivo, en el segundo el contenido.
//Si se vuelve a ejecutar con contenido distinto, se sobreescribe