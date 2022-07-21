//! SEGUNDA PARTE: MANEJO DE ARCHIVOS EN JS

const fs = require('fs'); //Asi es como se importa el modulo nativo de node.

const data = fs.readFileSync('../test.txt', 'utf8');  //Defino una constante data, que es igual al uso de la constante fs y el metodo que necesito para leer archivos, en este caso readFileSync.

//A este metodo hay que pasarle como parametro la ruta del archivo que quiero leer. 
//Tambien se le puede pasar como parametrola codificacion que se usa para la lectura del archivo (igual esta seteado la utf8 por defecto)

console.log(data);