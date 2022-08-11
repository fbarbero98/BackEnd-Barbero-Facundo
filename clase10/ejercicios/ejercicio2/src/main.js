const express = require('express');

const app = express();

const personas = [];


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('views', './views');
app.set('view engine', 'ejs');

//! Hasta aca toda la configuracion para poder trabajar con ejs y express.


app.get('/', (req, res) => {
    res.render('inicio', {personas}); // /renderiza la vista al archivo que se especifica inicio, para que el contenido se vea como contenido html
});

app.post('/personas', (req, res) => {
    personas.push(req.body); //Esto lo que ahce es que le pushea al array de personas lo que pases en el form
    res.redirect('/'); //Se refreshea la página
});

app.listen(8080)