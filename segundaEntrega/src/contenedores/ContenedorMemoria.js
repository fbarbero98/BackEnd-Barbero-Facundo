class ContenedorMemoria {
    constructor() {
        this.productos = []
        this.id = 1
    
    }

    getById(id) {
        const products = this.getAll();
        const lastElement = products[products.length - 1];
        const productById = products.find(p => p.id == id);
        if (lastElement >= productById) {
        return productById;
        } else {
            throw new Error;
        }
    }

    getAll() {
        return this.productos;
    }

    save(prod) {
        //POST
        try {
            this.productos.push({...prod,
                date: new Date().toLocaleString(),
                id: this.id++});
        } catch (error) {
            console.error("No se pudo guardar",error);
            return [];
        }
    }

    update(prod, id) {
        //PUT
        const products = this.getAll();
        let lastElement = products[products.length - 1];
        let productById = products.find(p => p.id == id);
        if (lastElement >= productById) {
            productById.title = prod.title;
            productById.price = prod.price;
            productById.thumbnail = prod.thumbnail;
            } else {
                throw new Error;
            }
    }

    deleteById(id) {
        //DELETE
        const products = this.getAll();
        const lastElement = products[products.length - 1];
        let productById = products.find(p => p.id == id);
        if (lastElement >= productById) {
            const position = products.indexOf(productById);
            products.splice(position, 1);
            } else {
                throw new Error;
            }
        
    }
}

export default ContenedorMemoria