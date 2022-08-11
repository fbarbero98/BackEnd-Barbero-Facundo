//! Primero importamos express para trabajar con pug:

const express = require('express');
const app = express();

//!Configuramos para trabajar con pug:

app.set('views', '../views'); //Seteamos las vistas, osea que las vistas van a estar dentro del directorio ./views
app.set('view engine', 'pug'); //seteamos que la engine para las views va a ser pug

app.get('/datos', (req, res) =>{
    params = req.query, //con esto agarramos los query params que nos pase el usuario en la ruta
    res.render('nivel.pug', params); //renderiza la vista al archivo que se especifica (nivel), para que el contenido se vea como contenido html
});

app.listen(8080);