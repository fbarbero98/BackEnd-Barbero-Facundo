//! PASO 1 IMPORTAR:

const express = require('express');
const session = require('express-session');

const app = express();


//! PASO 2: CONFIGURACION
app.use(session({
    secret: 'secret',
    resave: false, //Nos obliga a que la sesion se guarde en el almacen de sesiones y que no se cree un nuevo registro
    saveUninitialized: false //En true obiga a que la sesion que no iniciamos se guarde en el cluster que guarda este tipo de sesiones, si no tenemos sesion no la guardamos
}))

//! PASO 3: RUTAS:

//? GUARDAR DATOS EN SESION: 

app.get('/session', (req, res) => { //Hacemos un algoritmo que guarde en la sesion cuantas veces se entra al sitio, seteamos el contador en 1 la primera vez y cada vez que entramos se aumenta
    if(req.session.contador){
        req.session.contador ++;
        res.send(`Ud visito el sitio ${req.session.contador} veces`)
    }else{
        req.session.contador = 1;
        res.send('Bienvenido')
    }
    
})

//? ELIMINAR DATOS DE SESION:

app.get('/logout', (req, res) => {
    req.session.destroy(err => { //el cb que mando es para ver si hay un error
        if(err){
            res.json({ status: 'Logout Error', body: err})
        } else{
            res.send('Logout Ok')
        }
    })
})




//? LOGIN DATOS DE SESSION:
function auth(req, res, next) { //hacemos autenticacion con middleware
    if(req.session?.user === 'facu' && req.session?.admin){ //si el usuario existe en la sesion y es facu y es admin, sigue
        return next()
    }
    res.status(401).send('error de autorizacion')
}

app.get('/private', auth, (req, res) => {
    res.send('Ya estas logueado')
})

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if(username !== 'facu' || password !== 'barbero'){
        return res.send('login failed')
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('Login success')
})

app.listen(8080)