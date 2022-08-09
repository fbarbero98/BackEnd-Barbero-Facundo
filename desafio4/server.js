
//! PASO 1: Hacer el require de express y llamarlo con app:
const { response } = require('express');
const express = require('express');
const { Router } = express;


const app = express();
app.use(express.static('public')); //Esto es para usar el html


//? HACEMOS TAMBIEN LOS ROUTERS: M
const routerProductos = new Router();
routerProductos.use(express.json()); //Para poder trabajar con objetos
routerProductos.use(express.urlencoded({ extended: true })); //Esto es para usar el html

app.use("/api", routerProductos); //Para que se ponga el router casi automatico

//! PASO 2: Indicar el puerto de conexion del server:
//Tambien sumamos un callback que haga un log especificando que puerto esta escuchando.
const server = app.listen(8080, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
});


//! PASO 3 : Si hay un error en el servidor, indicar el error:
//esto se hace con un evento on
server.on('error', error => console.log(`Error en el server : ${error}`));


//! PASO 4: Hacer un createServer con express, con la peticion get:

routerProductos.get('/', (request , response) => {
    response.send('<h1 style="color:blue;">Indicar en la ruta: /productos o /producto/:id </h1>');
})


//! PASO 5: HACER EL IMPORT DE LA CLASS CONTENEDOR:
// Tambien declarar la constante product, que va a hacer que podamos usar los metodos de la class contenedor 

const Contenedor = require('./Api/Contenedor.js'); //Esta es la forma en la que vamos a importar
const product = new Contenedor('./Api/productos.txt');


//! PASO 6: Declarar la funcion que va a hacer que veamos todos los productos y asignamos que la ruta /productos muestre ese return: 
async function verProductos() {
    return await product.getAll();
};
routerProductos.get('/productos', async (req , res) => {
    res.json(await verProductos());

    //? Otra manera de resolverlo: 
    /*const product = new Contenedor('./productos.txt');
    res.send(await product.getAll())*/
});


//! PASO 7: Declaro la funcion que hace que devuelva el producto que pasamos por id:

async function productoId(id) { //Tenemos la funcion que llama al metodo getById de la class Contenedor
    return await product.getbyId(id);
};

routerProductos.get('/productos/:id' , async (req, res) =>{
    const { id } = req.params ; //desestructuramos los request params (:id)
    if( await productoId(id)) {
        res.json(await productoId(id)); //Llamamos a la funcion del getById pasando como parametro el id que tenemos del req.params
        console.log(await productoId(id)); //imprime por consola
    } else {
        res.json({error : "producto no encontrado"})
    }
})


//! PASO 8: ARMAMOS TODO PARA EL POST:

async function postProducto(prod) { //Func que llama al metodo save de Contenedor
    return await product.save(prod)
}

routerProductos.post('/productos', async (req , res) =>{
    const producto =  req.body; //asignamos una const que tenga el contenido del body de la peticion push (se puede desestrucurar tambien pero solo con el nombre particular)
    res.json(await postProducto(producto)); //Llamamos a la funcion que tiene el .save y  le pasamos por parametro el producto que queremos sumar. (la funcion le da un id de por si que es igual al array length)
});


//! PASO 10: ARMAMOS TODO PARA EL DELETE:

async function deleteProducto(id) {
    return await product.deleteById(id);
}

routerProductos.delete('/productos/:id', async (req , res) =>{
    const { id } = req.params ; //desestructuramos los request params (:id)
    res.json(await deleteProducto(parseInt(id))); //Llamamos a la funcion del deleteById pasando como parametro el id que tenemos del req.params
    //Hacemos el parseInt porque estamos recibiendo :id en formato string. Con el parse int lo reconoce como numero
})


//! PASO 11: ARMAMOS TODO PARA EL PUT:

routerProductos.put('/productos/:id', async (req , res) =>{

    const { id } = req.params;
    const newProduct = req.body
    const producto = await productoId(id); //asignamos una const que tenga el contenido del body de la peticion push (se puede desestrucurar tambien pero solo con el nombre particular)
    const productos = await verProductos(); //asignamos una const que tenga el contenido de getAll
    const index = productos.findIndex(prod => { // index es igual a la posicion del producto que recibimos popor id en el array
        return prod.id == producto.id   
    });
    if(index >= 0){
        productos[index] = newProduct; //El producto que este en la posicion de index se modifica por el producto nuevo
        newProduct.id = producto.id; //asignamos al producto nuevo el mismo id que el anterior
        product.saveProduct(productos); //Usamos el metodo nuevo para sumar el array nuevo
        res.send(`El producto: ${JSON.stringify(producto)} \n\n
        Fue reemplazado por : ${JSON.stringify(newProduct)}`);
    }
    else{
        res.sendStatus(400);
    }
});