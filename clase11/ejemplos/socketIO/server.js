const express = require('express');
const { Server: HttpServer } = require('http'); //Importamos el modulo http que es necesario para que los sockets funcionen 
const { Server: IOServer } = require('socket.io'); // Importamos la dependencia de socket


const app = express();
const httpServer = new HttpServer(app); //express sirve para implementar en el server http archivos estaticos
const io = new IOServer(httpServer); //Aca pasamos como parametro el servidor http.


// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('public')); //Pasamos como middleware que los archivos estaticos van en la carpeta public.

io.on('connection', socket => { //esto es una funcion flecha de socket, con esta funcion se logra la coneccion, 

      // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Nuevo cliente conectado');   // Se imprimirá solo la primera vez que se ha abierto la conexión    


    //?: PARA ENVIAR INFORMACION DEL SERVER AL CLIENTE
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor'); //Emit nos permite enviar un mensaje del server al cliente.
    //el primer parametro es el nombre del evento y el segundo es la info

    //?: PARA ENVIAR INFORMACION A LOS CLIENTES YA CONECTADOS:

    io.sockets.emit('mensajes', 'test'); //manda mensajes a varios clientes
});


//? TAMBIEN PUEDE EL SERVIDOR RECIBIR INFORMACION DEL CLIENTE:

socket.on('notificacion', data => { //Notificacion es el nombre que se le ponia al mensaje
    console.log(data);
})

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () =>{
    console.log('server running');
}); //Esto es para levantar el server en el puerto 8080

connectedServer.on('error', error => console.log(`error en el server ${error}`)
); //Para levantar los errores en caso de que haya alguno
