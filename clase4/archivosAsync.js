//! TERCERA PARTE: MANEJO DE ARCHIVOS DE MANERA ASINCRONICA:

//Los metodos se llaman igual que el anterior pero sin poner Sync al final de c/u

//? La diferencia que hay es que se pasa tambien un callback por parametro tambien (que generalmente tambien recibe 2 parametros. Error y contenido)

const fs = require('fs');  //SIEMPRE HACER EL REQUIRE RECORDAR;


//? readFile:

fs.readFile('test.txt', 'utf8', (error, contenido) => {
    if (error){
        throw new Error('Salio error en el read');
    }
    console.log('Salio todo bien');
    console.log(contenido);
});

//? writeFile:

fs.writeFile('testWriteAsync.txt', 'Texto de prueba', error => {//Se puede pasar como param contenido pero daria undefined
    if (error){
        throw new Error('Salio error en el write');
    }
    console.log('Se creo el archivo'); 

});

//! AL SER ASINCRONICO NO SABEMOS CUANDO TERMINA CADA UNO DE LOS PROCESOS, ENTONCES PUEDE SER QUE SE EJECUTEN EN DISTINTO ORDEN QUE EL QUE LES ASIGNAMOS.


//? appendFile y unlink siguen la misma logica...

fs.unlink('./testWriteAsync.txt', error => {
    if (error){
        throw new Error('Salio error en el unlink');
    }
    console.log('Se eliminó el archivo');
});


//! PREGUNTAR ESTO, SI YA ESTA CREADA Y COMO SE ELIMINA:

//? mkdir:

/*fs.mkdir('./carpetaNueva', error => {
    if (error){
        throw new Error ('Error en mkdir')
    }
    console.log('directorio creado')
})*/


 /* fs.unlink('./carpetaNueva', error => {
    if (error){
        throw new Error ('Error en segundo unlink')
    }
    console.log('directorio eliminado')
})*/


//! HASTA ACA LA PREGUNTA
//? readdir:

fs.readdir('./', (error, nombres) => {
    if (error){
        throw new Error ('Error en readdir')
    }
    console.log(nombres)
});