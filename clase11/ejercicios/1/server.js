const express = require('express');
const { Server: HttpServer } = require('http'); //Importamos el modulo http que es necesario para que los sockets funcionen 
const { Server: IOServer } = require('socket.io'); // Importamos la dependencia de socket


const app = express();
const httpServer = new HttpServer(app); //express sirve para implementar en el server http archivos estaticos
const io = new IOServer(httpServer); //Aca pasamos como parametro el servidor http.

const mensajes = [];


app.use(express.static('public')); //Pasamos como middleware que los archivos estaticos van en la carpeta public.


//! ACA ES DONDE SE TRABAJA 

io.on('connection', socket => { //esto es una funcion flecha de socket, con esta funcion se logra la coneccion, 

    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Nuevo cliente conectado');   // Se imprimirá solo la primera vez que se ha abierto la conexión 


    socket.emit('mensajes', mensajes); //Envia el mensaje mensajes, sirve para que cuando un cliente se conecte, pueda ver los mensajes anteriores

    socket.on('mensaje', data => { //recibe el mensaje del event input y se lo asigna a la variable mensajes
        mensajes.push({socketid: socket.id, mensaje: data}); 
        io.sockets.emit('mensajes', mensajes) //se lo manda a todos los que esten conectados
    })

});



const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
    console.log('server running');
}); //Esto es para levantar el server en el puerto 8080

connectedServer.on('error', error => console.log(`error en el server ${error}`)
); //Para levantar los errores en caso de que haya alguno
