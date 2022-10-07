//! PASO 1 HACER LOS IMPORTS

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');


//! PASO 2:

const usuarios = [];
const app = express();

//! PASO 3: CONFIGURACION DE LA SESSION
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));


//!PASO 4 CONFIGURACION DE HBS:
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

//!PASO 5 CONFIG DE EXPRESS:

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//!PASO 6 TRABAJAR EN LA RUTA:

//? FORMULARIO DE R4EGISTRO:

//para mostrar el form
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html'); //cuando entramos del navegador a esta ruta vemos este archivo de la carpeta views
});

//para mandar los datos del form
app.post('/register', (req, res) => {
    const { nombre, password, direccion } = req.body; //Desestructuracion del body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre) //Buscamos con el find el usuario que coincida el nombre con el nombre del destructuring

    if (usuario) {
        return res.render('register-error')
    }

    usuarios.push({ nombre, password, direccion })
    res.redirect('/login')
});


//? FORMULARIO DE LOGIN:

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { nombre, password } = req.body;
    const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password);

    if (!usuario) {
        return res.render('login-error')
    }
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/datos');

});

app.get('/datos', (req, res) => {
    if (req.session.nombre) {
        req.session.contador++
        res.render('datos', {
            datos: usuarios.find(usuario => usuario.nombre == req.session.nombre),
            contador: req.session.contador
        })
    }
    else {
        res.redirect('/login')
    }
})


//? LOGOUT

app.get('/logout', (req,res) => {
    req.session.destroy(err => {
        res.redirect('/login')
    })
})

//? BASE:

app.get('/', (req, res) => {
    if(req.session.nombre){
        res.redirect('/datos')
    }
    else{
    res.redirect('/login')
    }
})


//? PUERTO:

app.listen(8080);
