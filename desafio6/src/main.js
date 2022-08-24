const express = require('express')

const { Server: HttpServer } = require('http') //Importo el modulo necesario para que funcionen los sockets
const { Server: Socket } = require('socket.io') //importo la dependencia de socket

const ContenedorMemoria = require('../contenedores/ContenedorMemoria.js')
const ContenedorArchivo = require('../contenedores/ContenedorArchivo.js')

//--------------------------------------------
// instancio servidor, socket y api

const app = express();
const httpServer= new HttpServer(app);
const io = new Socket(httpServer);


//--------------------------------------------
// configuro el socket
const products = new ContenedorArchivo('./contenedores/productos.txt');

//! DEFINO UNA FUNCION PARA MOSTRAR LOS PRODUCTOS 

async function verProductos() {
    return await products.getAll();
};

//! DEFINO UN ARRAY PARA LOS MENSAJES

const mensajes = [
    {author:"Developer" , text: "Bienvenidx al sitio web"}
];

io.on('connection', async socket => {
    //!productos

    //!A penas se conecta el servidor: 
    console.log("Cliente conectado");
    //? a penas se conecta el cliente le muestra los productos
    socket.emit('productos', await verProductos());
    //Lo recibe el cliente en el socket.on linea 21

    //! Cuando el cliente manda un producto:

    socket.on("newProduct", async data =>{
        await products.saveProduct(data);
        io.sockets.emit('productos', await verProductos())
    })


    //mensajes
    //! Emmit a penas se conecta al servidor 
    socket.emit('mensajes', mensajes);
    //Lo recibe el cliente en el socket.on linea 62

    //!cuando el cliente manda un mensaje
    socket.on("newMessage", data => {
        mensajes.push(data);
        io.sockets.emit("mensajes", mensajes)
    })

});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')) //Usamos los archivos de la carpeta public


//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))