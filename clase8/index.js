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
