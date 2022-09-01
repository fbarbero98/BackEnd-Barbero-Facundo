
//! PASO 1: HAGO LOS IMPORTS Y CONFIGURO LA CONEXION CON LAS OPTIONS
import {
    options
} from './options/mysqlDB.js';
import knex from 'knex';

const knexConnection = knex(options);

//! PASO 2: HAGO LA FUNCION ASINCRONA PARA EJECUTAR LOS METODOS(ASINCRONOS)
(async () => {
    try {
        console.log('-------> Borro si existe la tabla')
        await knexConnection.schema.dropTableIfExists('articulos') //Si la tabla existe, la borra
//! METODO CREAR TABLA: 
        console.log('-------> Creamos la tabla')
        await knexConnection.schema.createTable('articulos', table => {

            table.increments('id').primary(); //Es un incremental primario

            table.string('nombre', 15).notNullable(); //Es un tipo string de no mas de 15 caracteres

            table.string('codigo', 10).notNullable();

            table.float('precio'); //Es un numero con decimales, se llama precio

            table.integer('stock'); //es un numero entero, se llama stock

        });

//! METODO INSERTAR REGISTROS
//? creo los registros y luego hago el insert
        console.log('-------> Insertando registros')
        const articulos = [{
                nombre: 'Leche',
                codigo: 'AB-12',
                precio: 23.60,
                stock: 24
            },
            {
                nombre: 'Harina',
                codigo: 'CD-34',
                precio: 12.80,
                stock: 45
            },
            {
                nombre: 'DDL',
                codigo: 'EF-56',
                precio: 32.30,
                stock: 16
            },
            {
                nombre: 'Fideos',
                codigo: 'FG-44',
                precio: 42.70,
                stock: 34
            },
            {
                nombre: 'Crema',
                codigo: 'CR-77',
                precio: 67.90,
                stock: 24
            }
        ];

        //? insetrt:
        await knexConnection('articulos').insert(articulos);

//! METODO PARA MOSTRAR LOS REGISTROS: 

        console.log('-------> Mostrando registros');
        const resultado = await knexConnection('articulos').select('*');
        console.log(resultado);

//! METODO PARA BORRAR UN REGISTRO EN PARTICULAR
        console.log('-------> Borrando registro');
        await knexConnection.from('articulos').where('id', 3).del() //elimino el que tenga id 3

//! METODO PARA ACTUALIZAR EL REGISTRO
        console.log('-------> Actualizando registro');
        await knexConnection.from('articulos').where('id', 2).update({ //actualizao el registro de id 2, le cambia el stock
            stock: 0
        });
    } catch (error) {
        console.log(error);
    } finally {
        knexConnection.destroy();
    }
})() // PARA QUE SE EJECUTE LA FUNCION