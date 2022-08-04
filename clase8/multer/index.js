const express = require('express');
const multer = require('multer')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({ //definimos la configuracion, multer recibe como param un obj
    destination : (req, file , cb) => { //declaramos hacia donde almacenamos los archivos. "uploads"
        cb(null, 'uploads')
    },
    filename : (req , file, cb) => { //Es la configuracion con el nombre del archivo
        cb(null, `${Date.now()}-${file.originalname}`) //El archivo se va a llamar, fecha de subida + el nombre original
    }
});

const upload = multer({storage : storage});

// esta es la configuracion de multer, en los proyectos.


app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html'); //Esto retorna el index html de la ruta raiz (falta hacerlo)
})
