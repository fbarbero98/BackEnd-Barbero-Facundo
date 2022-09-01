//! Aqui se va a trabajar la logica del codigo de sql, primero hay que hacer el options

import {
    options
} from "./options/mysqlDB.js"; //Importante hacer el .js para evitar errores

import knex from "knex"; //Importamos knex


//! PRIMER PASO: ESTABLECER LA CONEXION A LA BASE DE DATOS:

const knexConnection = knex(options); //Recibe como parametro la configuracion, para la conexion a la base de datos.

//!Paso 2, crear una tabla :

//? accedemos a un schema (metodo que nos da knex para conectarnos con la db)
//? hay que tener primero creado el schema de options para crear cosas en el mismo 


knexConnection.schema.createTable('cars', //Recibe como param el nombre de la tabla, como 2do una arrow donde especificamos los atributos de la tabla (del parametro)
        table => {
            table.increments('id'); //Cada vez que sumas un elemento, el id sube, gracias al increments, eso es para que no se sobreescriban.  
            //Si ponemos .notNullable() al final del ('') podemos hacer que nunca sea null

            table.string('name');

            table.integer('price');

        })
    .then(() => console.log('tabla creada')) // Esto es codigo asincrono, asi que se puede trabajar con promesas (then, catch) o con async await

    .catch((err) => {
        console.log(err);
        throw err
    })

    .finally(() => { //Finally es para cancelar la conexion con la DB para que no quede abierta
        knexConnection.destroy() //Este metodo cancela la conexion
    })