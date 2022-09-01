//! Aqui se va a trabajar la logica para ver el cars por consola

import {
    options
} from "./options/mysqlDB.js"; //Importante hacer el .js para evitar errores

import knex from "knex"; //Importamos knex


//! PRIMER PASO: ESTABLECER LA CONEXION A LA BASE DE DATOS:

const knexConnection = knex(options); //Recibe como parametro la configuracion, para la conexion a la base de datos.


//! PASO2: hacemos como si tuvieramos un select en la workbench
//? De la tabla cars, elegimos todo, y por cada uno de los valores hacemos un clg


knexConnection.from('cars').select('*') //esto es para seleccionar de la tabla cars, todo lo que haya, como hacer un select * en el workbench
    .then((rows) => { //el select retorna un arreglo, entonces hacemos un for
        console.log('SIN FILTRO, TODOS LOS OBJETOS')
        for (let row of rows) {
            console.log(`${row['id']} , ${row['name']} , ${row['price']}`)
        }; //Es lo mismo hacer row.id y etc
    });


//!SELECT PERO CON FILTROS:


//? FILTRO WHERE: 

knexConnection.from('cars').select('*') //esto es para seleccionar de la tabla cars, todo lo que haya, como hacer un select * en el workbench

    .where('price', '>', '300') //Sumamos la condicion where. se pasan los params separados por ,

    .then((rows) => { //el select retorna un arreglo, entonces hacemos un for
        console.log('CON FILTRO WHERE')
        for (let row of rows) {
            console.log(`${row['id']} , ${row['name']} , ${row['price']}`)
        }; //Es lo mismo hacer row.id y etc
    });


//? ORDER BY: 
knexConnection.from('cars').select('*') //esto es para seleccionar de la tabla cars, todo lo que haya, como hacer un select * en el workbench

    .where('price', '>', '300') //Sumamos la condicion where. se pasan los params separados por ,

    .orderBy('price', 'desc')

    .then((rows) => { //el select retorna un arreglo, entonces hacemos un for
        console.log('CON FILTRO WHERE Y ORDERBY')
        for (let row of rows) {
            console.log(`${row['id']} , ${row['name']} , ${row['price']}`)
        }; //Es lo mismo hacer row.id y etc
    })

    .catch((err) => {
        console.log(err);
        throw err
    })

    .finally(() => { //Finally es para cancelar la conexion con la DB para que no quede abierta
        knexConnection.destroy() //Este metodo cancela la conexion
    })