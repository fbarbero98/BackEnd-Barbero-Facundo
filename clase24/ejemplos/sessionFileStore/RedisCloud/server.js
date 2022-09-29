//! PRIMER PASO: IMPORTS
const express = require('express');
const session = require('express-session')


//!REDIS:
 const redis = require('redis');
 const client = redis.createClient(15135, 'redis-15135.c92.us-east-1-3.ec2.cloud.redislabs.com'); //creo el cliente con el que me voy a conectar con la DB

 //aca va la contraseña 
client.auth('tsBKjraRhVNgH0t4jSd83iWbs4Jk4jxQ', (err) => {
    if (err) throw err;
});

const connectRedis = require('connect-redis')
const RedisStore = connectRedis(session)

const app = express();
//! PASO 2 CONFIGUIRACION A MANERA DE MIDDLEWARE PARA TRABAJAR CON SESIONES CON REDIS
app.use(session({ 
    store: new RedisStore({
        client: client,
        ttl: 3000
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