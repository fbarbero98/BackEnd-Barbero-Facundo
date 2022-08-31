const express = require('express');
const app = express();

app.listen(8080);

// Dentro de la carpeta static files vamos a hacer una carpeta para que el cliente pueda meter sus archivos,
//Generalmente se usa la carpeta public

app.use(express.static('public')); //Configuramos la aplicacion como un servidor de archivos estaticos.

//Se pueden usar mas de una carpeta. 
app.use(express.static('files'));
//Se buscan en orden las carpetas. Si no se encuentra en public, lo busca en files. 

//Tambien se pueden establecer paths virtuales. 

//! PAT VIRTUAL:

app.use('/static' , express.static('public'));
//Es mejor usar los paths virtuales para exponer la menor cantidad de informacion posible


//!PATH ABSOLUTO:
//No importa desde donde yo quiera correr la aplicacion, si lo hago con path absoluto, nunca nos va a tirar nngun problema.

app.use(express.static(__dirname + 'public'));

