//! PRIMER PASO: IMPORTS
const express = require('express');
const app = express();
const session = require('express-session')


//! CON FILESTORE LA CONFIG ES DISTINTA:

//1RO IMPORTAMOS FILESTORE:

const filestore= require('session-file-store')(session) //importamos la dependencia e inicialisamos la sesion de express


//! PASO 2 CONFIGUIRACION A MANERA DE MIDDLEWARE PARA TRABAJAR CON SESIONES
app.use(session({ 
    store: new filestore({ //Este párametro es extra, sirve para decir donde voy a persistir los datos(si no especificamos es en memoria), pasamos por param el archivo donde se guardan las sesiones, el timepo
        path: './sesiones', //es donde se guardan los archivos
        ttl: 300, //Es el tiempo de duracion del tiempo en sesion
        retries: 0 //Si hay un error vuelve a intentar (lo normal es meter 3 retries por las dudas)
    }), 
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


//! PASO 3 RUTAS:

app.get('/', (req,res) => {
    res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req,res) => {
    res.send({ contador: ++contador })
}) //LA PRIMERA VEZ QUE ENTREMOS A LA RUTA, EL CONTADOR ARRANCA EN 0 Y SE CREA

app.get('/con-session', (req,res) => {
    if(req.session.contador) {
        req.session.contador++ //SI VOLVEMOS A ENTRAR, EL CONTADOR AUMENTA, ESTA GUARDADO EN LA SESSION EL CONTADOR
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
})

app.get('/logout', (req,res) => {
    req.session.destroy( err => {
        if(!err) res.send('Logout ok!')
        else res.send({status: 'Logout ERROR', body: err})
    })
})


app.listen(8080)