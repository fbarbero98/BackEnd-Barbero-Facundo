//Es el punto de entrada para hacer nuestras configuraciones

const express = require('express');
//Para poder leer archivos vamos a tener que usar la dependencia fs de file system.
const { promises : fs } = require('fs');

const app = express();

app.engine('ntl', async(filePath, options, callback) => {
    try{
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#' , '' + options.title + '')
.replace('#message#', '' + options.message + '')

    return callback(null, rendered)}
    catch (error) {
        return callback(new Error(error))
    }
});//Pasamos como param el nombre de la extension que va a tener nuestras vistas
//options son los datos que recibimos como params
//filePath es el directorio donde estan almacenadas nuestras vistas


app.set('views', './views'); //especifica el directorio de vistas

app.set('view engine', 'ntl'); // registra el motor de plantillas


app.get('/', (req, res) => {
    const datos = {
        title: 'Custom template',
        message: 'Custom template message'
    };

    res.render('index', datos);
});

app.listen(8080)