const express = require('express');
const { Router } = express; //Agarramos la dependencia de Router

const app = express();
const router = new Router(); //Tengo un obj llamado router, para ya no tener que hacer los app.get/ post/ put etx

//Se pueden tener mas de una const asignada a un new Router()

router.get('/recurso', (req, res) => {
   res.send('get ok');
});

router.post('/recurso', (req, res) => {
   res.send('post ok');
});

app.use('/api', router); //cargamos los router en la aplicacion, /api es una ruta padre, y despues se usan los recursos que mandamos por router

app.listen(8080); //Levantamos el server en el 8080.
//---------------

//! EJERCICIO 1:

const routerMascotas = new Router(); //asignamos la ruta nueva;

routerMascotas.use(express.json()); //Lo configutamos para que soporte las peticiones tipo JSON, (SIEMPRE HAY QUE HACERLO);

const mascotas = [];
routerMascotas.get('/', (req,res) => {
    res.json(mascotas);
});

routerMascotas.post('/', (req, res) => {
    mascotas.push(req.body); //Aca lo que mandamos como body es un json en el post. 
    res.json(req.body);

    //Preguntar por que se ponia res.json
 });


 //? PERSONAS:

 const routerPersonas = new Router(); //asignamos la ruta nueva;

routerPersonas.use(express.json()); //Lo configutamos para que soporte las peticiones tipo JSON, (SIEMPRE HAY QUE HACERLO);

const personas = [];
routerPersonas.get('/', (req,res) => {
    res.json(personas);
});

routerPersonas.post('/', (req, res) => {
    personas.push(req.body)
    res.json(req.body);
 });


 //---------------------
 //Cargo los ruters:

 app.use('/mascotas', routerMascotas);
 app.use('/personas', routerPersonas);

//Server:

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});

server.on('error', error => console.log(`error en el servidor ${error}`))

