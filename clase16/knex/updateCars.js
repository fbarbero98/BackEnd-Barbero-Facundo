//! Aqui se va a trabajar la logica para modificar el cars

import {
    options
} from "./options/mysqlDB.js"; //Importante hacer el .js para evitar errores

import knex from "knex"; //Importamos knex


//! PRIMER PASO: ESTABLECER LA CONEXION A LA BASE DE DATOS:

const knexConnection = knex(options); //Recibe como parametro la configuracion, para la conexion a la base de datos.

//! PASO 2: selecciono la tabla, le pongo la condicion que quiero actualizar, y hago el update:

knexConnection.from('cars').where('id', 1)

    .update({
        price: 111
    })

    .then(() => console.log('registro actualizado'))

    .catch((err) => {
        console.log(err);
        throw err
    })

    .finally(() => { //Finally es para cancelar la conexion con la DB para que no quede abierta
        knexConnection.destroy() //Este metodo cancela la conexion
    })