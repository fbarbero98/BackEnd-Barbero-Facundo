//! PASO 1 IMPORTAR MONGOOSE
import mongoose from "mongoose";

//! PASO 2 CREAR EL ESQUEMA DE LOS ESTUDIANTES:

const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    ingreso: { type: Boolean, default: false }
})

//! PASO 3 CREAMOS EL MODEL PARA QUE SE USE EL ESQUEMA Y SE CONECTE CON LA COLECCION
const estudiantesModel = mongoose.model('estudiantes', estudianteSchema) //model prepara la estructura que vamos a hacer el objeto con la insercion


//! PASO 4, CREAR LA CONST URL Y CONECTARNOS CON LA BASE DE DATOS
const URL = "mongodb+srv://fbarbero32065:Liceonaval98@cluster0.jc6dqxp.mongodb.net/colegio"

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Si trabajamos con modulos podemos hacer un await sin la necesidad de una funcion async. porque cad archivo de JS es un modulo distinto.

console.log('Base de datos conectada')


try {

    //? punto 1

    console.log('actualizar dni');
    const estudianteActualizado = await estudiantesModel.updateOne(
        { nombre: 'Lucas', apellido: 'Blanco' }, //El primer parametro que pasamos son los filtros que queremos hacer para ver a donde actualizar
        { dni: '20355875' } //Como segundo parametro pasamos la actualizacion del registro
    );
    console.log(estudianteActualizado);



    //? punto 2

    console.log('agregar campo ingreso')
    const estudianteIngresoActualizado = await estudiantesModel.updateMany(
        {}, { ingreso: false } //Primer parametro vacio porque quiero que sea a todos los registros. 
    )
    console.log(estudianteIngresoActualizado)

    //? punto 3

    console.log('modificar campo ingreso')
    const estudianteIngresoTrueActualizado = await estudiantesModel.updateMany(
        { curso: '1A' }, { ingreso: true }
    )

    console.log(estudianteIngresoTrueActualizado);

    //? punto 4

    const estudiantesAprobados = await estudiantesModel.find(
        {nota: {$gte: 4}},
        {_id: 0, _v: 0 }
        )

    console.log(estudiantesAprobados)


    //? punto 7

    console.log('Listar contenido de la coleccion estudiantes');

    const estudiantesTodos = await estudiantesModel.find(
        {}, {_v: 0}
    )
    //Hasta aca la parte de DB, ahora falta la parte de app:

    estudiantesTodos.forEach( estudiante => {
        console.log(
            JSON.stringify(estudiante), //Imprimimos el estudiante en formato string
            '--> fecha creacion: ',
            new Date(estudiante._id.getTimestamp()).toLocaleString() //Usamos el id de cada estudiante para conseguir la timestamp  con el metodo getTimestamp en formato toLocaleString
        )
    })

} catch (error) {
    console.log(error)
}
finally {
    await mongoose.disconnect();
}