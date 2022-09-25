import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();
console.log('Base firebase conectada');
class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion);
        this.id = 1;
    }

    async getById(id) {
        try {
            const doc = this.coleccion.doc(`${id}`);
            const object = await doc.get();
            const response = object.data();
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    }

    async getAll() {
        try {
            const querySnapshot = await this.coleccion.get();
            let docs = querySnapshot.docs;
            return docs;
        } catch (error) {
            console.log(error);
        } 
    }

    async save(nuevoElem) {
        try {
                console.log('=======>',nuevoElem);
                const lastId = await this.getIdMax() + 1;

                let doc = this.coleccion.doc(`${lastId}`);
                  
                const object = {...nuevoElem,
                    date: new Date().toLocaleString(),
                    id: parseInt(lastId) } 
                console.log('========>34',object);             
                await doc.create(object);
                } catch (error) {
                console.log('este error jode',error);
            }
    }

    async getIdMax() {
         
        try{
              const objects = await this.getAll();
              const lastElement = objects[objects.length - 1];
              return parseInt(lastElement.id);
          }
          catch(error){
              console.log('ERROR AL OBTENER EL ULTIMO ID', error);
          }
    }

    async update(nuevoElem,id) {
        try {
            const doc = this.coleccion.doc(`${id}`);
            const object = await doc.update({...nuevoElem});
            console.log(object);
            return object;
        } catch (error) {
            console.log(error);
        }
        
    }

    async deleteById(id) {
        try {
            const doc = this.coleccion.doc(`${id}`);
            const object = await doc.delete();
            return object;
        } catch (error) {
            console.log(error);
        }
        }

    async deleteAll() {
        try {
            const doc = this.coleccion.doc();
            const object = await doc.delete();
            return object;
        } catch (error) {
            console.log(error);
        }
    }

    async desconectar() {
    }
}

export default ContenedorFirebase