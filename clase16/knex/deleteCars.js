//! Aqui se va a trabajar la logica para eliminar elementos del cars

import {
    options
} from "./options/mysqlDB.js"; //Importante hacer el .js para evitar errores

import knex from "knex"; //Importamos knex


//! PRIMER PASO: ESTABLECER LA CONEXION A LA BASE DE DATOS:

const knexConnection = knex(options); //Recibe como parametro la configuracion, para la conexion a la base de datos.

//! PASO 2: selecciono la tabla, le pongo la condicion que quiero actualizar, y hago el update:

knexConnection('cars').where('id', 4) //Cuando hacemos un delete ya no tenemos que especificar el from
    //pasamos como 1er param el nombre de la tabla, y en el segundo lo que queramos, donde el id es = 4

    .del() //Simplemente lo borra,lo que cambia entre el del y el delete es lo que retorna

    .then(() => console.log('registro eliminado'))

    .catch((err) => {
        console.log(err);
        throw err
    })

    .finally(() => { //Finally es para cancelar la conexion con la DB para que no quede abierta
        knexConnection.destroy() //Este metodo cancela la conexion
    })