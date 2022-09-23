import * as fs from 'fs'
import config from '../config.js'

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = `${config.fileSystem.path}/${ruta}`;
        this.id = 1;
    }

    async getById(id) {
        try {
            const objects = await this.getAll();
            const objectsById =  objects.find(p => p.id == id);
            return objectsById;
        } catch (error) {
            console.log('Hubo un error al buscar el archivo',error);
        }
        
    }

    async getAll() {
        try {
            let productos = await fs.readFileSync(this.ruta, 'utf-8');
            return JSON.parse(productos);
        } catch (error) {
            console.error("No hay nada en el archivo",error);
            return [];
    }   
    }

    async save(obj) {
        let result = await this.getAll();
        const lastId = await this.getIdMax() + 1;
        result.push({
            ...obj,
            date: new Date().toLocaleString(),
            id: parseInt(lastId) 
        });
        fs.writeFileSync(this.ruta, JSON.stringify(result,null,2));
    }

    async getIdMax() {
         
        try{
              const fileData = await fs.promises.readFile(this.ruta, 'utf-8');
              const products = JSON.parse(fileData);
              const lastElement = products[products.length - 1];
              return lastElement.id;
          }
          catch{
              console.log('ERROR AL OBTENER EL ULTIMO ID', this.ruta);
              return 0;
          }
    }

    async update(obj,id) {
        
        const objects = await this.getAll();
        const objeto = objects.find(p => p.id == id);
        const index = objects.indexOf(objeto);
        objects.splice(index,1, {
            ...obj, id: parseInt(id)
        });    
        fs.writeFileSync(this.ruta, JSON.stringify(objects,null,2));
        
    }

    async deleteById(id) {
        const objects = await this.getAll();
        const objeto = objects.find(p => p.id == id);
        const index = objects.indexOf(objeto);
        objects.splice(index,1);
        fs.writeFileSync(this.ruta, JSON.stringify(objects,null,2));            
        
    }

    async deleteAll() {
        const arr = [];
        fs.writeFileSync(this.ruta, JSON.stringify(arr,null,2));            
       
    }
}


export default ContenedorArchivo