import mongoose from "mongoose";


//Igual que antes con mongoose pero cambia la URL de conexion:

const URL = "mongodb+srv://fbarbero32065:Liceonaval98@cluster0.jc6dqxp.mongodb.net/ecommerce"

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: { type: String, unique: true }
});

const userModel = mongoose.model('usuarios', userSchema);


MongoAtlas()
async function MongoAtlas() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada');
        const users = await userModel.find({})

        console.log(users)
    }
    catch (error) {
        console.log(`Error de conexión a la base de datos ${error}`)
    }
}

