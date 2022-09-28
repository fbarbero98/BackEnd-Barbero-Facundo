import mongoose from 'mongoose'
import config from '../config.js'
import * as objectUtils from "../utils/objectUtils.js"


await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async getById(id) {
        const objectRead = await this.coleccion.findOne({_id: id});
        return objectRead;
    }

    async getAll() {
        const objectRead = await this.coleccion.find();
        return objectRead;
    }

    async getByField(field, criteria) {
        const data = await this.model.findOne().where(field).equals(criteria);
        const plainData = objectUtils.returnPlainObj(data);
        const item = objectUtils.renameField(plainData, "_id", "id");
        return item;
      }

      
    async save(nuevoElem) {
        console.log(nuevoElem);
        const objectSaveModel = new this.coleccion({...nuevoElem,date: new Date().toLocaleString()});
        const savedObject = await objectSaveModel.save();
        console.log('Guardo este objeto en mongo', savedObject);

    }

    async update(obj,id) {
        
        //const object = this.getById(id);
        const objectUpdate = await this.coleccion.updateOne({_id: id},{ $set: {...obj}});
        console.log(objectUpdate);
       
    }

    async deleteById(id) {
        const objectDelete = await this.coleccion.deleteOne({_id: id});
        return objectDelete;
    }

    async deleteAll() {
        const object = this.getById(id);
        
    }
}

export default ContenedorMongoDb