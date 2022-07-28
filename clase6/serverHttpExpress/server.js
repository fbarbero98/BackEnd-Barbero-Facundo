//! EXPRESS:
// NodeJS cuenta con módulos nativos para manejar el envío y recepción de peticiones de tipo http/s, sin embargo, usaremos para nuestra aplicación un módulo externo llamado express

//Express es un framework web minimalista, con posibilidad de ser utilizado tanto para aplicaciones/páginas web como para aplicaciones de servicios. Como todo módulo, lo primero que debemos realizar es agregarlo como dependencia en nuestro proyecto.

//? 1 USO DEL MODULO:

//Para poder usar el módulo, lo primero que debemos hacer es importarlo al comienzo de nuestro archivo. El objeto obtenido luego del import es una función. Al ejecutarla, nos devolverá la aplicación servidor que configuraremos posteriormente con los detalles de nuestra aplicación. 

const express = require('express');

const app = express();

//? 4 El punto de entrda (endpoint) o servicio es basicamente de donde se consigue la informacion.

// Cuando queremos obtener algún tipo de información del servidor utilizamos peticiones de tipo GET. Este tipo de peticiones son las más comunes. Entonces, configuraremos en nuestro servidor un manejador para estas peticiones. Como respuesta, devolveremos el resultado deseado en forma de objeto.

app.get('/hola-mundo', (peticion, respuesta) => {
    respuesta.send({mensaje : 'hola mundo'})
});

//? 2 Conexión del servidor

//Debemos indicar en qué puerto de nuestra computadora queremos que nuestra aplicación comience a escuchar peticiones. Este puerto será de uso exclusivo de nuestro servidor, y no podrá ser compartido con otras aplicaciones.

const server = app.listen(8080, () => {
    console.log((`Server http escuchando en el port ${server.address().port}`))
});


//? 3Manejo de errores de conexión

//Para indicar una situación de error en la puesta en marcha del servidor, podemos configurar el evento ‘error’ a través del método ‘on’ sobre la salida de ‘listen’

server.on('error', error => console.log(`error en servidor ${error}`));

//El argumento error del callback configurado para el evento error, nos da la descripción del error ocurrido.