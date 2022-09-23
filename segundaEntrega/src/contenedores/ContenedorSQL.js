import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config) //Dependiendo de la dependencia elige la configuracion de knex
        this.tabla = tabla //la tabla que se genera
    }

    async getById(id) {
        try {
            const producto = await this.getAll(); //usa el get all para traer todos los productos
            const productoById = producto.find(p => p.id == id); //usa el metodo find para encontrar el que coincida con el id que pasamos por param.
            return productoById;
        } catch (error) {
            console.log('Hubo un error en getById')
        }
    }

    async getAll() {
        try {
            const productos = await this.knex(this.tabla).select('*'); //usa el metodo select all de SQL, para traer TODOS los productos de la tabla
            return productos;
        } catch (error) {
            console.log('Hubo un error en getAll SQL')
        }
    }

    async save(elem) {
        try {
            await this.knex(this.tabla).insert(elem); //Usa el metodo insert de SQL para sumar un elemento a la tabla
        } catch (error) {
            console.log('Hubo un error en save');
        }
    }

    async update(elem, id) {
        try {
            await this.knex.from(this.tabla).where('id', id).update(elem); //De la tabla, elige un elemento por el id, y lo modifica con la modificacion que hayamos hecho
        } catch (error) {
            console.log('Hubo un error en update');
        }
    }



    async deleteById(id) {
        try {
            await this.knex.from(this.tabla).where('id', id).del(); //De la tabla, elige un elemento por el id y lo elimina
        } catch (error) {
            console.log('Hubo un error en deleteById');
        }
    }

    async deleteAll() {
        try {
            await this.knex.from(this.tabla).del();
        } catch (error) {
            console.log('Hubo un error en deleteAll')
        }
    }

    async desconectar() {
        try {
            await this.knex.destroy()
        } catch (error) {
            console.log('Hubo un error en desconeccion');   
        }
        
    }
}

export default ContenedorSQL