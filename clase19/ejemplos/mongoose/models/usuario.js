//! PRIMERO TENEMOS QUE IMPORTAR LA DEPENDENCIA DE MONGOOSE PARA PODER TRABAJAR CON ESQUEMAS
//!Hay que haceer un type module en el package.json para esto.

import mongoose from "mongoose";

//! Importada la dependencia, definimos nuestro esquema

const usersCollection = 'usuarios';
const ejercicioCollection = 'estudiantes'

const userSchema = new mongoose.Schema({//Es el metodo que nos da mongoose
    nombre: {type: String, required: true, max: 100}, //Definimos la propiedad del schema en un objeto
    apellido: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    usuario: {type: String, required: true, max: 100},
    password : {type: Number, required: true},
});

export const users = mongoose.model(usersCollection, userSchema); //exportamos el modelo del esquema, pasamos como primer parametro la coleccion y como segundo parametro el esquema. 


