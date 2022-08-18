//!Configuracion de socket

const express = require('express');
const { Server: HttpServer } = require('http'); //Importamos el modulo http que es necesario para que los sockets funcionen (nativo de node)
const { Server: IOServer } = require('socket.io'); // Importamos la dependencia de socket


const app = express(); //llamamos a la funcion de express
const httpServer = new HttpServer(app); //sirve para hacer un llamado a la clase que voy a tratar de usar(la clase httpserver que tiene ciertos metodos)
const io = new IOServer(httpServer); //tenemos la clase del IO server y pasamos el server como parametro para poder usar los metodos.
//Para poder usar sockets, necesariamente necesitamos el modulo de http, por eso le pasamos httpServer como param


app.use(express.static('public')); //Porque usamos los archivos de la carpeta public (son archivos estaticos)

/*app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname}); //esto es po si no funciona el get de entrada, lo hacemos manual
}); */

//! Config del socket --

//? Definimos un mensaje por defecto:

const messages = [
    { author: "Facundo" , text: "Hola, que tal"},
    { author: "Juan" , text: "Todo bien"},
    { author: "Pedro" , text: "Que onda"}
];
//Cada vez que un cliente nuevo se conecte va a ver estos mensajes


//! Comunicacion del lado del servidor --

io.on('connection', socket => { //connection es una palabra reservada
    console.log('Nuevo cliente conectado');
    // vv Este evento carga el historial de msjs cuando un nuevo cliente se conecta vv
    socket.emit('messages', messages); //Le pasamos al evento messages, nuestro arreglo messages de arriba

    //!Recibir mensajes del lado del cliente
socket.on('new-message', data => {
    messages.push(data); //recibimos el new message que mandamos desde el cliente y el mensaje lo sumamos al array messages de arriba
    //vv este evento envia un nuevo mensaje a todos los clientes conectados en ese momento  vv
    io.sockets.emit('messages', messages) //
})

});



httpServer.listen(8080, () =>{ //Hay que levantarlo con el modulo de http, no con el de express(app)
    console.log('Server is running'); //Cuando corremos el server se muestra este mensaje por consola
})

