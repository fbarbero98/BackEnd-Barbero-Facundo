//! Aqui se va a trabajar la logica del codigo de sql, primero hay que hacer el options

import {
    options
} from "./options/mysqlDB.js"; //Importante hacer el .js para evitar errores

import knex from "knex"; //Importamos knex


//! PRIMER PASO: ESTABLECER LA CONEXION A LA BASE DE DATOS:

const knexConnection = knex(options); //Recibe como parametro la configuracion, para la conexion a la base de datos.

//!Paso 2,hacemos las cosas para la insercion, creamos los valores 
//? creamos los elementos que queremos sumar al schema que ya creamos en createTable

const cars = [{
        name: "Audi",
        price: 123
    },
    {
        name: "VW",
        price: 456
    },
    {
        name: "Renault",
        price: 789
    },
    {
        name: "Mercedes",
        price: 1122
    }
];

//! PASO 3: nos conectamos con la tabla cars, y le hacemos un insert del array que creamos antes
knexConnection('cars').insert(cars) //Esto es todo asincrono

    .then(() => console.log('datos insertados')) // Esto es codigo asincrono, asi que se puede trabajar con promesas (then, catch) o con async await

    .catch((err) => {
        console.log(err);
        throw err
    })

    .finally(() => { //Finally es para cancelar la conexion con la DB para que no quede abierta
        knexConnection.destroy() //Este metodo cancela la conexion
    })