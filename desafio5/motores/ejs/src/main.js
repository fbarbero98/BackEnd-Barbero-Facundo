const express = require('express');
const app = express()
// JSON settings
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Engine set
app.set('views', './views');
app.set('view engine', 'ejs');
// Products 
const Container = require('../../../api/Contenedor')
const products = new Container('../../resources/productos.txt')
// GET and POST

app.get('/', (req, res) => {
    res.render('inicio', {}) //hacemos que cuando se este en / se vea inicio
})
app.post('/productos', async (req, res)=> {
    let product = req.body;
    if(product){
        await products.saveProduct(product);
        console.log(`Producto guardado : ${JSON.stringify(product)}`);
        res.redirect('/');
    }
    else{res.sendStatus(400)}
    
})

app.get('/productos', async (req, res) => {
    const productos = await products.getAll()
    res.render('products', {productos}) //Cuando se este en /productos, se va a visualizar products y se le pasa {productos} para que lea los id, name, etc
})

app.listen(8080)