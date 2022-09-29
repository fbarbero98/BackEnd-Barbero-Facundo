//! PRIMER PASO: IMPORTS
const express = require('express');
const app = express();
const session = require('express-session')


//!REDIS:
 const redis = require('redis');
 const client = redis.createClient(); //creo el cliente con el que me voy a conectar con la DB
 const connectRedis = require('connect-redis');
 const RedisStore = connectRedis(session); //Conectamos redis con la session


//! PASO 2 CONFIGUIRACION A MANERA DE MIDDLEWARE PARA TRABAJAR CON SESIONES CON REDIS
app.use(session({ 
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 30
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