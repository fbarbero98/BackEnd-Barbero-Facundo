const express = require('express');
const app = express();

app.listen(8080);

// Dentro de la carpeta static files vamos a hacer una carpeta para que el cliente pueda meter sus archivos,
//Generalmente se usa la carpeta public

app.use(express.static('public')); //Configuramos la aplicacion como un servidor de archivos estaticos.


