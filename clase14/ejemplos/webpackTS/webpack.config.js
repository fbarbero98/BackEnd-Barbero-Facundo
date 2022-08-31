const path = require('path');
const nodeExternals = require('webpack-node-externals'); //Aca le decimos que estamos usando dependencias externas, despues lo especificamos en externals

module.exports = {
    mode: 'production', // primer parametro que pasamos : modo trabajo desarrollo o production
    entry: './src/index.ts', //el archivo que estamos empaquetando : el archivo de entrada de nuestro código
    //A partir de este archivo hacemos todo. Es el archivo mas importante de todos
    target: 'node', //Para decirle el ambiente de ejecucion que trabajamos, en este caso node
    externals: [nodeExternals()], // permite el correcto funcionamiento con lagunas librerías externas (express). Le da una ayuda a webpack para trabajar con dependencias externas.
    output: { //punto de salida, en que directorio queremos que salga el archivo resultante
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: { //configura como se resuelven los módulos 
        extensions: ['.ts', '.js'],//archivos de entrada: ts, archivo resultantes: js
    },
    module: { //sierve para aclararle a Webpack como debe procesar los loaders que queramos usar para un proyecto.
        rules: [ 
            {
                loader: 'ts-loader', //le decimos al wp que al momento de hacer las trasnf de codigo ts lo haga a codigo js y al final empaquetar ese codigo.
                exclude: /node_modules/ //le decimos que excluya node modules, xq no necesitamos que trasnforme nada de ahi dentro
            }
        ],
    }
};
