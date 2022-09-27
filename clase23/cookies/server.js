//!PASO 1 IMPORTAR

const express = require('express'); //Importamos express
const cookieParser = require('cookie-parser'); //Importamos cookie parser
const { signedCookies } = require('cookie-parser');

//! PASO 2 SETEAR 
const app = express() //Seteamos express

//app.use(cookieParser()) //Seteamos de manera global como middleware, la dependencia de cookie parser
app.use(cookieParser('secret'))


//!PASO 3 CREAR UNA COOKIE CON Y SIN TIEMPO DE EXPIRACION:

//? COOKIES SIN EXPIRACION:

//vamos a usar el navegador, asi que usamos rutas de tipo get:

app.get('/set-cookie', (req, res) => {
    res.cookie('cookieap', 'seteoCookieNode') //Primer parametro: la clave/indicador; segundo param: valor

    res.send('Set cookie ok');
});


//Ver todas las cookies que tenemos
app.get('/cookies', (req, res) => {
    res.json({cookies: req.cookies, cookiesSigned: req.signedCookies}); //Devlvemos un json que tiene las cookies
})

//? COOKIES CON EXPIRACION:
app.get('/set-cookie-expiration', (req, res) => {
    res.cookie('cookieapex', 'seteoCookieNodeEx', { maxAge: 10000 } ) //Primer parametro: la clave/indicador; segundo param: valor; tercer param: objeto con un maxAge con un int en ms

    res.send('Set cookie ex ok');
});


//? BORRAR COOKIES

app.get('/clear', (req, res) => {
    for(const cookieName of Object.keys(req.cookies)) { //Esto pasa por todas las cookies que tenemos y elimina cada una iterando el for
        res.clearCookie(cookieName)
    }
    res.send('clear cookie ok')
})




app.get('/set-cookie-signed', (req, res) => {
    res.cookie('cookieapsigned2', 'seteoCookieNodeSigned', { signed: true } ) //Primer parametro: la clave/indicador; segundo param: valor; tercer param: objeto con un maxAge con un int en ms

    res.send('cookie signed ok')
})
app.listen(8080);