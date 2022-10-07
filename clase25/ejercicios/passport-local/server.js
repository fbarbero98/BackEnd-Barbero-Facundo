//! PASO 1 IMPORTAR
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bCrypt = require('bcrypt')
// passport

const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');


//? IMPORT COMPONENTES DEL PROYECTO
// Cada uno de estos componentes arman en su conjunto el backend

const routes = require('./routes');
const config = require('./config');
const controllersDB = require('./controllersDB');
const User = require('./models');
const { Passport } = require('passport');
const { application } = require('express');


//! PASO 2:Definir a nivel de passport el proceso de Sign Up

passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
}, 
(req, username, password, done) => { //Estos params se llaman asi por passport, si o si username y password
    User.findOne({'username' : username}, (err, user) => { //Hacemos la busqueda del usuario con el nombre que se creo para ver si lo creamos o no;

        if(err){
            return done(err);
        }
        if(user){
            return done(null, false); //Esto es uin caso fallido porque ya existe este user
        }

        const newUser ={
            username: username,
            password: createHash(password),//Hay que encriptar, para eso usamos el createHash()
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };

        User.create(newUser, (err, userWithId) => { //Metodo de mongoose

            if(err) {
                return done(err);
            }
            return done(null, userWithId);
        })
    })

}
)) //Podemos pasar cualquier nombre como 1er param del use


function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null) //Con este metodo como 1er param pasamos la contraseña que queremos encriptar y como 2do param el metodo de encriptacion
}

//! LOGIN

passport.use('login', new LocalStrategy((
    username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if(err){
                return done(err)
            }

            if(!user){
                return done(null, false)
            }

            if(!isValidPassword(user, password)){
                return done(null, false) //Si la contraseña esta mal 
            }

            return done(null, user)
        })
    }))

    function isValidPassword(user, password) {
        return bCrypt.compareSync(password, user.password);
       }


passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done)
})
  


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');


app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));