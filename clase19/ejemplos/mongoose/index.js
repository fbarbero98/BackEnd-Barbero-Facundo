//!Primero importamos la dependencia de mongoose.
import mongoose from "mongoose";

//! Segundo importamos el modelo
import * as model from "./models/usuario.js";

//Todas las operaciones que hagamos son asincronas. 

CRUD();

async function CRUD() {

    try {
        /*------------------------------------------*/
        /*      CONEXION CON LA BASE DE DATOS       */
        /*------------------------------------------*/

        const URL = 'mongodb://localhost:27017/ecommerce32065'; //Este es el string de conexion

        await mongoose.connect(URL, { //Pasamos como primer parametro la url y como segundo atributos de mongoose (porque usamos el metodo conect de mongoose)
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('base de datos conectada');

        /*------------------------------------------*/
        /*                  CREATE                  */
        /*------------------------------------------*/

        console.log('CREATE')
        const usuario = { nombre: "Juan", apellido: "Perez", email: "algo@gmail.com", usuario: "Jperez99", password: 1234, };
        const userSaveModel = new model.users(usuario); //Aca insertamos el objeto en el esquema que creamos en usuario.js 
        const savedUser = await userSaveModel.save(); //Cuando hacemos el .save() persistimos la entidad a la base de datos.
        //guardamos el documento "mapeado" al esquema en la DB
        console.log(savedUser);


        /*------------------------------------------*/
        /*                  READ                    */
        /*------------------------------------------*/

        const usersRead = await model.users.find({ nombre: 'Juan' });
        console.log(usersRead)

        /*------------------------------------------*/
        /*               UPDATE:                    */
        /*------------------------------------------*/

        const updateduser = await model.users.updateOne(
            {nombre: 'Juan'}, {$set: {password: 555}});

            console.log(updateduser)

        /*------------------------------------------*/
        /*               delete:                    */
        /*------------------------------------------*/

        const deleteduser = await model.users.deleteMany({ nombre: "Juan"});
        console.log(deleteduser);
    } catch (error) {
        console.log(error)
    }
}