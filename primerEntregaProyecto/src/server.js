//! PASO 1: Hacer el require de express y llamarlo con app:
const { response } = require("express");
const express = require("express");
const { Router } = express;

//! PASO 2: INSTANCIAR EL SERVIDOR Y PERSISTENCIA
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //Esto es para usar el html

//? HACEMOS TAMBIEN LOS ROUTERS: carrito y productos

const routerProductos = new Router();
routerProductos.use(express.json()); //Para poder trabajar con objetos
routerProductos.use(express.urlencoded({ extended: true })); //Esto es para usar e interactuar con el html

app.use("/api/productos", routerProductos); //Para que se ponga el router casi automatico

const routerCarrito = new Router();
routerCarrito.use(express.json()); //Para poder trabajar con objetos
routerCarrito.use(express.urlencoded({ extended: true })); //Esto es para usar e interactuar con el html

app.use("/api/carrito", routerCarrito); //Para que se ponga el router casi automatico

//! PASO 3: HACER LOS PERMISOS DE ADMINISTRADOR:

const esAdmin = true;

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    };
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`;
    } else {
        error.descripcion = "no autorizado";
    }
    return error;
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin());
    } else {
        next();
    }
}

//! PASO 4: HACER EL IMPORT DE LA CLASS CONTAINER:

const Contenedor = require("./contenedores/Contenedor");

const productos = new Contenedor("dbProductos.json");
const carrito = new Contenedor("dbCarrito.json");

//!PASO 5: HACER LAS RUTAS PARA EL GET, POST, PUT Y DELETE.
//! PRODUCTOS:

// TODO GET

// TODO 1: Hacer una funcion para traer el productos.getAll() para luego implementarla en el get (para usuarios y administradores)

async function verProductos() {
    return await productos.getAll();
}

routerProductos.get("/", async (req, res) => {
    res.json(await verProductos());
});

// TODO 2: Hacer una funcion parfa traer el metodo getbyID para luego implementarla en el get (para usuarios y administradores)

async function productoId(id) {
    //Tenemos la funcion que llama al metodo getById de la class Contenedor
    return await productos.getbyId(id);
}

routerProductos.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (await productoId(id)) {
        //Si existe un producto que matchee el id que pasamos por param:
        res.json(await productoId(id)); //Llamamos a la funcion del getById pasando como parametro el id que tenemos del req.params
    } else {
        res.json({ error: "producto no encontrado" });
    }
});

// TODO POST: SOLO ADMINS:: Hacer una funcion para traer el metodo save() y luego implementarlo en el post, solo para admins (con el middleware de SoloAdmins):

async function postProducto(prod) {
    //Func que llama al metodo save de Contenedor
    return await productos.save(prod);
}

routerProductos.post("/", soloAdmins, async (req, res) => {
    const prod = req.body; //asignamos una const que tenga el contenido del body de la peticion push (se puede desestrucurar tambien pero solo con el nombre particular)
    prod.timestamp = Date.now();
    res.json(await postProducto(prod)); //Llamamos a la funcion que tiene el .save y  le pasamos por parametro el producto que queremos sumar. (la funcion le da un id de por si que es igual al array length)
});

// TODO PUT: SOLO ADMINS: Hacer una funcion para traer el metodo saveProduct y luego implementarlo en el put, solo para admins

async function actualizarProds(arr) {
    //Tenemos la funcion que llama al metodo getById de la class Contenedor
    return await productos.saveProduct(arr);
}

routerProductos.put("/:id", soloAdmins, async (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    const producto = await productoId(id); //asignamos una const que tenga el contenido del body de la peticion push (se puede desestrucurar tambien pero solo con el nombre particular)
    const prods = await verProductos(); //asignamos una const que tenga el contenido de getAll
    const index = prods.findIndex((prod) => {
        // index es igual a la posicion del producto que recibimos popor id en el array
        return prod.id == producto.id;
    });
    if (index >= 0) {
        prods[index] = newProduct; //El producto que este en la posicion de index se modifica por el producto nuevo
        newProduct.id = producto.id; //asignamos al producto nuevo el mismo id que el anterior
        newProduct.timestamp = Date.now();
        await actualizarProds(prods); //Usamos el metodo nuevo para sumar el array nuevo
        res.send(`El producto: ${JSON.stringify(producto)} \n\n
        Fue reemplazado por : ${JSON.stringify(newProduct)}`);
    } else {
        res.sendStatus(400);
    }
});

// TODO DELETE SOLO ADMINS: Hacer una funcion que traiga el metodo deleteById y luego implementarlo en el delete, solo para admins:

async function deleteProducto(id) {
    return await productos.deleteById(id);
}

routerProductos.delete("/:id", soloAdmins, async (req, res) => {
    const { id } = req.params; //desestructuramos los request params (:id)
    res.json(await deleteProducto(parseInt(id))); //Llamamos a la funcion del deleteById pasando como parametro el id que tenemos del req.params
    //Hacemos el parseInt porque estamos recibiendo :id en formato string. Con el parse int lo reconoce como numero
});

//! CARRITO:

// TODO POST : Hacemos una funcion que haga un save de un nuevo carrito y lo sumamos al array de carritos que tenemos

async function createNew(obj) {
    return await carrito.save(obj);
}

routerCarrito.post("/", async (req, res) => {
    try {
        const carrito = {}; //Creamos una const carrito que sea un obj vacio
        carrito.timestamp = Date.now(); //Le sumamos el atributo timestamp
        carrito.productos = []; //Le sumamos un atributo productos que es un nuevo array
        res.json(await createNew(carrito));
    } catch (error) {
        console.log(error);
    }
});

// TODO DELETE POR ID: Hacer una funcion que traiga el metodo deleteById y luego implementarlo en el delete:

async function deleteCarrito(id) {
    return await carrito.deleteById(id);
}

routerCarrito.delete("/:id", async (req, res) => {
    const { id } = req.params; //desestructuramos los request params (:id)
    res.json(await deleteCarrito(parseInt(id))); //Llamamos a la funcion del deleteById pasando como parametro el id que tenemos del req.params
    //Hacemos el parseInt porque estamos recibiendo :id en formato string. Con el parse int lo reconoce como numero
});

// TODO GET POR ID: Hacer una funcion que traiga el metodo getbyId y implementarla, buscando el carrito por el id, luego mostrar ese carrito en particular en el res.json

async function carritoId(id) {
    return await carrito.getbyId(id);
}

routerCarrito.get("/:id/productos", async (req, res) => {
    const id = req.params.id; //desestrucutramos solo el id de los params
    const carritoElegido = await carritoId(id); //Asignamos el getbyId a una constante en particular

    res.json(carritoElegido); // mostramos el carrito elegido
});

// TODO POST POR ID: Usar la funcion de productoID para traer el producto, y la funcion carritoID para traer el carrito, y sumar el producto al carrito seleccionado

routerCarrito.post("/:id/productos", async (req, res) => {
    const { id } = req.params;
    const prodId = req.body.id;

    const producto = await productoId(prodId); //Buscamos en productos.json, el producto que coincida con el id del producto que estamos pasando en el body
    const carritoElegido = await carritoId(id); //buscamos el carrito cuyo id coincida con el id que pasamos en params

    carritoElegido.productos.push(producto); //A ese carrito, le sumamos el producto que buscamos antes

    const carts = await carrito.getAll(); //hacemos una const carts que tenga TODOS los carritos
    const index = carts.findIndex((carrito) => {
        // index es igual a la posicion del carrito que recibimos por id en el array --> entre todos los carritos, busca la posicion del carrito que coincida con el id del carrito que recibimos por params
        return carrito.id == carritoElegido.id;
    });
    if (index >= 0) {
        carts[index] = carritoElegido; //El carrito que este en la posicion de index se modifica por el carrito nuevo (con el push de productos hecho)

        await carrito.saveProduct(carts); //este metodo lo que hace es reemplaza TODOS los carritos, pero el unico que cambio fue el elegido 
        res.json(carts);
    } else {
        res.sendStatus(400);
    }
});



// TODO: DELETE: 






routerCarrito.get('/', async(req , res) => {
    const carts = await carrito.getAll();
    res.json(carts)
});

routerCarrito.get('/:id', async(req, res) => {
    const { id } = req.params;
    const cart = carrito.getbyId(id);

})

//! PASO : INSTANCIAR EL SERVIDOR:

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
