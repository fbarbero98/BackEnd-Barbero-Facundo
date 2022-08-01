
//! PASO 1: Hacer el require de express y llamarlo con app:
const { response } = require('express');
const express = require('express');

const app = express();

//! PASO 2: Indicar el puerto de conexion del server:
//Tambien sumamos un callback que haga un log especificando que puerto esta escuchando.
const server = app.listen(8080, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
});


//! PASO 3 : Si hay un error en el servidor, indicar el error:
//esto se hace con un evento on
server.on('error', error => console.log(`Error en el server : ${error}`));


//! PASO 4: Hacer un createServer con express, con la peticion get:

app.get('/', (request , response) => {
    response.send('<h1 style="color:blue;">Indicar en la ruta: /productos o /productoRandom</h1>');
})


//! PASO 5: HACER EL IMPORT DE LA CLASS CONTENEDOR:
// Tambien declarar la constante product, que va a hacer que podamos usar los metodos de la class contenedor 

const Contenedor = require('./Contenedor.js'); //Esta es la forma en la que vamos a importar
const product = new Contenedor('./productos.txt');


//! PASO 6: Declarar la funcion que va a hacer que veamos todos los productos y asignamos que la ruta /productos muestre ese return: 
async function verProductos() {
    return await product.getAll();
};
app.get('/productos', async (req , res) => {
    res.send(await verProductos());

    //? Otra manera de resolverlo: 
    /*const product = new Contenedor('./productos.txt');
    res.send(await product.getAll())*/
});


//! PASO 7: Declarar la func que va a hacer que veamos un producto random y asignamos a la ruta /productoRandom que muestre ese return: 

async function productoRandom() {
    //Primero delcaramos una const que contenga el array de los productos: 
    const allProducts = await product.getAll(); 

    // Despues declaramos otra que contenga una funcion dentro que consiga un producto aleatorio, eso lo hacemos con los metodos math
const randomElement = allProducts[Math.floor(Math.random() * allProducts.length)];

//Luego retornamos el producto al azar
return randomElement ;
}

app.get('/productoRandom', async (req , res) => {
    res.send(await productoRandom());
});

